/**
 * Mechanical checks the eye cannot make reliably from a screenshot: images that
 * failed to load, elements overflowing the viewport, contrast on the smallest
 * text, and heading order.
 *
 *   node scripts/audit.mjs [/en/ /en/projects/sisp/]
 */
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { existsSync, statSync } from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright-core';
import { settle } from './lib-page.mjs';

const OUT = path.join(process.cwd(), 'out');
const PORT = 4322;
const ROUTES = process.argv.slice(2).length
  ? process.argv.slice(2)
  : ['/en/', '/fr/', '/en/projects/sisp/', '/en/projects/industrial-energy-platform/'];

const MIME = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp',
  '.avif': 'image/avif', '.svg': 'image/svg+xml', '.gif': 'image/gif', '.mp4': 'video/mp4',
  '.webm': 'video/webm', '.pdf': 'application/pdf', '.woff2': 'font/woff2', '.json': 'application/json',
};

const serve = () =>
  createServer(async (req, res) => {
    const url = decodeURIComponent((req.url ?? '/').split('?')[0]);
    let file = path.join(OUT, url);
    if (existsSync(file) && statSync(file).isDirectory()) file = path.join(file, 'index.html');
    if (!existsSync(file) && existsSync(`${file}.html`)) file = `${file}.html`;
    if (!existsSync(file)) { res.writeHead(404); res.end('nf'); return; }
    res.writeHead(200, { 'content-type': MIME[path.extname(file).toLowerCase()] ?? 'application/octet-stream' });
    res.end(await readFile(file));
  });

const AUDIT = () => {
  const out = { images: [], overflow: [], headings: [], smallText: [], emptyBoxes: [] };

  for (const img of Array.from(document.images)) {
    const r = img.getBoundingClientRect();
    if (!img.complete || img.naturalWidth === 0) {
      out.images.push({ src: img.currentSrc || img.src, reason: 'did not load', w: Math.round(r.width) });
    } else if (r.width > 0 && r.height > 0 && (img.naturalWidth < 200 || img.naturalHeight < 120)) {
      out.images.push({ src: img.currentSrc, reason: `tiny source ${img.naturalWidth}x${img.naturalHeight}`, w: Math.round(r.width) });
    }
  }

  const vw = document.documentElement.clientWidth;
  // Wide content (a schematic, a table) legitimately overflows *inside* its own
  // horizontal scroll container. Only the document scrolling sideways is a bug.
  const inScroller = (el) => {
    for (let n = el.parentElement; n && n !== document.body; n = n.parentElement) {
      const ov = getComputedStyle(n).overflowX;
      if (ov === 'auto' || ov === 'scroll') return true;
    }
    return false;
  };
  out.docScrollsX = document.documentElement.scrollWidth > vw + 1;
  for (const el of Array.from(document.querySelectorAll('body *'))) {
    const r = el.getBoundingClientRect();
    if (r.width === 0) continue;
    if (inScroller(el)) continue;
    if (r.right > vw + 2 || r.left < -2) {
      out.overflow.push({ tag: el.tagName.toLowerCase(), cls: (el.className || '').toString().slice(0, 60), right: Math.round(r.right), left: Math.round(r.left) });
    }
  }

  let prev = 0;
  for (const h of Array.from(document.querySelectorAll('h1,h2,h3,h4,h5,h6'))) {
    const level = Number(h.tagName[1]);
    if (prev && level > prev + 1) out.headings.push({ text: (h.textContent || '').trim().slice(0, 50), from: prev, to: level });
    prev = level;
  }

  const px = (v) => Number.parseFloat(v) || 0;
  const seen = new Set();
  for (const el of Array.from(document.querySelectorAll('p,span,li,dt,dd,a,button,figcaption'))) {
    if (!el.textContent || !el.textContent.trim()) continue;
    if (el.querySelector('p,span,li,a,button')) continue;
    const cs = getComputedStyle(el);
    const size = px(cs.fontSize);
    if (size >= 12) continue;
    const key = `${size}|${cs.color}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.smallText.push({ size, color: cs.color, sample: el.textContent.trim().slice(0, 40) });
  }

  return out;
};

async function main() {
  const server = serve();
  await new Promise((r) => server.listen(PORT, r));
  const browser = await chromium.launch({ channel: 'chrome' });
  let problems = 0;

  for (const width of [1440, 390]) {
    for (const route of ROUTES) {
      const ctx = await browser.newContext({ viewport: { width, height: 900 }, reducedMotion: 'reduce' });
      const page = await ctx.newPage();
      const failures = [];
      page.on('requestfailed', (r) => failures.push(r.url()));
      page.on('console', (m) => { if (m.type() === 'error') failures.push(`console: ${m.text().slice(0, 120)}`); });
      await page.goto(`http://127.0.0.1:${PORT}${route}`, { waitUntil: 'networkidle' });
      await settle(page);
      const res = await page.evaluate(AUDIT);

      const lines = [];
      if (res.images.length) lines.push(...res.images.map((i) => `    IMAGE  ${i.reason}  ${i.src.split('/').pop()}`));
      if (res.docScrollsX) lines.push(`    DOC SCROLLS SIDEWAYS at ${width}px`);
      if (res.overflow.length) lines.push(...res.overflow.slice(0, 4).map((o) => `    OVERFLOW  <${o.tag}> right=${o.right} (vw ${width})  ${String(o.cls).slice(0, 50)}`));
      if (res.headings.length) lines.push(...res.headings.map((h) => `    HEADING  h${h.from} -> h${h.to}  "${h.text}"`));
      if (res.smallText.length) lines.push(...res.smallText.map((s) => `    SMALL  ${s.size}px ${s.color}  "${s.sample}"`));
      if (failures.length) lines.push(...[...new Set(failures)].slice(0, 5).map((f) => `    FAILED  ${f.slice(0, 110)}`));

      problems += lines.length;
      console.log(`  ${String(width).padEnd(5)} ${route}${lines.length ? '' : '  ok'}`);
      lines.forEach((l) => console.log(l));
      await ctx.close();
    }
  }

  await browser.close();
  server.close();
  console.log(problems ? `\n  ${problems} finding(s)` : '\n  clean');
}

main().catch((e) => { console.error(e); process.exit(1); });

/**
 * Contrast checker for interactive controls, in every state.
 *
 * A resting-state check passes a control whose label becomes unreadable the
 * moment a pointer touches it — which is precisely when someone is aiming at
 * it. This asserts rest, hover, focus-visible and active, and for a control
 * whose background is a gradient it samples the real rendered pixels across
 * the sweep rather than trusting a single declared colour.
 *
 *   node scripts/contrast.mjs
 */
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { existsSync, statSync } from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright-core';
import sharp from 'sharp';

const OUT = path.join(process.cwd(), 'out');
const PORT = 4327;
const FLOOR = 4.5;

const MIME = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.avif': 'image/avif',
  '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.pdf': 'application/pdf',
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

const lum = ([r, g, b]) => {
  const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; };
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
};
const ratio = (a, b) => {
  const [hi, lo] = [lum(a), lum(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};
const parse = (css) => css.match(/\d+(\.\d+)?/g).slice(0, 3).map(Number);

async function main() {
  const server = serve();
  await new Promise((r) => server.listen(PORT, r));
  const browser = await chromium.launch({ channel: 'chrome' });
  let failures = 0;

  for (const theme of ['dark', 'light']) {
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, colorScheme: theme });
    const page = await ctx.newPage();
    await page.goto(`http://127.0.0.1:${PORT}/en/`, { waitUntil: 'networkidle' });
    await page.evaluate((t) => document.documentElement.setAttribute('data-theme', t), theme);
    await page.waitForTimeout(300);

    const primary = page.locator('a.ctl-primary').first();
    const box = await primary.boundingBox();
    if (!box) throw new Error('primary control not found');

    for (const state of ['rest', 'hover', 'focus-visible', 'active']) {
      if (state === 'hover' || state === 'active') await primary.hover();
      if (state === 'active') await page.mouse.down();
      if (state === 'focus-visible') {
        await page.mouse.move(5, 5);
        await primary.evaluate((el) => el.focus());
        await page.keyboard.press('Shift+Tab');
        await page.keyboard.press('Tab');
      }
      await page.waitForTimeout(520);

      const fg = parse(await primary.evaluate((el) => getComputedStyle(el).color));

      // Sample the real painted background across the control's width, on a
      // row clear of the glyphs, so a gradient is measured rather than assumed.
      const shot = await page.screenshot({
        clip: { x: box.x + 2, y: box.y + 3, width: box.width - 4, height: 4 },
      });
      const { data, info } = await sharp(shot).raw().toBuffer({ resolveWithObject: true });
      let worst = Infinity;
      let worstAt = 0;
      for (let x = 0; x < info.width; x += Math.max(1, Math.floor(info.width / 40))) {
        const i = x * info.channels;
        const bg = [data[i], data[i + 1], data[i + 2]];
        const r = ratio(fg, bg);
        if (r < worst) { worst = r; worstAt = Math.round((x / info.width) * 100); }
      }

      if (state === 'active') await page.mouse.up();

      const ok = worst >= FLOOR;
      if (!ok) failures += 1;
      console.log(
        `  ${ok ? 'ok   ' : 'FAIL '} ${theme.padEnd(5)} ${state.padEnd(14)} worst ${worst.toFixed(2)}:1 at ${worstAt}% of the sweep`,
      );
    }
    await ctx.close();
  }

  await browser.close();
  server.close();
  console.log(failures ? `\n  ${failures} state(s) below ${FLOOR}:1` : `\n  every state clears ${FLOOR}:1`);
  process.exit(failures ? 1 : 0);
}

main().catch((e) => { console.error(e); process.exit(1); });

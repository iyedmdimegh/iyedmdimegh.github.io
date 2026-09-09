/**
 * Asset pipeline.
 *
 * Copies `assets/` into `public/assets/`, emits AVIF and WebP derivatives at a
 * set of widths, and writes `content/generated/image-manifest.json` with the
 * measured intrinsic size of every file.
 *
 * Dimensions are measured from the real pixels rather than written by hand,
 * so a width/height in the markup can never drift from the file it describes.
 * The old site shipped a 6.5 MB phone photo and a 7008x4672 JPEG straight to
 * browsers with no width, height, srcset, or lazy loading at all.
 *
 *   node scripts/assets.mjs
 */
import { mkdir, readdir, stat, copyFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = process.cwd();
const SRC = path.join(ROOT, 'assets');
const OUT = path.join(ROOT, 'public', 'assets');
const MANIFEST = path.join(ROOT, 'content', 'generated', 'image-manifest.json');

const WIDTHS = [400, 800, 1200, 1600, 2000];
const RASTER = new Set(['.png', '.jpg', '.jpeg']);
const PASSTHROUGH = new Set(['.svg', '.gif', '.mp4', '.webm', '.pdf', '.pptx']);

/** Derivatives are pointless above the source width; never upscale. */
const widthsFor = (w) => {
  const usable = WIDTHS.filter((x) => x < w);
  return usable.includes(w) || usable.length === 0 ? [...usable, w] : [...usable, w];
};

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

const manifest = {};
let derived = 0;
let copied = 0;

async function handle(file) {
  const rel = path.relative(SRC, file).split(path.sep).join('/');
  const publicPath = `/assets/${rel}`;
  const dest = path.join(OUT, rel);
  const ext = path.extname(file).toLowerCase();

  await mkdir(path.dirname(dest), { recursive: true });

  if (PASSTHROUGH.has(ext)) {
    await copyFile(file, dest);
    copied += 1;
    if (ext === '.svg') {
      manifest[publicPath] = { width: 0, height: 0, widths: [], formats: [], bytes: (await stat(file)).size };
    }
    return;
  }

  if (!RASTER.has(ext)) return;

  const image = sharp(file, { failOn: 'none' });
  const meta = await image.metadata();
  const width = meta.width ?? 0;
  const height = meta.height ?? 0;
  if (!width || !height) {
    console.warn(`  ! unreadable, skipped: ${rel}`);
    return;
  }

  // The original ships too, so a browser without AVIF or WebP still resolves.
  await copyFile(file, dest);
  copied += 1;

  const stem = dest.replace(/\.[^.]+$/, '');
  const targets = widthsFor(width);

  for (const w of targets) {
    const resized = sharp(file, { failOn: 'none' }).resize({ width: w, withoutEnlargement: true });
    await resized.clone().avif({ quality: 55, effort: 4 }).toFile(`${stem}-${w}.avif`);
    await resized.clone().webp({ quality: 76 }).toFile(`${stem}-${w}.webp`);
    derived += 2;
  }

  manifest[publicPath] = {
    width,
    height,
    widths: targets,
    formats: ['avif', 'webp'],
    bytes: (await stat(file)).size,
  };
}

async function main() {
  if (!existsSync(SRC)) {
    console.error(`No assets/ directory at ${SRC}`);
    process.exit(1);
  }
  await mkdir(OUT, { recursive: true });
  await mkdir(path.dirname(MANIFEST), { recursive: true });

  for await (const file of walk(SRC)) {
    // Derivatives from a previous run are regenerated, never re-ingested.
    if (/-\d+\.(avif|webp)$/.test(file)) continue;
    await handle(file);
  }

  const ordered = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)));
  await writeFile(MANIFEST, `${JSON.stringify(ordered, null, 2)}\n`, 'utf8');

  console.log(`  copied     ${copied}`);
  console.log(`  derived    ${derived}`);
  console.log(`  manifest   ${Object.keys(ordered).length} entries -> ${path.relative(ROOT, MANIFEST)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

import type { NextConfig } from 'next';

/**
 * Static export to GitHub Pages.
 *
 * The site is served from a user page (iyedmdimegh.github.io), so there is no
 * base path to prepend. The previous site hardcoded an absolute production URL
 * onto every image src, which meant local development loaded images from
 * production; root-relative paths everywhere is the fix.
 */
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    // next/image's optimizer cannot run on a static host. The asset pipeline
    // in scripts/assets.mjs emits the derivatives instead, and components read
    // widths and formats back from the generated manifest.
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;

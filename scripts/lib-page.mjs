/**
 * Shared page preparation for the capture and audit scripts.
 *
 * A jump to the bottom of the page does NOT load lazy images: nothing between
 * the fold and the footer ever intersects the viewport, so every deferred image
 * stays unloaded and both a screenshot and an audit report it as missing. The
 * page has to be walked.
 */

/** Walk the page a viewport at a time so every lazy image intersects, then wait for them. */
export async function settle(page) {
  await page.evaluate(async () => {
    const step = Math.round(window.innerHeight * 0.8);
    const height = () => document.documentElement.scrollHeight;
    for (let y = 0; y < height(); y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 90));
    }
    window.scrollTo(0, height());
    await new Promise((r) => setTimeout(r, 220));
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 160));
  });

  // Force anything still deferred, then wait for every image to resolve.
  await page.evaluate(async () => {
    for (const img of Array.from(document.images)) {
      if (!img.complete) img.loading = 'eager';
    }
    await Promise.all(
      Array.from(document.images).map((img) =>
        img.complete
          ? Promise.resolve()
          : new Promise((resolve) => {
              img.addEventListener('load', resolve, { once: true });
              img.addEventListener('error', resolve, { once: true });
              setTimeout(resolve, 4000);
            }),
      ),
    );
    if (document.fonts?.ready) await document.fonts.ready;
  });

  await page.waitForTimeout(250);
}

/** Freeze motion so nothing is measured or captured mid-transition. */
export async function freeze(page) {
  await page.addStyleTag({
    content: `*,*::before,*::after{animation:none!important;transition:none!important}
              .rise{opacity:1!important;transform:none!important}`,
  });
}

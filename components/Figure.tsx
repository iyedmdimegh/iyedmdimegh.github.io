import { imageMeta, srcSet, isVideo, t, type Figure as FigureData, type Locale } from '@/content';

/**
 * Intrinsic dimensions and the srcset width list come from the generated
 * manifest, measured off the real file. Nothing here is hand-written, so a
 * declared size cannot drift from the pixels.
 */
export function Figure({
  figure,
  locale,
  sizes = '100vw',
  priority = false,
  className = '',
}: {
  figure: FigureData;
  locale: Locale;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  const alt = t(figure.alt, locale);
  const meta = imageMeta(figure.src);

  if (isVideo(figure.src)) {
    const poster = figure.src.replace(/\.(mp4|webm)$/, '-poster.jpg');
    return (
      <video
        className={className}
        poster={poster}
        width={meta?.width}
        height={meta?.height}
        autoPlay
        muted
        loop
        playsInline
        aria-label={alt}
      >
        <source src={figure.src} type="video/mp4" />
      </video>
    );
  }

  const avif = srcSet(figure.src, 'avif');
  const webp = srcSet(figure.src, 'webp');

  return (
    <picture>
      {avif && <source type="image/avif" srcSet={avif} sizes={sizes} />}
      {webp && <source type="image/webp" srcSet={webp} sizes={sizes} />}
      <img
        src={figure.src}
        alt={alt}
        width={meta?.width}
        height={meta?.height}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
        className={className}
      />
    </picture>
  );
}

/**
 * A figure that does not exist yet is said so plainly. It is never replaced
 * with a decorative stand-in, and never quietly omitted.
 */
export function PlaceholderNote({ label, note }: { label: string; note: string }) {
  return (
    <div className="flex min-h-44 flex-col justify-end gap-1 border border-dashed border-[var(--rule)] p-5">
      <span className="t-data text-[var(--warn)]">{label}</span>
      <span className="max-w-[46ch] text-[13px] leading-relaxed text-[var(--ink-3)]">{note}</span>
    </div>
  );
}

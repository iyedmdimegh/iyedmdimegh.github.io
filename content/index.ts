import manifest from './generated/image-manifest.json';
import { LOCALES, type Locale, type Localized } from './types';

export * from './types';
export { profile, socials, SITE_ORIGIN } from './profile';
export { experience } from './experience';
export { projects, featuredProjects } from './projects';
export { publications } from './publications';
export { awards } from './awards';
export { organizations } from './organizations';
export { updates } from './updates';
export { education, spokenLanguages } from './education';
export { skills, SKILL_GROUP_LABELS, unmappedTech, type SkillGroup } from './skills';
export { ui } from './ui';

/** Read a localized value. */
export const t = <T>(value: Localized<T>, locale: Locale): T => value[locale];

export const isLocale = (value: string): value is Locale =>
  (LOCALES as readonly string[]).includes(value);

export const otherLocale = (locale: Locale): Locale => (locale === 'en' ? 'fr' : 'en');

export interface ImageMeta {
  width: number;
  height: number;
  widths: number[];
  formats: string[];
  bytes: number;
  poster?: string;
}

const images = manifest as Record<string, ImageMeta>;

/**
 * Measured dimensions for an image, from the asset pipeline's manifest.
 * Returns undefined for a path the pipeline never produced — callers render
 * without intrinsic dimensions rather than inventing them.
 */
export const imageMeta = (src: string): ImageMeta | undefined => images[src];

/**
 * Build a srcset for one format from the widths the pipeline actually emitted.
 * Returns undefined when there are none, so the caller falls back to `src`.
 */
export function srcSet(src: string, format: 'avif' | 'webp'): string | undefined {
  const meta = images[src];
  if (!meta || meta.widths.length === 0 || !meta.formats.includes(format)) return undefined;
  const stem = src.replace(/\.[^.]+$/, '');
  return meta.widths.map((w) => `${stem}-${w}.${format} ${w}w`).join(', ');
}

export const isVideo = (src: string): boolean => /\.(mp4|webm)$/.test(src);

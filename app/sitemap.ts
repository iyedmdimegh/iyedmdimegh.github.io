import type { MetadataRoute } from 'next';
import { LOCALES, SITE_ORIGIN, projects } from '@/content';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = projects.filter((p) => p.depth === 'page');

  return LOCALES.flatMap((locale) => [
    {
      url: `${SITE_ORIGIN}/${locale}/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    ...pages.map((p) => ({
      url: `${SITE_ORIGIN}/${locale}/projects/${p.slug}/`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    })),
  ]);
}

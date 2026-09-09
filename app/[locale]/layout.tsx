import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Chrome } from '@/components/Chrome';
import { LOCALES, SITE_ORIGIN, isLocale, profile, publications, t, ui } from '@/content';

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title: `${profile.name} — ${t(profile.title, locale)}`,
    description: t(ui.meta.description, locale),
    alternates: {
      canonical: `/${locale}/`,
      languages: { en: '/en/', fr: '/fr/' },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const paper = publications.find((p) => p.indexed);

  /**
   * Structured data the old site had none of: a Person, and the indexed paper
   * as a ScholarlyArticle. Only the genuinely peer-reviewed publication is
   * described as one — the SMARTSHIELD competition paper is not.
   */
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    url: `${SITE_ORIGIN}/${locale}/`,
    jobTitle: t(profile.title, locale),
    email: `mailto:${profile.email}`,
    affiliation: {
      '@type': 'CollegeOrUniversity',
      name: t(profile.affiliationFull, locale),
    },
    knowsLanguage: ['ar', 'fr', 'en'],
    sameAs: [
      'https://github.com/iyedmdimegh',
      'https://www.linkedin.com/in/iyed-mdimegh-21b1b5285/',
    ],
    ...(paper
      ? {
          subjectOf: {
            '@type': 'ScholarlyArticle',
            name: paper.title,
            author: paper.authors.map((name) => ({ '@type': 'Person', name })),
            datePublished: String(paper.year),
            publisher: { '@type': 'Organization', name: 'IEEE' },
            url: paper.artifacts.find((a) => a.kind === 'paper')?.href,
          },
        }
      : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a
        href="#main"
        className="t-data sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:border focus:border-[var(--cyan)] focus:bg-[var(--void)] focus:px-4 focus:py-2 focus:text-[var(--cyan)]"
      >
        {t(ui.labels.skipToContent, locale)}
      </a>
      <Chrome locale={locale} />
      <main id="main">{children}</main>
    </>
  );
}

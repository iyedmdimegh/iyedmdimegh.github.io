import { notFound } from 'next/navigation';
import { Hero } from '@/components/Hero';
import { Experience } from '@/components/Experience';
import { Work } from '@/components/Work';
import {
  Awards,
  Contact,
  EducationAndLanguages,
  Footer,
  Leadership,
  News,
  Publications,
  Skills,
} from '@/components/Record';
import { Shell } from '@/components/Section';
import { LOCALES, isLocale } from '@/content';

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

/**
 * Experience leads, ahead of Selected Work — seven roles including two research
 * engagements is unusual for a student, so the volume is itself the argument.
 */
export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <>
      <Hero locale={locale} />
      <Shell>
        <Experience locale={locale} />
        <Work locale={locale} />
        <Publications locale={locale} />
        <Awards locale={locale} />
        <Leadership locale={locale} />
        <Skills locale={locale} />
        <News locale={locale} />
        <EducationAndLanguages locale={locale} />
        <Contact locale={locale} />
        <Footer locale={locale} />
      </Shell>
    </>
  );
}

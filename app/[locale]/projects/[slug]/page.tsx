import type { Metadata } from 'next';
import { Arrow } from '@/components/Arrow';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Figure, PlaceholderNote } from '@/components/Figure';
import { Reveal } from '@/components/primitives';
import { Shell } from '@/components/Section';
import { Tags } from '@/components/Tags';
import { Schematic } from '@/components/Schematic';
import { Footer } from '@/components/Record';
import { LOCALES, experience, isLocale, projects, t, ui, type Locale } from '@/content';

const pageProjects = projects.filter((p) => p.depth === 'page');

export function generateStaticParams() {
  return LOCALES.flatMap((locale) => pageProjects.map((p) => ({ locale, slug: p.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = pageProjects.find((p) => p.slug === slug);
  if (!project || !isLocale(locale)) return {};
  return {
    title: t(project.title, locale),
    description: t(project.outcome, locale),
    alternates: {
      canonical: `/${locale}/projects/${slug}/`,
      languages: { en: `/en/projects/${slug}/`, fr: `/fr/projects/${slug}/` },
    },
    openGraph: {
      title: t(project.title, locale),
      description: t(project.outcome, locale),
      type: 'article',
    },
  };
}

/**
 * Read mode. The write-up delivers what the card's tags promised, and every
 * measured claim sits next to the artifact that backs it.
 */
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const project = pageProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  const detail = project.detail;
  const role = project.roleSlug ? experience.find((r) => r.slug === project.roleSlug) : undefined;

  return (
    <Shell>
      <article className="pt-16 pb-8">
        <Link
          href={`/${locale}/#work`}
          className="t-data text-[var(--ink-3)] no-underline transition-colors hover:text-[var(--cyan)]"
        >
          <Arrow back /> {t(ui.labels.backToIndex, locale)}
        </Link>

        <header className="mt-8">
          <h1 className="t-display max-w-[18ch] text-[clamp(2.2rem,5.6vw,4.2rem)]">
            {t(project.title, locale)}
          </h1>
          <p className="t-measure mt-6 max-w-[56ch] text-[18px] leading-relaxed text-[var(--ink-2)]">
            {t(project.outcome, locale)}
          </p>

          {detail?.pullQuote && (
            <p className="t-display mt-9 max-w-[26ch] border-l-2 border-[var(--magenta)] pl-5 text-[clamp(1.3rem,2.6vw,2rem)] text-[var(--ink)]">
              {t(detail.pullQuote, locale)}
            </p>
          )}

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            {project.period && <span className="t-data text-[var(--ink-3)]">{project.period}</span>}
            {role && (
              <span className="t-data text-[var(--ink-3)]">
                {t(ui.labels.builtAt, locale)} {role.company}
              </span>
            )}
            {project.artifacts.map((a) => (
              <a
                key={a.href}
                href={a.href}
                className="t-data text-[var(--magenta)] no-underline transition-colors hover:text-[var(--cyan)]"
              >
                {t(a.label, locale)} <Arrow />
              </a>
            ))}
          </div>

          <Tags tags={project.tags} locale={locale} className="mt-7" />
        </header>

        {detail?.metrics && detail.metrics.length > 0 && (
          <dl className="mt-14 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-[var(--rule-soft)] pt-8 md:grid-cols-3 lg:grid-cols-5">
            {detail.metrics.map((m) => (
              <div key={t(m.key, locale)}>
                <dd
                  className={`t-display tnum text-[clamp(1.6rem,3.2vw,2.4rem)] ${
                    m.tone === 'ok'
                      ? 'text-[var(--ok)]'
                      : m.tone === 'warn'
                        ? 'text-[var(--warn)]'
                        : m.tone === 'crit'
                          ? 'text-[var(--crit)]'
                          : 'text-[var(--cyan)]'
                  }`}
                >
                  {m.value}
                  {m.unit && <span className="text-[0.5em] opacity-70"> {m.unit}</span>}
                </dd>
                <dt className="mt-2 text-[12.5px] leading-snug text-[var(--ink-3)]">
                  {t(m.key, locale)}
                </dt>
              </div>
            ))}
          </dl>
        )}

        <div className="mt-14 grid grid-cols-1 gap-x-14 gap-y-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
          <div>
            {detail?.context && (
              <Block title={t(ui.labels.context, locale)}>
                {t(detail.context, locale).map((para) => (
                  <p key={para} className="t-measure text-[15.5px] leading-relaxed text-[var(--ink-2)]">
                    {para}
                  </p>
                ))}
              </Block>
            )}

            {detail?.approach && (
              <Block title={t(ui.labels.approach, locale)}>
                <ul className="space-y-4">
                  {t(detail.approach, locale).map((line) => (
                    <li
                      key={line}
                      className="t-measure relative pl-5 text-[15px] leading-relaxed text-[var(--ink-2)] before:absolute before:top-[0.7em] before:left-0 before:h-px before:w-2.5 before:bg-[var(--cyan)]"
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              </Block>
            )}

            {!detail && (
              <p className="t-measure text-[15.5px] leading-relaxed text-[var(--ink-2)]">
                {t(project.description, locale)}
              </p>
            )}

            <Block title={t(ui.labels.inPlainTerms, locale)}>
              <p className="t-measure border-l border-[var(--cyan-quiet)] pl-4 text-[14.5px] leading-relaxed text-[var(--ink-3)]">
                {t(project.plainly, locale)}
              </p>
            </Block>
          </div>

          <aside className="lg:sticky lg:top-24">
            {detail?.role && (
              <div className="border-t border-[var(--rule-soft)] pt-5">
                <h2 className="t-data text-[var(--cyan)]">{t(ui.labels.role, locale)}</h2>
                <p className="mt-3 text-[14px] leading-relaxed text-[var(--ink-2)]">
                  {t(detail.role, locale)}
                </p>
              </div>
            )}
            {detail?.team && detail.team.length > 0 && (
              <div className="mt-8 border-t border-[var(--rule-soft)] pt-5">
                <h2 className="t-data text-[var(--ink-3)]">{t(ui.labels.team, locale)}</h2>
                <ul className="mt-3 space-y-1">
                  {detail.team.map((name) => (
                    <li key={name} className="text-[14px] text-[var(--ink-2)]">
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="mt-8 border-t border-[var(--rule-soft)] pt-5">
              <h2 className="t-data text-[var(--ink-3)]">Stack</h2>
              <ul className="mt-3 flex flex-wrap gap-x-2.5 gap-y-1">
                {project.tech.map((tech) => (
                  <li key={tech} className="t-data text-[var(--ink-2)]">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        {/* Scale two: the system's own data path, drawn, with current running the
            live route. It leads the figures because it explains them. */}
        {detail?.schematic && (
          <Reveal>
            <section className="mt-16 border-t border-[var(--rule-soft)] pt-8">
              <h2 className="t-data mb-6 text-[var(--ink-3)]">{t(ui.labels.dataPath, locale)}</h2>
              <Schematic
                schematic={detail.schematic}
                locale={locale}
                label={`${t(project.title, locale)} — ${t(detail.schematic.caption, locale)}`}
              />
            </section>
          </Reveal>
        )}

        {/* Plates: each figure seamed to its own caption, never floating free. */}
        {detail?.plates && detail.plates.length > 0 && (
          <div className="mt-16 space-y-14">
            {detail.plates.map((plate) => (
              <Reveal key={plate.figure.src}>
                <figure className="m-0">
                  <Figure
                    figure={plate.figure}
                    locale={locale}
                    sizes="(min-width: 1200px) 1100px, 100vw"
                    className="h-auto w-full border border-[var(--rule-soft)]"
                  />
                  <figcaption className="mt-4 border-t border-[var(--rule)] pt-3">
                    <span className="t-data text-[var(--magenta)]">
                      {t(plate.plateLabel, locale)}
                    </span>
                    <p className="t-measure mt-2 text-[14px] leading-relaxed text-[var(--ink-2)]">
                      {t(plate.caption, locale)}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        )}

        {/* Projects with no detail plates still show their figures. */}
        {!detail?.plates && project.figures.length > 0 && (
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            {project.figures.map((fig) =>
              fig.placeholder ? (
                <PlaceholderNote
                  key={fig.src}
                  label={t(ui.labels.pendingMaterial, locale)}
                  note={t(ui.labels.pendingMaterialNote, locale)}
                />
              ) : (
                <Figure
                  key={fig.src}
                  figure={fig}
                  locale={locale}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="h-auto w-full border border-[var(--rule-soft)]"
                />
              ),
            )}
          </div>
        )}

        <nav className="mt-20 border-t border-[var(--rule-soft)] pt-8">
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {pageProjects
              .filter((p) => p.slug !== project.slug)
              .map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/${locale}/projects/${p.slug}/`}
                    className="t-data text-[var(--ink-3)] no-underline transition-colors hover:text-[var(--magenta)]"
                  >
                    {t(p.title, locale)}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      </article>
      <Footer locale={locale} />
    </Shell>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-11">
      <h2 className="t-data mb-4 text-[var(--ink-3)]">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

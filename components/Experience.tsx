import Link from 'next/link';
import { Arrow } from './Arrow';
import { Reveal } from './primitives';
import { Section } from './Section';
import { experience, projects, t, ui, type Locale } from '@/content';

/**
 * Seven roles, leading the page. No cards: each role is a row on a shared rail,
 * with a node marking it. Rank comes from brightness and scale.
 *
 * Three roles produced projects with their own pages, so they link across
 * rather than repeating the work in two sections.
 */
export function Experience({ locale }: { locale: Locale }) {
  return (
    <Section
      id="experience"
      title={t(ui.sections.experience, locale)}
      intro={
        locale === 'en'
          ? 'Seven roles across four years, two of them research engagements. Where a role produced a project, it links to the write-up.'
          : 'Sept expériences en quatre ans, dont deux collaborations de recherche. Lorsqu’une expérience a donné un projet, elle renvoie à son article.'
      }
    >
      <ol className="relative">
        {/* The rail: one hairline the whole column hangs from. */}
        <div
          aria-hidden="true"
          className="absolute top-2 bottom-2 left-[7px] w-px bg-[var(--rule)] md:left-[calc(11rem+7px)]"
        />

        {experience.map((role, i) => {
          const linked = (role.projectSlugs ?? [])
            .map((slug) => projects.find((p) => p.slug === slug))
            .filter((p): p is NonNullable<typeof p> => Boolean(p));

          return (
            <li key={role.slug}>
              <Reveal>
                <article className="group relative grid grid-cols-1 gap-x-8 gap-y-3 py-8 pl-8 md:grid-cols-[11rem_1fr] md:pl-0">
                  <span
                    aria-hidden="true"
                    className="absolute top-[2.4rem] left-0 h-3.5 w-3.5 -translate-x-[3px] md:left-[11rem]"
                  >
                    <span
                      className={`block h-3.5 w-3.5 rounded-full transition-colors ${
                        i === 0 ? 'bg-[var(--magenta)]' : 'bg-[var(--void)] ring-1 ring-[var(--rule)] group-hover:ring-[var(--cyan)]'
                      }`}
                    />
                  </span>

                  <p className="t-data pt-1 text-[var(--ink-3)] md:text-right md:pr-8">
                    {t(role.period, locale)}
                  </p>

                  <div className="md:pl-8">
                    <h3 className="t-section text-[clamp(1.15rem,2vw,1.5rem)]">
                      <span className="text-[var(--ink)]">{role.company}</span>
                    </h3>
                    <p className="mt-1 text-[15px] font-medium text-[var(--cyan)]">
                      {t(role.title, locale)}
                    </p>
                    {role.location && (
                      <p className="t-data mt-1.5 text-[var(--ink-3)]">{role.location}</p>
                    )}

                    <ul className="t-measure mt-4 space-y-2.5">
                      {t(role.achievements, locale).map((line) => (
                        <li
                          key={line}
                          className="relative pl-4 text-[14.5px] leading-relaxed text-[var(--ink-2)] before:absolute before:top-[0.68em] before:left-0 before:h-px before:w-2 before:bg-[var(--cyan-quiet)]"
                        >
                          {line}
                        </li>
                      ))}
                    </ul>

                    <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
                      {t(role.tags, locale).map((tag) => (
                        <li key={tag} className="t-data text-[var(--ink-3)]">
                          {tag}
                        </li>
                      ))}
                    </ul>

                    {linked.length > 0 && (
                      <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1">
                        {linked.map((p) =>
                          p.depth === 'page' ? (
                            <Link
                              key={p.slug}
                              href={`/${locale}/projects/${p.slug}/`}
                              className="t-data text-[var(--magenta)] no-underline transition-colors hover:text-[var(--cyan)]"
                            >
                              {t(p.title, locale)} <Arrow />
                            </Link>
                          ) : (
                            <a
                              key={p.slug}
                              href="#work"
                              className="t-data text-[var(--magenta)] no-underline transition-colors hover:text-[var(--cyan)]"
                            >
                              {t(p.title, locale)} <Arrow />
                            </a>
                          ),
                        )}
                      </p>
                    )}
                  </div>
                </article>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}

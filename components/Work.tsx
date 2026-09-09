import Link from 'next/link';
import { Arrow } from './Arrow';
import { Figure, PlaceholderNote } from './Figure';
import { Reveal } from './primitives';
import { Section } from './Section';
import { Tags } from './Tags';
import { experience, projects, t, ui, type Locale, type Project } from '@/content';

/**
 * Three depths, visibly different in weight rather than in decoration.
 *
 *   page    a full row with its lead figure, linking to its write-up
 *   card    the same row without a route
 *   earlier a line in a quiet list
 *
 * There is no card grid: rows sit on hairlines, and rank is scale and
 * brightness. Nothing is padded to make the column look even.
 */
export function Work({ locale }: { locale: Locale }) {
  const featured = projects.filter((p) => p.depth === 'page').sort((a, b) => a.rank - b.rank);
  const secondary = projects.filter((p) => p.depth === 'card').sort((a, b) => a.rank - b.rank);
  const earlier = projects.filter((p) => p.depth === 'earlier').sort((a, b) => a.rank - b.rank);

  return (
    <Section
      id="work"
      title={t(ui.sections.work, locale)}
      intro={
        locale === 'en'
          ? 'Tags declare what each project can prove. They are a contract: a tag here is something the write-up has to deliver.'
          : 'Les étiquettes déclarent ce que chaque projet peut prouver. C’est un engagement : une étiquette ici doit être tenue dans l’article.'
      }
    >
      <div>
        {featured.map((project, i) => (
          <Reveal key={project.slug}>
            <ProjectRow project={project} locale={locale} index={i} />
          </Reveal>
        ))}
      </div>

      {secondary.length > 0 && (
        <div className="mt-6">
          {secondary.map((project) => (
            <Reveal key={project.slug}>
              <CompactRow project={project} locale={locale} />
            </Reveal>
          ))}
        </div>
      )}

      {earlier.length > 0 && (
        <div className="mt-14 border-t border-[var(--rule-soft)] pt-8">
          <h3 className="t-data text-[var(--ink-3)]">{t(ui.labels.earlierWork, locale)}</h3>
          <ul className="mt-4 space-y-3">
            {earlier.map((project) => (
              <li key={project.slug} className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <span className="text-[15px] font-medium text-[var(--ink-2)]">
                  {t(project.title, locale)}
                </span>
                <span className="t-data text-[var(--ink-3)]">{project.tech.slice(0, 4).join(' · ')}</span>
                {project.artifacts.map((a) => (
                  <a
                    key={a.href}
                    href={a.href}
                    className="t-data text-[var(--cyan)] no-underline hover:text-[var(--magenta)]"
                  >
                    {t(a.label, locale)} <Arrow />
                  </a>
                ))}
              </li>
            ))}
          </ul>
        </div>
      )}
    </Section>
  );
}

function ProjectRow({
  project,
  locale,
  index,
}: {
  project: Project;
  locale: Locale;
  index: number;
}) {
  const lead = project.figures[0];
  const role = project.roleSlug ? experience.find((r) => r.slug === project.roleSlug) : undefined;
  const href = `/${locale}/projects/${project.slug}/`;

  return (
    <article className="group grid grid-cols-1 gap-x-10 gap-y-6 border-t border-[var(--rule-soft)] py-12 md:grid-cols-[1fr_minmax(0,44%)] md:items-start">
      <div className="md:order-1">
        {lead ? (
          <Link href={href} className="block overflow-hidden no-underline">
            <Figure
              figure={lead}
              locale={locale}
              sizes="(min-width: 768px) 44vw, 100vw"
              priority={index === 0}
              className="h-auto w-full border border-[var(--rule-soft)] transition-[border-color,transform] duration-500 group-hover:border-[var(--magenta)] motion-safe:group-hover:-translate-y-1"
            />
          </Link>
        ) : (
          <PlaceholderNote
            label={t(ui.labels.pendingMaterial, locale)}
            note={t(ui.labels.pendingMaterialNote, locale)}
          />
        )}
        {lead?.placeholder && (
          <p className="t-data mt-2 text-[var(--warn)]">{t(ui.labels.pendingMaterial, locale)}</p>
        )}
      </div>

      <div>
        <h3 className="t-section text-[clamp(1.4rem,2.6vw,2rem)]">
          <Link
            href={href}
            className="no-underline transition-colors group-hover:text-[var(--magenta)]"
          >
            {t(project.title, locale)}
          </Link>
        </h3>

        <p className="t-measure mt-3 text-[15.5px] leading-relaxed text-[var(--ink)]">
          {t(project.outcome, locale)}
        </p>

        {/* The plain-language line: no reader meets the jargon alone. */}
        <p className="t-measure mt-4 border-l border-[var(--cyan-quiet)] pl-4 text-[13.5px] leading-relaxed text-[var(--ink-3)]">
          <span className="t-data mb-1 block text-[var(--cyan)]">
            {t(ui.labels.inPlainTerms, locale)}
          </span>
          {t(project.plainly, locale)}
        </p>

        <Tags tags={project.tags} locale={locale} className="mt-5" />

        <ul className="mt-4 flex flex-wrap gap-x-2.5 gap-y-1">
          {project.tech.map((tech) => (
            <li key={tech} className="t-data text-[var(--ink-3)]">
              {tech}
            </li>
          ))}
        </ul>

        <p className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
          <Link
            href={href}
            className="ctl group/ctl t-data inline-flex items-center gap-2 border-b border-transparent pb-1 text-[var(--magenta)] no-underline"
          >
            {t(ui.labels.viewProject, locale)} <Arrow />
          </Link>
          {role && (
            <span className="t-data text-[var(--ink-3)]">
              {t(ui.labels.builtAt, locale)} {role.company}
            </span>
          )}
          {project.period && <span className="t-data text-[var(--ink-3)]">{project.period}</span>}
        </p>
      </div>
    </article>
  );
}

/**
 * Card depth: no route, but the work still gets shown. These projects have real
 * screenshots and a demo video; withholding them because the entry is smaller
 * would be padding in reverse.
 */
function CompactRow({ project, locale }: { project: Project; locale: Locale }) {
  const lead = project.figures[0];

  return (
    <article className="grid grid-cols-1 gap-x-10 gap-y-6 border-t border-[var(--rule-soft)] py-10 md:grid-cols-[1fr_minmax(0,38%)] md:items-start">
      {lead && (
        <div className="md:order-1">
          <Figure
            figure={lead}
            locale={locale}
            sizes="(min-width: 768px) 38vw, 100vw"
            className="h-auto w-full border border-[var(--rule-soft)]"
          />
        </div>
      )}

      <div>
        <h3 className="t-section text-[1.25rem] text-[var(--ink)]">{t(project.title, locale)}</h3>
        <p className="t-measure mt-2.5 text-[14.5px] leading-relaxed text-[var(--ink-2)]">
          {t(project.outcome, locale)}
        </p>
        <p className="t-measure mt-3.5 border-l border-[var(--cyan-quiet)] pl-4 text-[13px] leading-relaxed text-[var(--ink-3)]">
          <span className="t-data mb-1 block text-[var(--cyan)]">
            {t(ui.labels.inPlainTerms, locale)}
          </span>
          {t(project.plainly, locale)}
        </p>

        <Tags tags={project.tags} locale={locale} className="mt-4" />

        <ul className="mt-4 flex flex-wrap gap-x-2.5 gap-y-1">
          {project.tech.map((tech) => (
            <li key={tech} className="t-data text-[var(--ink-3)]">
              {tech}
            </li>
          ))}
        </ul>

        <p className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
          {project.artifacts.map((a) => (
            <a
              key={a.href}
              href={a.href}
              className="ctl group/ctl t-data inline-flex items-center gap-2 border-b border-transparent pb-1 text-[var(--magenta)] no-underline"
            >
              {t(a.label, locale)} <Arrow />
            </a>
          ))}
        </p>
      </div>
    </article>
  );
}

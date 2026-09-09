import { Figure } from './Figure';
import { Arrow } from './Arrow';
import { Expandable, Reveal } from './primitives';
import { Section } from './Section';
import {
  awards,
  education,
  organizations,
  profile,
  publications,
  skills,
  SKILL_GROUP_LABELS,
  socials,
  spokenLanguages,
  t,
  ui,
  updates,
  type Locale,
  type SkillGroup,
} from '@/content';

/**
 * The publication was the biggest omission of the old site — it sat behind a
 * small file icon on a project card. Here it is a section, and the author line
 * marks Iyed's position rather than asserting it in prose.
 */
export function Publications({ locale }: { locale: Locale }) {
  return (
    <Section id="publications" title={t(ui.sections.publications, locale)}>
      <div className="space-y-12">
        {publications.map((pub) => (
          <Reveal key={pub.slug}>
            <article className="grid grid-cols-1 gap-x-10 gap-y-4 md:grid-cols-[13rem_1fr]">
              <div className="md:text-right">
                <p className="t-data text-[var(--ink-3)]">{pub.year}</p>
                <p
                  className={`t-data mt-1.5 ${pub.indexed ? 'text-[var(--magenta)]' : 'text-[var(--ink-3)]'}`}
                >
                  {t(pub.indexed ? ui.labels.peerReviewed : ui.labels.technicalPaper, locale)}
                </p>
              </div>

              <div>
                <h3 className="t-section text-[clamp(1.15rem,2.1vw,1.6rem)]">{pub.title}</h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-[var(--ink-2)]">
                  {pub.authors.map((name, i) => (
                    <span key={name}>
                      {i > 0 && ', '}
                      <span
                        className={
                          i === pub.selfIndex ? 'font-semibold text-[var(--ink)] underline decoration-[var(--magenta)] underline-offset-4' : ''
                        }
                      >
                        {name}
                      </span>
                    </span>
                  ))}
                </p>
                <p className="t-data mt-2 text-[var(--cyan)]">{t(pub.venue, locale)}</p>
                <p className="t-measure mt-4 text-[14.5px] leading-relaxed text-[var(--ink-2)]">
                  {t(pub.abstract, locale)}
                </p>
                <p className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                  {pub.artifacts.map((a) => (
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
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/** Seven prizes. Density is the argument, so they are shown as one dense list. */
export function Awards({ locale }: { locale: Locale }) {
  const lead = awards.slice(0, 4);
  const rest = awards.slice(4);

  return (
    <Section id="awards" title={t(ui.sections.awards, locale)}>
      <Expandable
        moreLabel={t(ui.labels.showMore, locale)}
        lessLabel={t(ui.labels.showLess, locale)}
        summary={
          <ul>
            {lead.map((a) => (
              <AwardRow key={a.slug} award={a} locale={locale} />
            ))}
          </ul>
        }
      >
        <ul>
          {rest.map((a) => (
            <AwardRow key={a.slug} award={a} locale={locale} />
          ))}
        </ul>
      </Expandable>
    </Section>
  );
}

function AwardRow({
  award,
  locale,
}: {
  award: (typeof awards)[number];
  locale: Locale;
}) {
  return (
    <li className="grid grid-cols-1 gap-x-10 gap-y-2 border-t border-[var(--rule-soft)] py-7 md:grid-cols-[13rem_1fr]">
      <div className="md:text-right">
        <p className="t-display text-[1.35rem] text-[var(--magenta)]">{t(award.prize, locale)}</p>
        {award.date && <p className="t-data mt-1 text-[var(--ink-3)]">{award.date}</p>}
      </div>
      <div>
        <h3 className="text-[16.5px] font-semibold text-[var(--ink)]">{t(award.title, locale)}</h3>
        <p className="t-data mt-1.5 text-[var(--cyan)]">{t(award.scope, locale)}</p>
        <p className="t-measure mt-3 text-[14px] leading-relaxed text-[var(--ink-2)]">
          {t(award.description, locale)}
        </p>
      </div>
    </li>
  );
}

export function Leadership({ locale }: { locale: Locale }) {
  return (
    <Section id="leadership" title={t(ui.sections.leadership, locale)}>
      <ul className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-3">
        {organizations.map((org) => (
          <li key={org.slug}>
            <Reveal>
              <p className="t-data text-[var(--ink-3)]">{org.period}</p>
              <h3 className="t-section mt-2 text-[1.2rem]">{org.name}</h3>
              <p className="mt-1 text-[14px] font-medium text-[var(--cyan)]">{t(org.role, locale)}</p>
              <p className="mt-3 text-[14px] leading-relaxed text-[var(--ink-2)]">
                {t(org.description, locale)}
              </p>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/** Derived from the project tech tags, so it cannot drift out of sync. */
export function Skills({ locale }: { locale: Locale }) {
  const groups = Object.keys(skills) as SkillGroup[];
  return (
    <Section
      id="skills"
      title={t(ui.sections.skills, locale)}
      intro={
        locale === 'en'
          ? 'Derived from the technologies these projects actually use, rather than maintained as a separate list that drifts.'
          : 'Dérivé des technologies réellement utilisées dans ces projets, plutôt que maintenu séparément.'
      }
    >
      <div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-3">
        {groups.map((group) => (
          <div key={group}>
            <h3 className="t-data text-[var(--cyan)]">{t(SKILL_GROUP_LABELS[group], locale)}</h3>
            <ul className="mt-4 flex flex-wrap gap-x-2.5 gap-y-1.5">
              {skills[group].map((skill, i) => (
                <li key={skill} className="text-[14px] text-[var(--ink-2)]">
                  {skill}
                  {i < skills[group].length - 1 && (
                    <span aria-hidden="true" className="ml-2.5 text-[var(--rule)]">
                      /
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function News({ locale }: { locale: Locale }) {
  return (
    <Section id="news" title={t(ui.sections.news, locale)}>
      <ul className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {updates.map((update) => (
          <li key={update.slug}>
            <Reveal>
              <figure className="m-0">
                <Figure
                  figure={update.figure}
                  locale={locale}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="aspect-[4/3] w-full border border-[var(--rule-soft)] object-cover"
                />
                <figcaption className="mt-4">
                  <h3 className="text-[15.5px] leading-snug font-semibold text-[var(--ink)]">
                    {t(update.title, locale)}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-[var(--ink-3)]">
                    {t(update.description, locale)}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function EducationAndLanguages({ locale }: { locale: Locale }) {
  return (
    <Section id="education" title={t(ui.sections.education, locale)}>
      <div className="grid grid-cols-1 gap-x-14 gap-y-12 md:grid-cols-[1.4fr_1fr]">
        <div>
          {education.map((entry) => (
            <div key={entry.slug}>
              <p className="t-data text-[var(--ink-3)]">{entry.period}</p>
              <h3 className="t-section mt-2 text-[1.3rem]">{entry.institution}</h3>
              <p className="t-measure mt-2 text-[14.5px] leading-relaxed text-[var(--ink-2)]">
                {t(entry.program, locale)}
              </p>
              <p className="t-data mt-2 text-[var(--ink-3)]">{entry.location}</p>
            </div>
          ))}
        </div>

        <div>
          <dl className="space-y-3">
            {spokenLanguages.map((lang) => (
              <div
                key={lang.slug}
                className="flex items-baseline justify-between gap-4 border-b border-[var(--rule-soft)] pb-2.5"
              >
                <dt className="text-[15px] text-[var(--ink)]">{t(lang.name, locale)}</dt>
                <dd className="t-data text-[var(--cyan)]">{t(lang.level, locale)}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}

export function Contact({ locale }: { locale: Locale }) {
  return (
    <Section id="contact" title={t(ui.sections.contact, locale)}>
      <div className="grid grid-cols-1 gap-x-14 gap-y-8 md:grid-cols-[1.3fr_1fr]">
        <p className="t-measure text-[17px] leading-relaxed text-[var(--ink-2)]">
          {t(ui.contact.body, locale)}
        </p>
        <ul className="space-y-1">
          {socials.map((social) => (
            <li key={social.slug}>
              <a
                href={social.href}
                className="ctl flex items-baseline justify-between gap-4 border-b border-[var(--rule-soft)] py-2.5 text-[var(--ink-2)] no-underline"
              >
                <span className="t-data text-[var(--ink-3)]">{social.platform}</span>
                <span className="text-[14.5px] text-[var(--ink)]">{social.handle}</span>
              </a>
            </li>
          ))}
          <li className="pt-3">
            <a
              href="/resume.pdf"
              className="ctl ctl-primary t-data flex items-center justify-between gap-4 border border-[var(--magenta)] bg-[var(--magenta)] px-5 py-3.5 text-[var(--on-accent)] no-underline"
            >
              {t(ui.labels.downloadResume, locale)}
              <span aria-hidden="true">PDF</span>
            </a>
          </li>
        </ul>
      </div>
    </Section>
  );
}

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="rule-t py-10">
      <p className="t-data text-[var(--ink-3)]">
        © {new Date().getFullYear()} {profile.name}. {t(ui.meta.footer, locale)}
      </p>
    </footer>
  );
}

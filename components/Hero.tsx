import { Field } from './Field';
import { Counter } from './primitives';
import { Shell } from './Section';
import { profile, socials, t, ui, type Locale } from '@/content';

/**
 * The first viewport is the thesis: the name at the scale a recruiter actually
 * meets it, the positioning beneath, and four instrument readings on the base
 * line — all above a 900px fold, with the first Experience row breaking it.
 *
 * The readings are readings, not a metric card: each carries a state node and a
 * direction, because a number without its direction says half of what it knows.
 */

type Dir = 'down' | 'up' | 'flat';

interface Reading {
  value: number;
  decimals?: number;
  suffix?: string;
  label: { en: string; fr: string };
  trend: { en: string; fr: string };
  dir: Dir;
  tone: 'magenta' | 'cyan' | 'ok';
}

const READINGS: Reading[] = [
  {
    value: 1,
    label: { en: 'First-author IEEE paper', fr: 'Article IEEE, premier auteur' },
    trend: { en: 'a second in preparation', fr: 'un second en préparation' },
    dir: 'up',
    tone: 'magenta',
  },
  {
    value: 7,
    label: { en: 'Competition prizes', fr: 'Prix de compétition' },
    trend: { en: 'newest 07/2026, international', fr: 'le plus récent 07/2026, international' },
    dir: 'up',
    tone: 'cyan',
  },
  {
    value: 7,
    label: { en: 'Professional roles', fr: 'Expériences professionnelles' },
    trend: { en: 'two of them research', fr: 'dont deux en recherche' },
    dir: 'up',
    tone: 'cyan',
  },
];

const TONE: Record<Reading['tone'], string> = {
  magenta: 'var(--magenta)',
  cyan: 'var(--cyan)',
  ok: 'var(--ok)',
};

/** Direction is drawn, never an emoji or a unicode arrow standing in for an icon. */
function Direction({ dir, color }: { dir: Dir; color: string }) {
  if (dir === 'flat') {
    return (
      <svg width="11" height="11" viewBox="0 0 12 12" aria-hidden="true">
        <path d="M2 6h8" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  const down = dir === 'down';
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" aria-hidden="true">
      <path
        d={down ? 'M6 2v8M3 7l3 3 3-3' : 'M6 10V2M3 5l3-3 3 3'}
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function Hero({ locale }: { locale: Locale }) {
  const mail = socials.find((s) => s.slug === 'email');

  return (
    <section className="relative overflow-hidden">
      <Field className="absolute inset-0 block h-full w-full" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(118%_92%_at_10%_40%,var(--void)_20%,transparent_74%)]"
      />

      <Shell>
        <div className="relative pt-12 pb-8 md:pt-16 md:pb-10">
          <h1 className="t-display text-[clamp(3rem,8.2vw,6.4rem)]">{profile.name}</h1>

          <p className="t-section mt-5 max-w-[22ch] text-[clamp(1.3rem,2.9vw,2.1rem)] text-[var(--ink)]">
            {locale === 'en' ? (
              <>
                Vision, distributed training and{' '}
                <span className="text-[var(--magenta)]">retrieval</span> systems that ship.
              </>
            ) : (
              <>
                Vision, entraînement distribué et systèmes de{' '}
                <span className="text-[var(--magenta)]">recherche</span> qui passent en production.
              </>
            )}
          </p>

          <p className="mt-5 max-w-[58ch] text-[15.5px] leading-relaxed text-[var(--ink-2)]">
            {t(profile.standfirst, locale)}
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5">
            <a
              href="/resume.pdf"
              className="ctl ctl-primary t-data border border-[var(--magenta)] bg-[var(--magenta)] px-5 py-3 text-[var(--on-accent)] no-underline"
            >
              {t(ui.labels.downloadResume, locale)}
            </a>
            <a
              href="#work"
              className="ctl t-data border border-[var(--rule)] px-5 py-3 text-[var(--ink-2)] no-underline"
            >
              {t(ui.sections.work, locale)}
            </a>
            {mail && (
              <a
                href={mail.href}
                className="ctl t-data border border-[var(--rule)] px-5 py-3 text-[var(--ink-2)] no-underline"
              >
                {t(ui.labels.email, locale)}
              </a>
            )}
          </div>
        </div>
      </Shell>

      <Shell>
        <dl className="relative grid grid-cols-2 gap-x-8 gap-y-7 border-t border-[var(--rule-soft)] pt-7 pb-12 md:grid-cols-3">
          {READINGS.map((r) => {
            const color = TONE[r.tone];
            return (
              <div key={r.label.en}>
                <dd className="flex items-baseline gap-2.5">
                  <span
                    aria-hidden="true"
                    className="readout-mark translate-y-[-0.35em]"
                    style={{ background: color }}
                  />
                  <span className="t-display text-[clamp(1.9rem,3.9vw,2.7rem)]" style={{ color }}>
                    <Counter value={r.value} decimals={r.decimals ?? 0} />
                    {r.suffix && <span className="text-[0.5em] opacity-70">{r.suffix}</span>}
                  </span>
                  <span className="translate-y-[-0.2em]">
                    <Direction dir={r.dir} color={color} />
                  </span>
                </dd>
                <dt className="mt-1.5 text-[13px] leading-snug font-medium text-[var(--ink)]">
                  {t(r.label, locale)}
                </dt>
                <p className="mt-0.5 text-[12px] leading-snug text-[var(--ink-3)]">{t(r.trend, locale)}</p>
              </div>
            );
          })}
        </dl>
      </Shell>
    </section>
  );
}

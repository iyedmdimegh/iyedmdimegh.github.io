'use client';

import { useState } from 'react';
import { t, ui, type Locale, type ProjectTag } from '@/content';

/**
 * Evidence tags. A project declares what it can actually prove, so an entry
 * without benchmarks is not dressed to look like one that has them.
 *
 * The meaning is revealed on demand rather than hidden in a title attribute,
 * which never reaches a keyboard or a touch device.
 */
export function Tags({
  tags,
  locale,
  className = '',
}: {
  tags: readonly ProjectTag[];
  locale: Locale;
  className?: string;
}) {
  const [active, setActive] = useState<ProjectTag | null>(null);
  if (tags.length === 0) return null;

  return (
    <div className={className}>
      <ul className="flex flex-wrap gap-1.5">
        {tags.map((tag) => {
          const on = active === tag;
          return (
            <li key={tag}>
              <button
                type="button"
                aria-pressed={on}
                onClick={() => setActive(on ? null : tag)}
                className={`ctl t-data inline-flex items-center gap-1.5 border px-2.5 py-1 ${
                  on
                    ? 'border-[var(--cyan)] bg-[var(--cyan)] text-[var(--void)]'
                    : 'border-[var(--rule)] text-[var(--ink-3)]'
                }`}
              >
                <span
                  aria-hidden="true"
                  className="h-1 w-1 rounded-full bg-current opacity-70"
                />
                {t(ui.tags[tag], locale)}
              </button>
            </li>
          );
        })}
      </ul>
      <p
        aria-live="polite"
        className="mt-2.5 min-h-[1.4em] text-[12.5px] leading-snug text-[var(--ink-3)]"
      >
        {active ? t(ui.tagMeanings[active], locale) : ''}
      </p>
    </div>
  );
}

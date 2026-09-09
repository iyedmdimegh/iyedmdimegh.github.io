'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { otherLocale, t, ui, type Locale } from '@/content';

/**
 * The bar hides on scroll down and returns on scroll up — carried over from the
 * old site, which got that behaviour right. Both toggles persist, which the old
 * site did for neither: every visit started light and in English.
 */
export function Chrome({ locale }: { locale: Locale }) {
  const [hidden, setHidden] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const pathname = usePathname();

  useEffect(() => {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'light' ? 'light' : 'dark');
  }, []);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - last) < 8) return;
      setHidden(y > last && y > 90);
      last = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    setTheme(next);
    try {
      localStorage.setItem('iyed-theme', next);
    } catch {
      /* private mode: the choice simply does not outlive the session */
    }
  };

  const other = otherLocale(locale);
  // Swap only the locale segment; the visitor stays on the page they were reading.
  const swapped = pathname.replace(/^\/(en|fr)(?=\/|$)/, `/${other}`);

  const persistLocale = () => {
    try {
      localStorage.setItem('iyed-locale', other);
    } catch {
      /* ignored */
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-transform duration-300 ${hidden ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <div className="bg-[color-mix(in_srgb,var(--void)_88%,transparent)] backdrop-blur-md">
        <div className="mx-auto flex max-w-[1200px] items-center gap-4 px-6 py-3">
          <Link href={`/${locale}/`} className="group flex items-center gap-2.5 no-underline">
            <Mark />
            <span className="t-data text-[var(--ink-2)] transition-colors group-hover:text-[var(--ink)]">
              Mdimegh
            </span>
          </Link>

          <div className="ml-auto flex items-center gap-1.5">
            <a
              href="/resume.pdf"
              className="ctl t-data border border-[var(--rule)] px-3 py-2 text-[var(--ink-2)] no-underline"
            >
              {t(ui.labels.resume, locale)}
            </a>
            <Link
              href={swapped}
              onClick={persistLocale}
              hrefLang={other}
              className="ctl t-data border border-[var(--rule)] px-3 py-2 text-[var(--ink-2)] no-underline"
            >
              {other.toUpperCase()}
            </Link>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={t(ui.labels.toggleTheme, locale)}
              className="ctl border border-[var(--rule)] p-2 text-[var(--ink-2)]"
            >
              <ThemeGlyph theme={theme} />
            </button>
          </div>
        </div>
        <div className="current-rule" />
      </div>
    </header>
  );
}

/** The design system at 22px: two hubs, three nodes, the edges between them. */
function Mark() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5 6 L12 13 L19 5 M12 13 L4 19 M12 13 L20 18"
        stroke="var(--edge)"
        strokeWidth="1.2"
        fill="none"
      />
      <circle cx="5" cy="6" r="2.2" fill="var(--magenta)" />
      <circle cx="19" cy="5" r="1.6" fill="var(--cyan)" />
      <circle cx="12" cy="13" r="2.7" fill="var(--magenta)" />
      <circle cx="4" cy="19" r="1.6" fill="var(--cyan)" />
      <circle cx="20" cy="18" r="2.1" fill="var(--cyan)" />
    </svg>
  );
}

/** Drawn, not an emoji: one stroke weight, matching the mark. */
function ThemeGlyph({ theme }: { theme: 'dark' | 'light' }) {
  return theme === 'dark' ? (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 14.2A8.2 8.2 0 0 1 9.8 4a8.4 8.4 0 1 0 10.2 10.2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 2.4v2.2M12 19.4v2.2M2.4 12h2.2M19.4 12h2.2M5.2 5.2l1.6 1.6M17.2 17.2l1.6 1.6M18.8 5.2l-1.6 1.6M6.8 17.2l-1.6 1.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

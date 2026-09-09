'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

/**
 * Reveal from an already-visible resting state: with JavaScript off, motion
 * reduced, or the observer unavailable, everything is simply readable. Nothing
 * on this page is parked at opacity 0 waiting for an event that may not come.
 */
export function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -12% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`rise ${seen ? 'seen' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

/**
 * A counter that reads as a measurement arriving rather than a number printed.
 * It starts at its final value in the markup, so the figure is correct before
 * any script runs.
 */
export function Counter({
  value,
  decimals = 0,
  className = '',
}: {
  value: number;
  decimals?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [shown, setShown] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const run = (now: number) => {
          const p = Math.min((now - start) / 900, 1);
          const eased = 1 - (1 - p) ** 3;
          setShown(value * eased);
          if (p < 1) requestAnimationFrame(run);
        };
        setShown(0);
        requestAnimationFrame(run);
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <span ref={ref} className={`tnum ${className}`}>
      {shown.toFixed(decimals)}
    </span>
  );
}

/**
 * Progressive disclosure without a modal: the summary stays readable and the
 * detail opens in place.
 */
export function Expandable({
  summary,
  children,
  moreLabel,
  lessLabel,
}: {
  summary: ReactNode;
  children: ReactNode;
  moreLabel: string;
  lessLabel: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {summary}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="t-data mt-4 text-[var(--cyan)] transition-colors hover:text-[var(--magenta)]"
      >
        {open ? lessLabel : moreLabel}
      </button>
      {open && <div className="mt-5">{children}</div>}
    </div>
  );
}

import type { ReactNode } from 'react';

/**
 * Sections are separated by space and a hairline, never by a container. The
 * heading carries its own weight — there is no label above it.
 */
export function Section({
  id,
  title,
  intro,
  children,
  aside,
}: {
  id: string;
  title: string;
  intro?: string;
  children: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <section id={id} className="rule-t scroll-mt-20 py-20 md:py-28">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
        <div>
          <h2 className="t-section text-[clamp(1.75rem,3.6vw,2.6rem)]">{title}</h2>
          {intro && (
            <p className="t-measure mt-4 text-[15px] leading-relaxed text-[var(--ink-2)]">{intro}</p>
          )}
        </div>
        {aside}
      </div>
      {children}
    </section>
  );
}

export function Shell({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-[1200px] px-6">{children}</div>;
}

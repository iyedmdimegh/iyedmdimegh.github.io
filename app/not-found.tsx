import Link from 'next/link';
import { Arrow } from '@/components/Arrow';

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-[1200px] flex-col justify-center px-6">
      <p className="t-data text-[var(--magenta)]">404</p>
      <h1 className="t-display mt-4 text-[clamp(2rem,5vw,3.4rem)]">
        No node at this address.
      </h1>
      <p className="mt-5 max-w-[46ch] text-[15.5px] leading-relaxed text-[var(--ink-2)]">
        The page you asked for is not part of this graph. The index has everything.
      </p>
      <p className="mt-8">
        <Link
          href="/en/"
          className="t-data border border-[var(--rule)] px-5 py-3 text-[var(--ink)] no-underline transition-colors hover:border-[var(--cyan)] hover:text-[var(--cyan)]"
        >
          Back to the index <Arrow />
        </Link>
      </p>
    </main>
  );
}

/**
 * A drawn arrow, one stroke weight, matching the mark and the theme glyphs.
 *
 * The build previously ended link labels with a literal "→". Its own rule —
 * stated in Hero.tsx and recorded in DESIGN.md — is that direction is drawn and
 * never a unicode character standing in for an icon. The documenter refused to
 * canonize the arrow for exactly that reason, so it is drawn here instead.
 *
 * It shifts on hover through the parent's `.ctl` group, so the arrow travels
 * with the current rather than sitting inert beside it.
 */
export function Arrow({ back = false }: { back?: boolean }) {
  return (
    <svg
      width="13"
      height="10"
      viewBox="0 0 14 10"
      fill="none"
      aria-hidden="true"
      className={`inline-block shrink-0 align-baseline transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
        back
          ? 'rotate-180 motion-safe:group-hover/ctl:-translate-x-0.5'
          : 'motion-safe:group-hover/ctl:translate-x-0.5'
      }`}
    >
      <path
        d="M0.75 5h11.5M8.4 1.1 12.4 5l-4 3.9"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

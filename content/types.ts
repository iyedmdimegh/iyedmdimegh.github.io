/**
 * Content model.
 *
 * One entry per real-world thing. Locale-varying fields hold `Localized<T>`;
 * locale-invariant fields (dates, URLs, image paths, tech tags) appear exactly
 * once. There are deliberately NO parallel `*_french` arrays: the previous
 * site kept two duplicated lists per section, they drifted, and one award
 * shipped with the wrong description for months as a direct result.
 *
 * No JSX lives in this directory. Icons are referenced by name and resolved
 * in components.
 */

export const LOCALES = ['en', 'fr'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

/** A value that differs per locale. Both locales are required — no fallbacks, no gaps. */
export type Localized<T = string> = { readonly [K in Locale]: T };

/** A linked piece of evidence. Rendered as a numbered reference chip, e.g. [1]. */
export type ArtifactKind =
  | 'paper'
  | 'video'
  | 'repo'
  | 'report'
  | 'letter'
  | 'site'
  | 'profile'
  | 'email';

export interface Artifact {
  readonly kind: ArtifactKind;
  readonly href: string;
  readonly label: Localized;
}

/**
 * An image. Intrinsic dimensions are NOT written here — they are measured from
 * the real file by `npm run assets` and read back from the generated manifest,
 * so a `width`/`height` can never drift from the pixels it describes.
 */
export interface Figure {
  readonly src: string;
  readonly alt: Localized;
  /**
   * True when the file is a marked stand-in awaiting real material from Iyed.
   * Placeholders render with a visible notice; they are never passed off as real.
   */
  readonly placeholder?: boolean;
}

/**
 * What evidence a project actually carries. Iyed's idea (2026-09-09), and the
 * fix for an uneven portfolio: not every project has benchmarks, so each one
 * advertises what it *does* have instead of all being dressed the same.
 *
 * These are a contract. A tag on a card is something the detail page must
 * deliver — never aspirational, never decorative.
 */
export type ProjectTag =
  | 'measured'      // benchmarked results a reader can check
  | 'paper'         // produced a peer-reviewed publication
  | 'award'         // placed in a judged competition
  | 'demo'          // there is video of it working
  | 'led'           // Iyed ran the team, not just a part of it
  | 'shipped'       // real users, running in production
  | 'research'      // done under academic supervision
  | 'hardware'      // a physical build, not only software
  | 'architecture'  // the interesting part is the system design
  | 'interface';    // the interesting part is what it is like to use

/**
 * How much room a project earns. Decided by what it can actually support,
 * never by wanting the grid to look even.
 *
 *  page    — a full /projects/[slug] route is generated
 *  card    — home card with an inline expand; no route
 *  earlier — a line in the compact earlier-work list
 */
export type ProjectDepth = 'page' | 'card' | 'earlier';

/** A measured result. `value` stays a string so "0.99" and "273/273" both survive. */
export interface Metric {
  readonly key: Localized;
  readonly value: string;
  readonly unit?: string;
  /** Semantic reading, mapped to the status colours. Absent means neutral. */
  readonly tone?: 'ok' | 'warn' | 'crit';
}

/**
 * A drawn schematic of the system's real data path — scale two of the world's
 * single drawing. Coordinates are viewBox units, authored per project; this is
 * a drawing of how the thing actually works, never a generic diagram shape.
 *
 * `flow` is the path the current animates along, and it must trace the real
 * route data takes through the system. If nothing flows, there is no flow path.
 */
export interface SchematicNode {
  readonly id: string;
  readonly label: string;
  readonly sub?: string;
  readonly x: number;
  readonly y: number;
  readonly w: number;
  readonly h: number;
  /** What this stage does, revealed on hover or focus rather than buried in a title. */
  readonly note: Localized;
  readonly tone?: 'ok' | 'warn' | 'crit';
}

export interface Schematic {
  readonly viewBox: string;
  readonly nodes: readonly SchematicNode[];
  /** Static wiring, drawn under the current. */
  readonly wires: readonly string[];
  /** The live path. Current runs here because data really does. */
  readonly flow: string;
  readonly callouts?: readonly { readonly x: number; readonly y: number; readonly text: Localized }[];
  readonly caption: Localized;
}

/**
 * The long form, rendered only on a `depth: 'page'` project. Every field is
 * optional except context, so a page can be honest about what it does not have
 * rather than padding to fill a template.
 */
export interface ProjectDetail {
  /** Why the work exists. The problem, before the solution. */
  readonly context: Localized<readonly string[]>;
  readonly approach?: Localized<readonly string[]>;
  readonly metrics?: readonly Metric[];
  /** Figures with real captions. Distinct from the card's `figures`. */
  readonly plates?: readonly Plate[];
  /**
   * What Iyed did, stated separately from what the team did. Team work is
   * credited by name; his own contribution is never inflated to cover it.
   */
  readonly role?: Localized;
  readonly team?: readonly string[];
  /** A line worth pulling out — usually the project's own framing. */
  readonly pullQuote?: Localized;
  /** The drawn data path. Present only where the real system is known well enough to draw it. */
  readonly schematic?: Schematic;
}

/** A captioned figure on a detail page. */
export interface Plate {
  readonly figure: Figure;
  readonly caption: Localized;
  /** Short all-caps label, e.g. "FIG. 1 — SYSTEM ARCHITECTURE". */
  readonly plateLabel: Localized;
}

export interface Project {
  readonly slug: string;
  readonly title: Localized;
  /** One-line outcome, read before the description. Leads with what it achieved. */
  readonly outcome: Localized;
  /** Plain-language gloss so a non-specialist recruiter never faces jargon alone. */
  readonly plainly: Localized;
  readonly description: Localized;
  readonly period?: string;
  readonly tech: readonly string[];
  readonly figures: readonly Figure[];
  readonly artifacts: readonly Artifact[];
  /** Ordering weight for Selected Work. Lower sorts first. */
  readonly rank: number;
  /** What evidence this project carries. Drives the chips on the card. */
  readonly tags: readonly ProjectTag[];
  /** How much room it earns. Only 'page' generates a route. */
  readonly depth: ProjectDepth;
  /** The role it was built in, if any — renders as "built at —" and links back. */
  readonly roleSlug?: string;
  /** Present only on `depth: 'page'` projects. */
  readonly detail?: ProjectDetail;
}

export interface Role {
  readonly slug: string;
  readonly company: string;
  readonly title: Localized;
  readonly period: Localized;
  readonly location?: string;
  readonly achievements: Localized<readonly string[]>;
  readonly tags: Localized<readonly string[]>;
  readonly artifacts?: readonly Artifact[];
  /**
   * Projects produced in this role. Three roles *are* projects — the résumé
   * reclassified Frugal AI from project to role — so rather than duplicating
   * the work in two sections, they cross-link.
   */
  readonly projectSlugs?: readonly string[];
}

export interface Publication {
  readonly slug: string;
  readonly title: string;
  /** A short form for reference rows and anywhere the full title would swamp the line. */
  readonly shortTitle: string;
  readonly venue: Localized;
  readonly year: number;
  readonly authors: readonly string[];
  /** Zero-based index of Iyed in `authors`, used to render his name emphasized. */
  readonly selfIndex: number;
  readonly authorship: Localized;
  readonly abstract: Localized;
  readonly artifacts: readonly Artifact[];
  /**
   * True only for work that is genuinely indexed and peer-reviewed. The
   * SMARTSHIELD technical paper is not; it must never be presented as one.
   */
  readonly indexed: boolean;
}

export interface Award {
  readonly slug: string;
  readonly title: Localized;
  readonly prize: Localized;
  readonly description: Localized;
  readonly date?: string;
  readonly scope: Localized;
}

export interface Organization {
  readonly slug: string;
  readonly name: string;
  readonly role: Localized;
  readonly period: string;
  readonly description: Localized;
}

export interface Update {
  readonly slug: string;
  readonly figure: Figure;
  readonly title: Localized;
  readonly description: Localized;
}

export interface EducationEntry {
  readonly slug: string;
  readonly institution: string;
  readonly program: Localized;
  readonly period: string;
  readonly location: string;
}

export interface SpokenLanguage {
  readonly slug: string;
  readonly name: Localized;
  readonly level: Localized;
}

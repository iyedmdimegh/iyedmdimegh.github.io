import type { Localized } from './types';

/** Canonical origin. Used for metadata, Open Graph, sitemap and JSON-LD. */
export const SITE_ORIGIN = 'https://iyedmdimegh.github.io';

export interface SocialLink {
  readonly slug: string;
  /** The platform's own name, used as the row's key. */
  readonly platform: string;
  /** The account as a person would read it aloud. Never a repeat of `platform`. */
  readonly handle: string;
  /** Icon *name*, resolved to a drawn glyph in components. Never JSX here. */
  readonly icon: 'github' | 'linkedin' | 'mail' | 'scholar';
  readonly href: string;
  readonly label: string;
}

export const profile = {
  name: 'Iyed Mdimegh',
  /** Not stated by Iyed; he/him used in generated copy per the handoff doc. */
  pronouns: 'he/him',
  affiliation: 'INSAT',
  affiliationFull: {
    en: 'National Institute of Applied Science and Technology, Tunis, Tunisia',
    fr: "Institut National des Sciences Appliquées et de Technologie, Tunis, Tunisie",
  } satisfies Localized,
  location: {
    en: 'Tunis, Tunisia',
    fr: 'Tunis, Tunisie',
  } satisfies Localized,

  /**
   * Iyed's chosen framing (2026-09-08), replacing the old site's hardcoded
   * "22-year-old". Goes stale after September 2027 — see PRODUCT.md.
   */
  title: {
    en: 'Final-year Software Engineering Student',
    fr: 'Étudiant en dernière année de Génie Logiciel',
  } satisfies Localized,

  /**
   * The standfirst under the hero. Rewritten 2026-09-09 for the updated
   * resume: seven roles rather than five, two of them research engagements
   * with EFREI Paris, and seven prizes rather than six.
   */
  /**
   * The one line under the name in the hero. Deliberately short: the full
   * abstract below runs seven lines and pushed the proof readings and the
   * first section clean out of the first viewport.
   */
  standfirst: {
    en: 'Final-year engineering student at INSAT, Tunis. A first-author IEEE paper, two EFREI Paris research engagements, and seven competition prizes — each with the evidence one click away.',
    fr: "Étudiant en dernière année d'ingénierie à l'INSAT, Tunis. Un article IEEE en premier auteur, deux collaborations de recherche avec l'EFREI Paris et sept prix de compétition — chacun avec sa preuve à un clic.",
  } satisfies Localized,

  abstract: {
    en: 'Final-year software engineering student at INSAT, Tunis, working where research meets systems that ship. First author on an IEEE SMC 2025 paper presented in Vienna, two research engagements with EFREI Paris in computer vision and frugal deep learning, and seven competition prizes — one international, the rest national. Seven roles so far, spanning the SAP and Atlassian ecosystems, deep reinforcement learning and real-time full-stack delivery. Currently seeking a final-year engineering internship.',
    fr: "Étudiant en dernière année de génie logiciel à l'INSAT, Tunis, à la rencontre de la recherche et des systèmes qui passent en production. Premier auteur d'un article IEEE SMC 2025 présenté à Vienne, deux collaborations de recherche avec l'EFREI Paris en vision par ordinateur et en apprentissage profond frugal, et sept prix de compétition — un international, les autres nationaux. Sept expériences à ce jour, couvrant les écosystèmes SAP et Atlassian, l'apprentissage par renforcement profond et le développement full-stack temps réel. Actuellement à la recherche d'un stage de fin d'études.",
  } satisfies Localized,

  /**
   * Index terms, chosen the way a paper's keywords are chosen — ordered by
   * what matters, not alphabetically, and led by the work's own subject.
   */
  indexTerms: [
    'Applied AI',
    'Computer Vision',
    'Deep Reinforcement Learning',
    'Retrieval-Augmented Generation',
    'PyTorch',
    'Python',
    'Full-Stack Web',
    'React',
    'Django',
    'FastAPI',
    'Distributed Systems',
    'PyTorch RPC',
    'Model Parallelism',
    'Frugal AI',
    'Vector Search',
    'Docker',
    'Robotics',
    'Protocol Design',
  ] as const,

  email: 'iyedmdimegh@gmail.com',
  academicEmail: 'iyed.mdimegh@ieee.org',
  /** Deliberately not published. On the résumé only — Iyed's decision, 2026-09-08. */
  phone: null,

  resume: '/resume.pdf',

  portrait: {
    src: '/assets/images/pfp/pfp.jpg',
    alt: {
      en: 'Iyed Mdimegh',
      fr: 'Iyed Mdimegh',
    },
  },
} as const;

export const socials: readonly SocialLink[] = [
  {
    slug: 'github',
    platform: 'GitHub',
    handle: '@iyedmdimegh',
    icon: 'github',
    href: 'https://github.com/iyedmdimegh',
    label: 'GitHub',
  },
  {
    slug: 'linkedin',
    platform: 'LinkedIn',
    handle: 'iyed-mdimegh',
    icon: 'linkedin',
    href: 'https://www.linkedin.com/in/iyed-mdimegh-21b1b5285/',
    label: 'LinkedIn',
  },
  {
    slug: 'email',
    platform: 'Email',
    handle: profile.email,
    icon: 'mail',
    href: `mailto:${profile.email}`,
    label: profile.email,
  },
];

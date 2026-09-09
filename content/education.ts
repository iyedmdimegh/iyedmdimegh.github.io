import type { EducationEntry, SpokenLanguage } from './types';

/** Never shown on the old site — résumé only. */
export const education: readonly EducationEntry[] = [
  {
    slug: 'insat',
    institution: 'National Institute of Applied Science and Technology (INSAT)',
    program: {
      en: "Software Engineering Cycle — National Engineering Diploma (Diplôme National d'Ingénieur), a five-year programme equivalent to an M.Eng.",
      fr: "Cycle Ingénieur en Génie Logiciel — Diplôme National d'Ingénieur, cursus de cinq ans équivalent à un master d'ingénierie",
    },
    period: '09/2022 — 09/2027 (expected)',
    location: 'Tunis, Tunisia',
  },
];

/** Also résumé-only, and worth stating on a site that is itself bilingual. */
export const spokenLanguages: readonly SpokenLanguage[] = [
  {
    slug: 'arabic',
    name: { en: 'Arabic', fr: 'Arabe' },
    level: { en: 'Native', fr: 'Langue maternelle' },
  },
  {
    slug: 'french',
    name: { en: 'French', fr: 'Français' },
    level: { en: 'C1 — TCF certified', fr: 'C1 — certifié TCF' },
  },
  {
    slug: 'english',
    name: { en: 'English', fr: 'Anglais' },
    level: { en: 'Fluent — B2 (onSET)', fr: 'Courant — B2 (onSET)' },
  },
  {
    slug: 'spanish',
    name: { en: 'Spanish', fr: 'Espagnol' },
    level: { en: 'Beginner', fr: 'Débutant' },
  },
  {
    slug: 'german',
    name: { en: 'German', fr: 'Allemand' },
    level: { en: 'Beginner', fr: 'Débutant' },
  },
];

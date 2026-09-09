import type { Organization } from './types';

/**
 * The old site scattered these through carousel captions and described the
 * IEEE role in the present tense though it ended 07/2025. Past tense here.
 */
export const organizations: readonly Organization[] = [
  {
    slug: 'ieee-insat-cs',
    name: 'IEEE INSAT SB Computer Society Chapter',
    role: {
      en: 'Vice Chair, Technical Activities & Instructor',
      fr: 'Vice-Président, Activités Techniques & Formateur',
    },
    period: '08/2024 — 07/2025',
    description: {
      en: 'Led and managed technical projects, developed the annual plan, and organized workshops to expand the skills and learning opportunities of the chapter\'s 250+ members. Facilitated tutoring on AI, specifically deep reinforcement learning.',
      fr: "Dirigé et géré des projets techniques innovants, développé le plan annuel et organisé des ateliers pour renforcer les compétences et les opportunités d'apprentissage des 250+ membres du chapitre. Animé du tutorat en IA, en particulier sur l'apprentissage par renforcement profond.",
    },
  },
  {
    slug: 'junior-enterprise-insat',
    name: 'Junior Enterprise INSAT',
    role: {
      en: 'Hackathon Organizing Committee President & Senior Member',
      fr: "Président du Comité d'Organisation du Hackathon & Membre Senior",
    },
    period: '09/2023 — 02/2025',
    description: {
      en: 'Organized "Hack for Good", a nationwide competition with three workshops and 140 participants, focused on CSR projects.',
      fr: "Organisé « Hack for Good », une compétition nationale avec trois ateliers et 140 participants, centrée sur des projets RSE.",
    },
  },
  {
    slug: 'notre-grand-bleu',
    name: 'Notre Grand Bleu',
    role: {
      en: 'Senior Member',
      fr: 'Membre Senior',
    },
    period: '04/2021 — 08/2023',
    description: {
      en: 'An association working to preserve marine life in the Mediterranean.',
      fr: "Une association œuvrant à la préservation de la vie marine en Méditerranée.",
    },
  },
];

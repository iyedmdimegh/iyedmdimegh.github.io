import type { Localized } from './types';

/**
 * Interface strings. Every one of these is localized — the old site hardcoded
 * the Awards heading and its "Show More" control in English, so a French
 * visitor met untranslated chrome halfway down the page.
 */
export const ui = {
  /**
   * Section headings. Experience leads, ahead of Selected Work — Iyed's
   * call, 2026-09-09: seven roles including two research engagements is
   * unusual for a student, so the volume is itself the argument.
   */
  sections: {
    experience: { en: 'Experience', fr: 'Expérience' },
    work: { en: 'Selected Work', fr: 'Travaux sélectionnés' },
    publications: { en: 'Publications', fr: 'Publications' },
    awards: { en: 'Awards & Recognition', fr: 'Prix & Distinctions' },
    leadership: { en: 'Leadership & Community', fr: 'Engagement & Communauté' },
    skills: { en: 'Skills', fr: 'Compétences' },
    news: { en: 'News', fr: 'Actualités' },
    education: { en: 'Education & Languages', fr: 'Formation & Langues' },
    contact: { en: 'Contact', fr: 'Contact' },
    references: { en: 'References', fr: 'Références' },
  } satisfies Record<string, Localized>,

  nav: {
    experience: { en: 'Experience', fr: 'Expérience' },
    work: { en: 'Work', fr: 'Travaux' },
    publications: { en: 'Publications', fr: 'Publications' },
    awards: { en: 'Awards', fr: 'Prix' },
    news: { en: 'News', fr: 'Actualités' },
    contact: { en: 'Contact', fr: 'Contact' },
  } satisfies Record<string, Localized>,

  labels: {
    abstract: { en: 'Abstract', fr: 'Résumé' },
    indexTerms: { en: 'Index Terms', fr: 'Mots-clés' },
    references: { en: 'References', fr: 'Références' },
    figure: { en: 'Fig.', fr: 'Fig.' },
    downloadResume: { en: 'Download résumé', fr: 'Télécharger le CV' },
    resume: { en: 'Résumé', fr: 'CV' },
    email: { en: 'Email', fr: 'E-mail' },
    inPlainTerms: { en: 'In plain terms', fr: 'En clair' },
    outcome: { en: 'Outcome', fr: 'Résultat' },
    showMore: { en: 'Show all', fr: 'Tout afficher' },
    showLess: { en: 'Show fewer', fr: 'Afficher moins' },
    readMore: { en: 'Read more', fr: 'En savoir plus' },
    backToIndex: { en: 'Back to index', fr: "Retour à l'index" },
    firstAuthor: { en: 'First author', fr: 'Premier auteur' },
    peerReviewed: { en: 'Peer-reviewed, indexed', fr: 'Évalué par les pairs, indexé' },
    technicalPaper: { en: 'Technical paper', fr: 'Article technique' },
    present: { en: 'Present', fr: 'Présent' },
    pendingMaterial: {
      en: 'Screenshots pending',
      fr: 'Captures à venir',
    },
    pendingMaterialNote: {
      en: 'This project is real and documented; its interface images have not been captured yet.',
      fr: "Ce projet est réel et documenté ; les captures de son interface ne sont pas encore disponibles.",
    },
    previousImage: { en: 'Previous image', fr: 'Image précédente' },
    nextImage: { en: 'Next image', fr: 'Image suivante' },
    goToImage: { en: 'Go to image', fr: "Aller à l'image" },
    toggleTheme: { en: 'Switch theme', fr: 'Changer de thème' },
    toggleLanguage: { en: 'Switch to French', fr: 'Passer en anglais' },
    skipToContent: { en: 'Skip to content', fr: 'Aller au contenu' },
    builtAt: { en: 'Built at', fr: 'Réalisé chez' },
    role: { en: 'Role', fr: 'Rôle' },
    team: { en: 'Team', fr: 'Équipe' },
    context: { en: 'Context', fr: 'Contexte' },
    dataPath: { en: 'The data path', fr: 'Le chemin de données' },
    approach: { en: 'Approach', fr: 'Approche' },
    results: { en: 'Results', fr: 'Résultats' },
    earlierWork: { en: 'Earlier work', fr: 'Travaux antérieurs' },
    viewProject: { en: 'Read the full write-up', fr: "Lire l'article complet" },
  } satisfies Record<string, Localized>,

  /**
   * The tag vocabulary — Iyed's idea, 2026-09-09. Projects vary a lot in
   * what they can prove, so each declares the evidence it carries instead
   * of every card being dressed identically. A tag is a promise the detail
   * page has to keep.
   */
  tags: {
    measured: { en: 'measured', fr: 'mesuré' },
    paper: { en: 'paper', fr: 'article' },
    award: { en: 'award', fr: 'prix' },
    demo: { en: 'demo video', fr: 'démo vidéo' },
    led: { en: 'led team', fr: "équipe dirigée" },
    shipped: { en: 'shipped', fr: 'en production' },
    research: { en: 'research', fr: 'recherche' },
    hardware: { en: 'hardware', fr: 'matériel' },
    architecture: { en: 'architecture', fr: 'architecture' },
    interface: { en: 'interface', fr: 'interface' },
  } satisfies Record<string, Localized>,

  /** What each tag means, shown on hover or focus. */
  tagMeanings: {
    measured: { en: 'Benchmarked results you can check.', fr: 'Des résultats mesurés et vérifiables.' },
    paper: { en: 'Produced a peer-reviewed publication.', fr: "A donné lieu à une publication évaluée par les pairs." },
    award: { en: 'Placed in a judged competition.', fr: "Primé lors d'un concours." },
    demo: { en: 'There is video of it working.', fr: "Une vidéo de démonstration existe." },
    led: { en: 'Iyed ran the team, not just a part of it.', fr: "Iyed a dirigé l'équipe, pas seulement une partie du travail." },
    shipped: { en: 'Real users, running in production.', fr: 'De vrais utilisateurs, en production.' },
    research: { en: 'Done under academic supervision.', fr: 'Mené sous encadrement académique.' },
    hardware: { en: 'A physical build, not only software.', fr: "Une réalisation physique, pas uniquement logicielle." },
    architecture: { en: 'The interesting part is the system design.', fr: "L'intérêt réside dans la conception du système." },
    interface: { en: 'The interesting part is what it is like to use.', fr: "L'intérêt réside dans l'expérience d'utilisation." },
  } satisfies Record<string, Localized>,

  contact: {
    body: {
      en: 'I am looking for a final-year engineering internship, and I am open to research collaborations and freelance work. The fastest way to reach me is email.',
      fr: "Je recherche un stage de fin d'études, et je suis ouvert aux collaborations de recherche et aux missions en freelance. Le plus rapide pour me joindre est l'e-mail.",
    },
  } satisfies Record<string, Localized>,

  meta: {
    description: {
      en: 'Iyed Mdimegh — final-year software engineering student at INSAT, Tunis. First author, IEEE SMC 2025. Seven competition prizes and two research engagements with EFREI Paris. Selected work in computer vision, distributed training and retrieval systems.',
      fr: "Iyed Mdimegh — étudiant en dernière année de génie logiciel à l'INSAT, Tunis. Premier auteur, IEEE SMC 2025. Sept prix de compétition et deux collaborations de recherche avec l'EFREI Paris. Travaux en vision par ordinateur, entraînement distribué et systèmes de recherche d'information.",
    },
    footer: {
      en: 'All rights reserved.',
      fr: 'Tous droits réservés.',
    },
  } satisfies Record<string, Localized>,
} as const;

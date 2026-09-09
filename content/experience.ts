import type { Role } from './types';

/**
 * Newest first. Job titles follow the résumé, not the old site — Iyed's
 * decision, 2026-09-08: the site, the résumé and LinkedIn tell one story.
 *
 * Seven roles, and Experience leads the page ahead of Selected Work — Iyed's
 * call, 2026-09-09, on the grounds that the volume is itself the argument.
 *
 * Three of these roles ARE projects. The updated résumé reclassified Frugal AI
 * from a project to a research role, which would have duplicated it across two
 * sections; instead `projectSlugs` cross-links them and the overlap becomes
 * navigation.
 */
export const experience: readonly Role[] = [
  {
    slug: 'efrei-vision',
    company: 'EFREI Paris',
    /**
     * The industry partner is NOT named — confidential, Iyed's instruction
     * 2026-09-09. Do not reintroduce it from the resume, which does name it.
     */
    title: {
      en: 'Research Intern — Computer Vision',
      fr: 'Stagiaire de recherche — Vision par ordinateur',
    },
    period: {
      en: 'June 2026 — August 2026',
      fr: 'Juin 2026 — Août 2026',
    },
    location: 'Paris, France',
    achievements: {
      en: [
        'Researched object tracking that holds up under motion blur for multi-sport video analysis, building on current state-of-the-art approaches.',
      ],
      fr: [
        "Recherche sur le suivi d'objets robuste au flou de mouvement pour l'analyse vidéo multi-sport, en s'appuyant sur l'état de l'art actuel.",
      ],
    },
    tags: {
      en: ['Computer Vision', 'Object Tracking', 'Video Analysis', 'Research'],
      fr: ['Vision par ordinateur', "Suivi d'objets", 'Analyse vidéo', 'Recherche'],
    },
  },
  {
    slug: 'freelance',
    company: 'Freelance',
    title: {
      en: 'Software Engineer',
      fr: 'Ingénieur Logiciel',
    },
    period: {
      en: 'April 2026 — July 2026',
      fr: 'Avril 2026 — Juillet 2026',
    },
    achievements: {
      en: [
        'Built a conference management platform covering the full event workflow: attendee registration, paper submissions, document management and payment processing.',
      ],
      fr: [
        "Développement d'une plateforme de gestion de conférences couvrant l'ensemble du cycle d'un événement : inscription des participants, soumission d'articles, gestion documentaire et traitement des paiements.",
      ],
    },
    tags: {
      en: ['Full-Stack Web Development', 'Payment Integration', 'Scalable Architecture'],
      fr: ['Développement Web Full-Stack', 'Intégration de Paiement', 'Architecture Scalable'],
    },
  },
  {
    slug: 'efrei-frugal-ai',
    company: 'EFREI Paris',
    title: {
      en: 'Research Collaborator — Frugal AI & Sustainable Deep Learning',
      fr: 'Collaborateur de recherche — IA frugale et apprentissage profond durable',
    },
    period: {
      en: 'November 2025 — June 2026',
      fr: 'Novembre 2025 — Juin 2026',
    },
    achievements: {
      en: [
        "Contributed to the thesis research of a PhD candidate at EFREI Paris, guided week to week by the candidate and co-supervised by an INSAT faculty member.",
        'Co-designed a model-parallel distributed architecture for the Introvert pipeline using PyTorch RPC and Docker, cutting CO2 emissions by 42.6% while holding accuracy flat.',
        'Built a training optimization pipeline combining mixed-precision training (AMP), torch.compile and asynchronous data loading, cutting training time by 33.7%.',
        'Designed a composite frugality metric based on the Analytic Hierarchy Process (AHP) that scores AI deployments on energy, memory, FLOPs and predictive accuracy in a single measure.',
      ],
      fr: [
        "Contribution aux travaux de thèse d'un doctorant de l'EFREI Paris, encadré semaine après semaine par le doctorant et co-supervisé par un enseignant-chercheur de l'INSAT.",
        "Co-conception d'une architecture distribuée à parallélisme de modèle pour le pipeline Introvert avec PyTorch RPC et Docker, réduisant les émissions de CO2 de 42,6 % à précision constante.",
        "Développement d'un pipeline d'optimisation d'entraînement combinant précision mixte (AMP), torch.compile et chargement de données asynchrone, réduisant le temps d'entraînement de 33,7 %.",
        "Conception d'une métrique composite de frugalité fondée sur la méthode AHP, évaluant en une seule mesure énergie, mémoire, FLOPs et précision prédictive.",
      ],
    },
    tags: {
      en: ['PyTorch RPC', 'Model Parallelism', 'Green AI', 'Research'],
      fr: ['PyTorch RPC', 'Parallélisme de modèle', 'IA verte', 'Recherche'],
    },
    projectSlugs: ['frugal-ai'],
  },
  {
    slug: 'free2move',
    company: 'Free2Move',
    title: {
      en: 'Software Engineering Intern — SAP Joule Integration',
      fr: 'Stagiaire en Ingénierie Logicielle — Intégration SAP Joule',
    },
    period: {
      en: 'July 2025 — September 2025',
      fr: 'Juillet 2025 — Septembre 2025',
    },
    location: 'Tunis, Tunisia',
    achievements: {
      en: [
        'Developed AI-driven automation using SAP Joule to optimize business processes in SAP S/4HANA.',
        'Created custom agents to automate tasks like report generation, improving efficiency and decision-making.',
      ],
      fr: [
        "Développement d'automatisation basée sur l'IA avec SAP Joule pour optimiser les processus métier dans SAP S/4HANA.",
        "Création d'agents personnalisés pour automatiser des tâches comme la génération de rapports, améliorant l'efficacité et la prise de décision.",
      ],
    },
    tags: {
      en: ['SAP Joule', 'AI', 'S/4HANA', 'Automation'],
      fr: ['SAP Joule', 'IA', 'S/4HANA', 'Automatisation'],
    },
  },
  {
    slug: 'vectors',
    company: 'Vectors',
    title: {
      en: 'Software Engineering Intern',
      fr: 'Stagiaire en Ingénierie Logicielle',
    },
    period: {
      en: 'June 2025 — July 2025',
      fr: 'Juin 2025 — Juillet 2025',
    },
    location: 'Tunis, Tunisia',
    achievements: {
      en: [
        'Rebuilt "Jira Comment Toolkit" using modern technologies, replacing legacy code.',
        'Developed an Atlassian app to manage and classify Jira comments with AI-driven labeling for improved workflow.',
      ],
      fr: [
        'Reconstruction du "Jira Comment Toolkit" avec des technologies modernes, remplaçant le code legacy.',
        "Développement d'une application Atlassian pour gérer et classifier les commentaires Jira avec étiquetage basé sur l'IA pour améliorer le flux de travail.",
      ],
    },
    tags: {
      en: ['Jira', 'Atlassian', 'AI', 'Modern Stack'],
      fr: ['Jira', 'Atlassian', 'IA', 'Stack Moderne'],
    },
  },
  {
    slug: 'pixemantic',
    company: 'Pixemantic',
    // Résumé title, replacing the old site's "Software Engineer".
    title: {
      en: 'AI & Software Engineer Intern',
      fr: 'Stagiaire Ingénieur IA & Logiciel',
    },
    period: {
      en: 'July 2024 — September 2024',
      fr: 'Juillet 2024 — Septembre 2024',
    },
    location: 'Tunis, Tunisia',
    achievements: {
      en: [
        'Leveraged advanced AI and deep reinforcement learning to optimize 3D item arrangement, enhancing space utilization and efficiency.',
        'Transformed the solution into a full-stack web application using Django and React.',
      ],
      fr: [
        "Utilisation de l'IA avancée et de l'apprentissage par renforcement profond pour optimiser l'agencement d'objets 3D, améliorant l'utilisation de l'espace et l'efficacité.",
        'Transformation de la solution en application web full-stack utilisant Django et React.',
      ],
    },
    tags: {
      en: ['AI', 'Deep Learning', 'Django', 'React', '3D'],
      fr: ['IA', 'Deep Learning', 'Django', 'React', '3D'],
    },
    artifacts: [
      {
        kind: 'letter',
        href: '/assets/documents/reports/Pixemantic.pdf',
        label: {
          en: 'Recommendation letter — Head of Data Science',
          fr: 'Lettre de recommandation — Responsable Data Science',
        },
      },
    ],
    projectSlugs: ['ai-3d-packing'],
  },
  {
    slug: 'proxym',
    company: 'PROXYM Group',
    // Résumé title, replacing the old site's "Software Developer".
    title: {
      en: 'Software Engineer Intern',
      fr: 'Stagiaire Ingénieur Logiciel',
    },
    period: {
      en: 'June 2024 — July 2024',
      fr: 'Juin 2024 — Juillet 2024',
    },
    location: 'Sousse, Tunisia',
    achievements: {
      en: ['Created a social media web app from scratch using the MERN stack and socket.io.'],
      fr: [
        "Création d'une application web de réseau social à partir de zéro en utilisant la pile MERN et socket.io.",
      ],
    },
    tags: {
      en: ['MERN', 'Socket.io', 'Real-time', 'Full Stack'],
      fr: ['MERN', 'Socket.io', 'Temps réel', 'Full Stack'],
    },
    artifacts: [
      {
        kind: 'report',
        href: '/assets/documents/reports/Proxym.pdf',
        label: { en: 'Internship report (PDF)', fr: 'Rapport de stage (PDF)' },
      },
    ],
    projectSlugs: ['messaging-app'],
  },
];

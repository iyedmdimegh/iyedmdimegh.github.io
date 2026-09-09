import type { Update } from './types';

/**
 * News feed. Typos from the old stored copy are fixed here: "Prented" →
 * "Presented", "prvided" → "provided", and the French "responsable" left
 * inside English text → "responsible". The Enicar item stays out (Iyed,
 * 2026-09-08). The IEEE Vice Chair item is in the past tense.
 */
export const updates: readonly Update[] = [
  {
    slug: 'retech-fusion-win',
    figure: {
      src: '/assets/images/updates/nrtf.jpg',
      alt: {
        en: 'The team after winning 1st Prize at National Re·Tech Fusion',
        fr: "L'équipe après la victoire au 1er Prix du National Re·Tech Fusion",
      },
    },
    title: {
      en: 'Won 1st Prize at the National Re·Tech Fusion competition',
      fr: "1er Prix au concours National Re·Tech Fusion",
    },
    description: {
      en: 'My team built an IoT and edge-computing platform for Kilani Group to optimize industrial energy consumption. Organized by the IEEE PES × PELS INSAT Joint Chapter.',
      fr: "Nous avons développé une plateforme IoT et edge computing pour Kilani Group afin d'optimiser la consommation énergétique industrielle. Organisé par le IEEE PES × PELS INSAT Joint Chapter.",
    },
  },
  {
    slug: 'smc-vienna',
    figure: {
      src: '/assets/images/updates/smc-vienna.jpg',
      alt: {
        en: 'Presenting at the IEEE SMC 2025 conference in Vienna',
        fr: 'Présentation à la conférence IEEE SMC 2025 à Vienne',
      },
    },
    title: {
      en: 'Presented work at the IEEE SMC 2025 Conference and the BR41N.IO BCI Hackathon in Vienna',
      fr: 'Participation à la Conférence IEEE SMC 2025 & au Hackathon BR41N.IO à Vienne',
    },
    description: {
      en: 'Represented Tunisia at IEEE SMC 2025 in Vienna, presenting our research with my co-authors, meeting academics and industry experts, and exploring brain–computer interfaces. I also took part in the BR41N.IO BCI Hackathon, developing a neurotechnology system that adapts music volume to mental state using EEG and fNIRS signals.',
      fr: "J'ai représenté la Tunisie lors de la conférence IEEE SMC 2025 à Vienne, où j'ai présenté mes travaux avec mes co-auteurs, échangé avec des chercheurs et experts industriels et découvert des innovations de pointe en interfaces cerveau-ordinateur. J'ai également participé au hackathon BR41N.IO, en développant un système neurotechnologique qui adapte le volume de la musique selon l'état mental via EEG et fNIRS.",
    },
  },
  {
    slug: 'gnn-workshop',
    figure: {
      src: '/assets/images/updates/gnnpic.jpg',
      alt: {
        en: 'Hosting the Graph Neural Networks workshop at INSAT',
        fr: "Animation de l'atelier sur les réseaux de neurones graphiques à l'INSAT",
      },
    },
    title: {
      en: 'Hosted a workshop on Graph Neural Networks at INSAT',
      fr: "Animation d'un atelier sur les Réseaux de Neurones Graphiques à l'INSAT",
    },
    description: {
      en: 'Led a technical workshop introducing students to advanced deep-learning architectures for graph-structured data: message passing, graph convolutions, and practical applications in recommendation systems and molecular modeling.',
      fr: "J'ai dirigé un atelier technique sur les Réseaux de Neurones Graphiques (GNNs) à l'INSAT, initiant les étudiants aux architectures avancées d'apprentissage profond pour les données structurées en graphes. Couverture des concepts clés incluant le passage de messages, les convolutions de graphes et les applications pratiques dans les systèmes de recommandation et la modélisation moléculaire.",
    },
  },
  {
    slug: 'tsyp-chess-ceremony',
    figure: {
      src: '/assets/images/updates/tsypchesspicceremonie.jpg',
      alt: {
        en: 'The TSYP Chess Coach Challenge award ceremony',
        fr: 'La cérémonie de remise des prix du TSYP Chess Coach Challenge',
      },
    },
    title: {
      en: 'Won 1st Prize at the TSYP Chess Coach Challenge',
      fr: "1er Prix au Défi Coach d'Échecs TSYP",
    },
    description: {
      en: 'My team took 1st place in the national TSYP Chess Coach Challenge, competing against teams from 20 universities across Tunisia. A detailed description of the winning project is provided in Selected Work.',
      fr: "Avec mon équipe, nous avons remporté la 1ère place au défi national Coach d'Échecs TSYP, en compétition contre des équipes de 20 universités à travers la Tunisie. Une description détaillée du projet primé est disponible dans la section des projets.",
    },
  },
  {
    slug: 'ieee-vice-chair',
    figure: {
      src: '/assets/images/updates/vctaPic.jpg',
      alt: {
        en: 'With the IEEE INSAT Computer Society Chapter team',
        fr: "Avec l'équipe du IEEE INSAT Computer Society Chapter",
      },
    },
    title: {
      en: 'Served as Vice Chair, Technical Activities at the IEEE INSAT Computer Society Chapter',
      fr: 'Vice-Président, Activités Techniques au IEEE INSAT Computer Society Chapter',
    },
    description: {
      en: 'As Vice Chair, responsible for Technical Activities, I led and managed innovative technical projects, developed the annual plan, and organized workshops to expand the skills and learning opportunities of our 250+ members.',
      fr: "En tant que Vice-Président chargé des Activités Techniques, j'ai dirigé et géré des projets techniques innovants, développé le plan annuel et organisé des ateliers impactants pour améliorer les compétences et les opportunités d'apprentissage de nos 250+ membres.",
    },
  },
  {
    slug: 'ains-hackathon-third',
    figure: {
      src: '/assets/images/updates/AINS-HACK.jpg',
      alt: {
        en: 'At the AINS Hackathon',
        fr: 'Au Hackathon AINS',
      },
    },
    title: {
      en: '3rd Place at the AINS Hackathon (Artificial Intelligence National Summit)',
      fr: "3ème place au HACKATHON AINS (Sommet National d'Intelligence Artificielle)",
    },
    description: {
      en: 'Our team competed against 20 others with an AI-agents project, taking 3rd prize.',
      fr: "Notre équipe a affronté 20 autres avec un projet axé sur les agents IA, nous valant le 3ème prix.",
    },
  },
  {
    slug: 'hack-for-good',
    figure: {
      src: '/assets/images/updates/hackathon.jpg',
      alt: {
        en: 'The Hack for Good 2.0 hackathon',
        fr: 'Le hackathon Hack for Good 2.0',
      },
    },
    title: {
      en: 'Organizing Committee President of the "Hack for Good 2.0" hackathon',
      fr: 'Président du Comité Organisateur du Hackathon « Hack for good 2.0 »',
    },
    description: {
      en: 'With my team I organized a hackathon that brought together 140 participants and drew students from across the country to contribute outstanding projects.',
      fr: "Avec mon équipe, j'ai organisé un hackathon qui a rassemblé 140 participants et attiré de nombreux étudiants à travers le pays pour contribuer à cet événement avec des projets exceptionnels.",
    },
  },
];

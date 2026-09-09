import type { Award } from './types';

/**
 * Seven prizes: one international, five national, one national qualifying for
 * an international final. The density is the differentiator.
 *
 * All seven ship — Iyed's call, 2026-09-09 — even though the updated résumé
 * lists only five. Enicar and ATCCM stay.
 *
 * Award #3 previously shipped with the Chess award's description copy-pasted
 * into it, in both languages. The corrected text below is the one from the
 * résumé record.
 */
export const awards: readonly Award[] = [
  {
    slug: 'aesh-2026',
    date: '07/2026',
    title: {
      en: 'AESS Sustainability Hackathon (AESH 2026), Egypt',
      fr: 'AESS Sustainability Hackathon (AESH 2026), Égypte',
    },
    prize: {
      en: '2nd Place',
      fr: '2e Place',
    },
    scope: {
      en: 'International · IEEE AESS Tunisia, Jordan & Egypt sections · 193 teams',
      fr: 'International · sections IEEE AESS Tunisie, Jordanie et Égypte · 193 équipes',
    },
    description: {
      en: 'Placed 2nd of 193 teams at this international IEEE hackathon, run jointly by the IEEE AESS Tunisia, Jordan and Egypt sections. With team Les Talelas, designed NUWA and its underlying protocol SISP: a fault-tolerant, self-healing communication layer that lets CubeSat constellations correct degraded sensors, relay data through healthy neighbours and borrow readings from each other — keeping satellites useful for longer instead of replacing them.',
      fr: "Classé 2e sur 193 équipes lors de ce hackathon international IEEE, organisé conjointement par les sections IEEE AESS de Tunisie, de Jordanie et d'Égypte. Avec l'équipe Les Talelas, conception de NUWA et de son protocole SISP : une couche de communication tolérante aux pannes et auto-réparatrice permettant aux constellations de CubeSats de corriger leurs capteurs dégradés, de relayer les données via des voisins sains et d'emprunter leurs mesures — prolongeant la durée de vie utile des satellites plutôt que de les remplacer.",
    },
  },
  {
    slug: 'retech-fusion',
    date: '05/2026',
    title: {
      en: 'National Re·Tech Fusion',
      fr: 'National Re·Tech Fusion',
    },
    prize: {
      en: '1st Prize · Best Art Award',
      fr: '1er Prix · Best Art Award',
    },
    scope: {
      en: 'National · IEEE PES × PELS INSAT Joint Chapter',
      fr: 'National · IEEE PES × PELS INSAT Joint Chapter',
    },
    description: {
      en: 'Won 1st prize at the National Re·Tech Fusion competition, organized by the IEEE PES × PELS INSAT Joint Chapter and centered on a real industrial challenge from Kilani Group. Built an industrial energy intelligence platform combining IoT, edge computing and data analytics to monitor and optimize factory energy consumption. Also won the Best Art Award at the same event.',
      fr: "Remporté le 1er prix au concours National Re·Tech Fusion, organisé par le IEEE PES × PELS INSAT Joint Chapter, centré sur un défi industriel réel de Kilani Group. Développé une plateforme d'intelligence énergétique industrielle combinant IoT, edge computing et analyse de données pour surveiller et optimiser la consommation énergétique des usines. Également remporté le Best Art Award lors du même événement.",
    },
  },
  {
    slug: 'tsyp-chess-coach',
    date: '12/2024',
    title: {
      en: 'IEEE TSYP 12 Challenge — SMC Chapter',
      fr: 'IEEE TSYP 12 Challenge — SMC Chapter',
    },
    prize: { en: '1st Prize', fr: '1er Prix' },
    scope: {
      en: 'National · 20 universities',
      fr: 'National · 20 universités',
    },
    description: {
      en: 'Secured 1st place in the national TSYP Chess Coach Challenge, competing against teams from 20 universities across Tunisia. Led the development of the INSAT Chess Coach Robot, a robotic system designed to teach and interact with chess players.',
      fr: "Remporté la 1ère place au TSYP Chess Coach Challenge, une compétition nationale organisée par la section IEEE Tunisie, avec la participation de 20 universités. Dirigé le développement de l'INSAT Chess Coach Robot, un système robotique innovant conçu pour enseigner et interagir avec les joueurs d'échecs.",
    },
  },
  {
    slug: 'tsyp-smartshield',
    date: '12/2024',
    title: {
      en: 'IEEE TSYP 12 Challenge — CS Chapter',
      fr: 'IEEE TSYP 12 Challenge — CS Chapter',
    },
    prize: { en: '2nd Prize', fr: '2e Prix' },
    scope: {
      en: 'National · 20+ universities',
      fr: 'National · plus de 20 universités',
    },
    // Corrected. Both locales previously described the Chess Coach robot here.
    description: {
      en: 'Achieved 2nd place in the IEEE TSYP 12 Challenge (Computer Society Chapter), a national competition with over 20 participating Tunisian universities. Co-created SMARTSHIELD, an AI-driven cybersecurity incident response platform.',
      fr: "Obtenu la 2e place au IEEE TSYP 12 Challenge (Computer Society Chapter), une compétition nationale réunissant plus de 20 universités tunisiennes. Co-créé SMARTSHIELD, une plateforme de réponse aux incidents de cybersécurité basée sur l'IA.",
    },
  },
  {
    slug: 'ains-hackathon',
    date: '07/2024',
    title: {
      en: 'AINS Hackathon — Artificial Intelligence National Summit',
      fr: "Hackathon AINS — Sommet National d'Intelligence Artificielle",
    },
    prize: { en: '3rd Place', fr: '3e Prix' },
    scope: {
      en: 'National · 20 teams',
      fr: 'National · 20 équipes',
    },
    description: {
      en: 'Won 3rd place in the AINS Hackathon, competing against 20 teams nationwide. Developed an AI-driven agent capable of planning and scheduling learning tasks using the Google Calendar API, dynamically adjusting for user behavior.',
      fr: "Classé 3e au Hackathon AINS après avoir affronté 20 équipes de tout le pays. Développé un agent basé sur l'IA capable de planifier et de programmer des tâches d'apprentissage à l'aide de l'API Google Calendar, en s'adaptant dynamiquement au comportement des utilisateurs.",
    },
  },
  {
    slug: 'enicar-coding-arena',
    title: {
      en: 'Enicar Coding Arena',
      fr: 'Enicar Coding Arena',
    },
    prize: { en: '1st Prize', fr: '1er Prix' },
    scope: {
      en: 'Competitive programming',
      fr: 'Programmation compétitive',
    },
    description: {
      en: 'Earned 1st place in the Enicar Coding Arena, a competitive programming contest. My team outperformed others by solving the highest number of challenging algorithmic problems.',
      fr: "Remporté la 1ère place à l'Enicar Coding Arena, un concours de programmation compétitive. Mon équipe s'est distinguée en résolvant le plus grand nombre de problèmes algorithmiques complexes.",
    },
  },
  {
    slug: 'atccm-mathematics',
    title: {
      en: 'ATCCM National Mathematics Contest',
      fr: 'Concours National de Mathématiques ATCCM',
    },
    prize: { en: '1st Place', fr: '1ère Place' },
    scope: {
      en: 'National · qualified for the international competition in Paris',
      fr: 'National · qualifié pour la compétition internationale à Paris',
    },
    description: {
      en: 'Achieved first place nationally and qualified for the international competition held in Paris.',
      fr: "Obtenu la première place au niveau national et qualifié pour la compétition internationale organisée à Paris.",
    },
  },
];

import type { Publication } from './types';

/**
 * The SMARTSHIELD technical paper is deliberately NOT here — Iyed's call,
 * 2026-09-09: it is a competition paper, and it belongs to the SMARTSHIELD
 * project, which already links the PDF as an artifact. This section carries
 * indexed, peer-reviewed work only.
 *
 * The section the old site never had. The SMC paper was reachable only behind
 * a small file icon on a project card; it is the single strongest credential
 * on the page.
 */
export const publications: readonly Publication[] = [
  {
    slug: 'intelligent-chess-robot-tutor',
    title:
      'Intelligent Chess Robot Tutor: A Low-Cost, Vision-Guided Multi-Level System with Real-Time Tracking and Advanced Gameplay Analysis',
    shortTitle: 'Intelligent Chess Robot Tutor (IEEE SMC 2025)',
    venue: {
      en: 'IEEE International Conference on Systems, Man, and Cybernetics (SMC), Vienna, Austria',
      fr: 'IEEE International Conference on Systems, Man, and Cybernetics (SMC), Vienne, Autriche',
    },
    year: 2025,
    authors: [
      'Iyed Mdimegh',
      'Mohamed Hamzaoui',
      'Malak Bouzidi',
      'Rayen Kasmi',
      'Ahmed Zghibi',
      'Fayez Zouari',
    ],
    selfIndex: 0,
    authorship: {
      en: 'First author · presented orally, October 2025',
      fr: 'Premier auteur · présentation orale, octobre 2025',
    },
    abstract: {
      en: 'RoboKnight is an affordable 4-DOF robotic arm with a dual-power electronic structure, built to teach chess against a physical board. A multi-stage computer-vision pipeline uses YOLO models and FEN generation to identify the board and pieces and to track and validate moves in real time. A central logic unit integrates vision, robot control and the chess engine, and a web dashboard monitors and remotely operates multiple arms at once.',
      fr: "RoboKnight est un bras robotique 4 axes abordable, doté d'une structure électronique à double alimentation, conçu pour enseigner les échecs sur un plateau physique. Un pipeline de vision par ordinateur multi-étapes utilise des modèles YOLO et la génération FEN pour identifier le plateau et les pièces, puis suivre et valider les coups en temps réel. Une unité logique centrale intègre la vision, le contrôle du robot et le moteur d'échecs, et un tableau de bord web supervise et pilote à distance plusieurs bras simultanément.",
    },
    indexed: true,
    artifacts: [
      {
        kind: 'paper',
        href: 'https://ieeexplore.ieee.org/document/11342836',
        label: { en: 'IEEE Xplore', fr: 'IEEE Xplore' },
      },
      {
        kind: 'report',
        href: '/assets/documents/papers/chess-coach-research-paper.pdf',
        label: { en: 'Full paper (PDF)', fr: 'Article complet (PDF)' },
      },
      {
        kind: 'video',
        href: 'https://youtu.be/odGnHj1qUEk',
        label: { en: 'System demo', fr: 'Démo du système' },
      },
    ],
  },
];

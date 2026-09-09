import type { Project } from './types';

/**
 * Selected work, ranked. The Java e-commerce exercise is dropped and Linkkit
 * is not written up — Iyed's decisions, 2026-09-08.
 *
 * `depth` decides how much room each entry earns, and only 'page' generates a
 * /projects/[slug] route. Nothing is padded out to make the grid look even.
 *
 * `tags` are a contract, not decoration: a tag on a card is evidence the
 * detail page has to deliver.
 *
 * One entry still carries a `placeholder` figure — the Kilani energy platform
 * is real, documented work with no screenshots in the repo. It ships with a
 * visible "awaiting material" notice rather than a fabricated image. Iyed has
 * promised the NRTF reports (2026-09-09).
 */
export const projects: readonly Project[] = [
  {
    slug: 'chess-coach-robot',
    rank: 1,
    title: {
      en: 'RoboKnight — INSAT Chess Coach Robot',
      fr: "RoboKnight — Robot entraîneur d'échecs INSAT",
    },
    period: '09/2024 — 01/2025',
    outcome: {
      en: '1st Prize at IEEE TSYP 12 against 20 universities, and a first-author IEEE SMC 2025 paper presented in Vienna.',
      fr: "1er Prix à l'IEEE TSYP 12 face à 20 universités, et un article IEEE SMC 2025 en premier auteur présenté à Vienne.",
    },
    plainly: {
      en: 'A robot arm that sees a real chessboard through a camera, decides a move, and physically picks up and moves the piece — adjusting its difficulty to the person playing.',
      fr: "Un bras robotique qui voit un vrai échiquier via une caméra, décide d'un coup, et déplace physiquement la pièce — en adaptant sa difficulté au joueur en face.",
    },
    description: {
      en: 'Led a team to develop the INSAT Chess Coach Robot, an interactive robotic chess system built for the TSYP contest. It integrates computer vision, a robotic arm, and an adaptive chess engine into a single learning experience: physical piece manipulation, skill-matched gameplay, real-time feedback and educational modes, all on standard chess equipment. The system bridges digital and physical chess learning.',
      fr: "J'ai dirigé une équipe pour développer le Robot entraîneur d'échecs INSAT, un système d'échecs robotique interactif conçu pour le concours TSYP. Le projet intègre une vision par ordinateur, un bras robotique et un moteur d'échecs adaptatif pour offrir une expérience d'apprentissage unique. Les principales caractéristiques incluent la manipulation physique des pièces, un gameplay adapté au niveau de compétence, des retours en temps réel et des modes éducatifs, tout en utilisant un équipement d'échecs standard. Ce système innovant comble le fossé entre l'apprentissage des échecs numérique et physique.",
    },
    tech: ['Stockfish', 'Raspberry Pi 4', 'Arduino', 'YOLOv8', 'Computer Vision', 'Python'],
    figures: [
      { src: '/assets/images/project/chessCoach/image0.png', alt: { en: 'The chess coach robot arm positioned over a standard board', fr: "Le bras robotique entraîneur d'échecs au-dessus d'un échiquier standard" } },
      { src: '/assets/images/project/chessCoach/image2.png', alt: { en: 'Computer-vision board and piece detection view', fr: 'Vue de détection du plateau et des pièces par vision par ordinateur' } },
      { src: '/assets/images/project/chessCoach/image3.png', alt: { en: 'The robotic arm manipulating a piece', fr: 'Le bras robotique manipulant une pièce' } },
      { src: '/assets/images/project/chessCoach/image4.png', alt: { en: 'The monitoring dashboard during a game', fr: 'Le tableau de bord de supervision pendant une partie' } },
      { src: '/assets/images/project/chessCoach/image5.png', alt: { en: 'The assembled system at the TSYP contest', fr: 'Le système assemblé lors du concours TSYP' } },
    ],
    artifacts: [
      { kind: 'paper', href: 'https://ieeexplore.ieee.org/document/11342836', label: { en: 'IEEE SMC 2025 paper', fr: 'Article IEEE SMC 2025' } },
      { kind: 'video', href: 'https://youtu.be/odGnHj1qUEk', label: { en: 'Demo video', fr: 'Vidéo de démonstration' } },
    ],
    tags: ['paper', 'award', 'led', 'demo', 'hardware'],
    depth: 'page',
  },
  {
    slug: 'sisp',
    rank: 2,
    title: {
      en: 'NUWA / SISP — self-healing satellite constellations',
      fr: 'NUWA / SISP — constellations de satellites auto-réparatrices',
    },
    period: '07/2026',
    outcome: {
      en: '2nd of 193 teams at the international IEEE AESS Sustainability Hackathon, with an anomaly detector validated on ESA telemetry at 0.99 accuracy.',
      fr: "2e sur 193 équipes au hackathon international IEEE AESS Sustainability, avec un détecteur d'anomalies validé sur des télémétries de l'ESA à 0,99 de précision.",
    },
    plainly: {
      en: 'A way for a group of small satellites to notice when one of them is going blind and cover for it — correcting its readings, relaying its data, or lending it their own sensors — instead of letting it become space junk.',
      fr: "Un moyen pour un groupe de petits satellites de détecter que l'un d'eux perd la vue et de compenser — en corrigeant ses mesures, en relayant ses données ou en lui prêtant leurs propres capteurs — au lieu de le laisser devenir un débris spatial.",
    },
    description: {
      en: "NUWA is an autonomous, self-healing ecosystem for satellite constellations, built on SISP: a deterministic inter-satellite protocol implemented as a C++ state machine of 21 states and 24 events, governed by a DEGR trust score that decides how much a satellite's data is still worth to its neighbours. Three services run on top of it — correction, relay and borrow — so a degraded spacecraft keeps contributing instead of being decommissioned early and adding to orbital debris.",
      fr: "NUWA est un écosystème autonome et auto-réparateur pour constellations de satellites, bâti sur SISP : un protocole inter-satellites déterministe implémenté sous forme de machine à états C++ à 21 états et 24 événements, gouvernée par un score de confiance DEGR qui détermine la valeur résiduelle des données d'un satellite pour ses voisins. Trois services s'appuient dessus — correction, relais et emprunt — afin qu'un engin dégradé continue de contribuer au lieu d'être déclassé prématurément et de grossir les débris orbitaux.",
    },
    tech: ['C++', 'SVD Anomaly Detection', 'Kalman Filtering', 'Protocol Design', 'Python', 'Link Budget Modelling'],
    figures: [
      {
        src: '/assets/images/project/sisp/nuwa-simulator.png',
        alt: {
          en: 'The NUWA orbital lifecycle simulator: constellation health panel, link matrix, 3D globe and a live protocol log',
          fr: 'Le simulateur de cycle de vie orbital NUWA : panneau de santé de la constellation, matrice de liens, globe 3D et journal de protocole en direct',
        },
      },
      {
        src: '/assets/images/project/sisp/architecture.png',
        alt: {
          en: 'SISP architecture: five satellites at differing health levels, the SVD anomaly pipeline, the protocol stack, and the DEGR trust bands',
          fr: "Architecture SISP : cinq satellites à différents niveaux de santé, le pipeline d'anomalies SVD, la pile protocolaire et les bandes de confiance DEGR",
        },
      },
    ],
    artifacts: [
      { kind: 'report', href: '/assets/documents/reports/nuwa-sisp-phase2-deck.pptx', label: { en: 'Phase 2 presentation', fr: 'Présentation Phase 2' } },
    ],
    tags: ['award', 'measured', 'architecture', 'research'],
    depth: 'page',
    detail: {
      pullQuote: {
        en: "Because the sky shouldn't wait for someone on the ground to fix it.",
        fr: "Parce que le ciel ne devrait pas attendre que quelqu'un au sol vienne le réparer.",
      },
      context: {
        en: [
          'Low Earth orbit carries more than 1.2 million debris objects larger than 1 cm, and 41.3% of small satellites launched between 2000 and 2016 suffered total or partial mission failure. A single ground station gets two to four usable contacts a day, minutes each.',
          'So when a sensor starts degrading, the spacecraft waits. Often it is decommissioned early — and becomes debris itself, making the problem worse. The premise of NUWA is that the fix belongs in software already in orbit, not in more backup hardware launched to replace it.',
        ],
        fr: [
          "L'orbite terrestre basse compte plus de 1,2 million de débris de plus d'un centimètre, et 41,3 % des petits satellites lancés entre 2000 et 2016 ont connu une défaillance totale ou partielle. Une station sol unique n'obtient que deux à quatre contacts exploitables par jour, de quelques minutes chacun.",
          "Alors quand un capteur se dégrade, l'engin attend. Il est souvent déclassé prématurément — et devient lui-même un débris, aggravant le problème. Le postulat de NUWA est que le correctif appartient au logiciel déjà en orbite, et non à du matériel de secours supplémentaire lancé pour le remplacer.",
        ],
      },
      approach: {
        en: [
          'Correction — a DEGR-weighted median-Kalman filter repairs degraded sensor readings in place, so a partially failed instrument still yields usable data.',
          'Relay — vital data is routed through healthy neighbours when a direct link to ground is unavailable.',
          "Borrow — a failed sensor is bypassed entirely by streaming a neighbouring satellite's healthy readings in its place.",
          'All three are governed by DEGR, a trust score from 0 to 15 deciding how much weight a satellite carries in consensus — from full participation, through reduced and near-zero weight, to exclusion.',
        ],
        fr: [
          "Correction — un filtre médian-Kalman pondéré par DEGR répare les mesures dégradées sur place, si bien qu'un instrument partiellement défaillant fournit encore des données exploitables.",
          "Relais — les données vitales transitent par des voisins sains lorsque la liaison directe vers le sol est indisponible.",
          "Emprunt — un capteur défaillant est entièrement contourné en diffusant à sa place les mesures saines d'un satellite voisin.",
          "Les trois services sont gouvernés par DEGR, un score de confiance de 0 à 15 qui détermine le poids d'un satellite dans le consensus — de la pleine participation à l'exclusion, en passant par un poids réduit puis quasi nul.",
        ],
      },
      metrics: [
        { key: { en: 'Assertions passed', fr: 'Assertions validées' }, value: '273/273', tone: 'ok' },
        { key: { en: 'RMSE improvement', fr: 'Amélioration RMSE' }, value: '94.3', unit: '%' },
        { key: { en: 'Detector accuracy', fr: 'Précision du détecteur' }, value: '0.99' },
        { key: { en: 'Link margin at ~1000 km', fr: 'Marge de liaison à ~1000 km' }, value: '9', unit: 'dB' },
        { key: { en: 'Payload reconstruction', fr: 'Reconstruction de charge utile' }, value: '100', unit: '%', tone: 'ok' },
      ],
      plates: [
        {
          figure: {
            src: '/assets/images/project/sisp/architecture.png',
            alt: {
              en: 'SISP architecture: five satellites at DEGR levels 1 to 15, the SVD anomaly pipeline, the protocol stack, DEGR trust bands and the physical layer model',
              fr: "Architecture SISP : cinq satellites aux niveaux DEGR 1 à 15, le pipeline d'anomalies SVD, la pile protocolaire, les bandes de confiance DEGR et le modèle de couche physique",
            },
          },
          plateLabel: { en: 'Fig. 1 — System architecture', fr: 'Fig. 1 — Architecture du système' },
          caption: {
            en: "Five satellites at DEGR 1 through 15, from healthy to critical failure. Below, the SVD anomaly pipeline and the protocol stack; to the right, the trust bands that decide whether a node's data still counts in consensus.",
            fr: "Cinq satellites de DEGR 1 à 15, de sain à défaillance critique. En dessous, le pipeline d'anomalies SVD et la pile protocolaire ; à droite, les bandes de confiance qui déterminent si les données d'un nœud comptent encore dans le consensus.",
          },
        },
        {
          figure: {
            src: '/assets/images/project/sisp/nuwa-simulator.png',
            alt: {
              en: 'The NUWA orbital lifecycle simulator showing constellation energy levels, a link matrix, a 3D globe and a live protocol log',
              fr: "Le simulateur de cycle de vie orbital NUWA montrant les niveaux d'énergie de la constellation, une matrice de liens, un globe 3D et un journal de protocole en direct",
            },
          },
          plateLabel: { en: 'Fig. 2 — Orbital lifecycle simulator', fr: 'Fig. 2 — Simulateur de cycle de vie orbital' },
          caption: {
            en: "Constellation health, link matrix and a live protocol log, with fault, low-energy and ground-link scenarios injectable at runtime. Validated against the European Space Agency's OPSSAT-AD telemetry dataset.",
            fr: "Santé de la constellation, matrice de liens et journal de protocole en direct, avec injection à l'exécution de scénarios de panne, de basse énergie et de liaison sol. Validé sur le jeu de données de télémétrie OPSSAT-AD de l'Agence spatiale européenne.",
          },
        },
      ],
      role: {
        en: "Built the SVD anomaly-detection pipeline — the residual scoring that feeds the DEGR trust score — and the deterministic C++ protocol state machine of 21 states and 24 events that governs correction, relay and borrow. Also built the NUWA simulator used to validate the system end to end against ESA's OPSSAT-AD telemetry.",
        fr: "Développement du pipeline de détection d'anomalies SVD — le calcul de résidus qui alimente le score de confiance DEGR — et de la machine à états C++ déterministe à 21 états et 24 événements qui gouverne la correction, le relais et l'emprunt. Également auteur du simulateur NUWA utilisé pour valider le système de bout en bout sur les télémétries OPSSAT-AD de l'ESA.",
      },
      team: ['Rayen Khammar', 'Adem Bhouri', 'Akrem Medimagh', 'Iyed Mdimegh', 'Talel Laarif'],
      schematic: {
        viewBox: '0 0 676 242',
        nodes: [
          {
            id: 'sensors', label: 'SENSOR SUITE', sub: '19 features / segment',
            x: 16, y: 30, w: 142, h: 46,
            note: {
              en: 'Raw telemetry from one satellite, segmented for the detector downstream.',
              fr: "Télémétrie brute d'un satellite, segmentée pour le détecteur en aval.",
            },
          },
          {
            id: 'svd', label: 'SVD DETECTOR', sub: 'reconstruction residual',
            x: 178, y: 30, w: 158, h: 46,
            note: {
              en: 'Iyed built this stage. Singular-value decomposition scores how far a reading sits from what a healthy instrument would produce — no anomaly labels needed at training time.',
              fr: "Étage développé par Iyed. La décomposition en valeurs singulières mesure l'écart entre un relevé et ce qu'un instrument sain produirait — sans étiquettes d'anomalie à l'entraînement.",
            },
          },
          {
            id: 'degr', label: 'DEGR SCORE', sub: '0 — 15',
            x: 356, y: 30, w: 124, h: 46, tone: 'warn',
            note: {
              en: 'The trust score every service reads. 0–3 full weight, 4–7 reduced, 8–11 low, 12–14 near-zero, 15 excluded from consensus entirely.',
              fr: "Le score de confiance lu par tous les services. 0–3 poids plein, 4–7 réduit, 8–11 faible, 12–14 quasi nul, 15 exclu du consensus.",
            },
          },
          {
            id: 'fsm', label: 'SISP STATE MACHINE', sub: '21 states · 24 events',
            x: 500, y: 30, w: 160, h: 46,
            note: {
              en: 'Iyed built this too. A deterministic C++ state machine: every transition is defined, so behaviour under fault is provable rather than hoped for. 273 of 273 assertions pass.',
              fr: "Également développée par Iyed. Machine à états C++ déterministe : chaque transition est définie, si bien que le comportement en cas de panne se démontre au lieu de s'espérer. 273 assertions sur 273 validées.",
            },
          },
          {
            id: 'correction', label: 'CORRECTION', sub: 'median-Kalman',
            x: 178, y: 152, w: 158, h: 46, tone: 'ok',
            note: {
              en: 'Repairs a degraded reading in place, weighting neighbours by their DEGR. A partially failed instrument keeps producing usable data.',
              fr: "Répare un relevé dégradé sur place, en pondérant les voisins par leur DEGR. Un instrument partiellement défaillant continue de fournir des données exploitables.",
            },
          },
          {
            id: 'relay', label: 'RELAY', sub: 'store & forward',
            x: 356, y: 152, w: 124, h: 46, tone: 'ok',
            note: {
              en: 'Routes vital data through a healthy neighbour when the direct link to ground is unavailable — two to four usable contacts a day is the constraint this exists for.',
              fr: "Achemine les données vitales via un voisin sain lorsque la liaison directe au sol est indisponible — deux à quatre contacts exploitables par jour est la contrainte qui le justifie.",
            },
          },
          {
            id: 'borrow', label: 'BORROW', sub: "neighbour's sensor",
            x: 500, y: 152, w: 160, h: 46, tone: 'ok',
            note: {
              en: 'Bypasses a failed sensor entirely by streaming a neighbouring satellite’s healthy readings in its place, so the spacecraft stays useful instead of being decommissioned.',
              fr: "Contourne entièrement un capteur défaillant en diffusant à sa place les mesures saines d'un satellite voisin, gardant l'engin utile au lieu de le déclasser.",
            },
          },
        ],
        wires: [
          'M158,53 L178,53',
          'M336,53 L356,53',
          'M480,53 L500,53',
          'M580,76 L580,122 L257,122 L257,152',
          'M418,122 L418,152',
          'M580,122 L580,152',
        ],
        flow: 'M158,53 L178,53 M336,53 L356,53 M480,53 L500,53 M580,76 L580,122 L257,122 L257,152',
        callouts: [
          { x: 16, y: 112, text: { en: 'DEGR governs all three services', fr: 'DEGR gouverne les trois services' } },
          { x: 16, y: 232, text: { en: 'FIG. A — DATA PATH, ONE NODE', fr: 'FIG. A — CHEMIN DE DONNÉES, UN NŒUD' } },
        ],
        caption: {
          en: 'Telemetry enters at the left, the detector scores it, and that score becomes the weight every downstream service reads. Current runs the live path: sensors through detection to the state machine, and back down into the three services it governs.',
          fr: "La télémétrie entre à gauche, le détecteur la note, et ce score devient le poids que lit chaque service en aval. Le courant parcourt le chemin actif : des capteurs à la détection puis à la machine à états, et redescend vers les trois services qu'elle gouverne.",
        },
      },
    },
  },
  {
    slug: 'smartshield',
    rank: 4,
    title: {
      en: 'SMARTSHIELD — AI-Driven Cybersecurity Incident Response',
      fr: 'SMARTSHIELD — Réponse aux incidents de cybersécurité basée sur l\'IA',
    },
    period: '09/2024 — 12/2024',
    outcome: {
      en: '2nd Prize at IEEE TSYP 12 (CS Chapter). Real-time threat detection and classification over large volumes of network logs.',
      fr: "2e Prix à l'IEEE TSYP 12 (CS Chapter). Détection et classification de menaces en temps réel sur de grands volumes de journaux réseau.",
    },
    plainly: {
      en: 'Software that watches a network, spots attacks as they happen, sorts them by type, and writes the incident report for the security team automatically.',
      fr: "Un logiciel qui surveille un réseau, repère les attaques en direct, les classe par type et rédige automatiquement le rapport d'incident pour l'équipe sécurité.",
    },
    description: {
      en: 'SMARTSHIELD is an AI-powered platform for automated detection, classification and response to cybersecurity incidents, capable of handling large volumes of network logs. I led the team, focusing on the machine-learning models for real-time threat detection and classification at high accuracy and scale, and built a dashboard that visualizes live threats and surfaces AI-generated reports for each detection.',
      fr: "SMARTSHIELD est une plateforme alimentée par l'IA conçue pour la détection, la classification et la réponse automatiques aux incidents de cybersécurité, capable de gérer de grands volumes de journaux réseau. J'ai dirigé une équipe pour développer cette plateforme, en mettant l'accent sur des modèles de machine learning pour la détection et la classification des menaces en temps réel, garantissant une haute précision et évolutivité. Un tableau de bord convivial visualise les menaces en temps réel et propose des rapports générés par l'IA pour les menaces détectées.",
    },
    tech: ['CatBoost', 'XGBoost', 'FastAPI', 'NestJS', 'React', 'TailwindCSS', 'PostgreSQL', 'Kibana', 'Docker', 'CrewAI', 'RabbitMQ', 'openArgus', 'Zeek'],
    figures: [
      { src: '/assets/images/project/smartshield/image0.png', alt: { en: 'SMARTSHIELD live threat dashboard', fr: 'Tableau de bord des menaces en direct de SMARTSHIELD' } },
      { src: '/assets/images/project/smartshield/image1.png', alt: { en: 'Threat classification and detail view', fr: 'Vue de classification et de détail des menaces' } },
      { src: '/assets/images/project/smartshield/image2.png', alt: { en: 'Network log analysis view', fr: "Vue d'analyse des journaux réseau" } },
      { src: '/assets/images/project/smartshield/image3.png', alt: { en: 'AI-generated incident report', fr: "Rapport d'incident généré par l'IA" } },
    ],
    artifacts: [
      { kind: 'report', href: '/assets/documents/papers/SMARTSHIELDTechPaper.pdf', label: { en: 'Technical paper', fr: 'Article technique' } },
      { kind: 'video', href: 'https://youtu.be/2Nd6C_SpXak', label: { en: 'Demo video', fr: 'Vidéo de démonstration' } },
    ],
    tags: ['award', 'led', 'demo', 'architecture'],
    depth: 'page',
  },
  {
    slug: 'frugal-ai',
    rank: 5,
    title: {
      en: 'Sustainable Deep Learning & Frugal AI Framework',
      fr: "Framework d'Apprentissage Profond Durable et d'IA Frugale",
    },
    period: '11/2025 — 06/2026',
    outcome: {
      en: 'Cut CO₂ emissions by 42.6% with zero accuracy loss, and accelerated training by 33.7%.',
      fr: "Réduction des émissions de CO₂ de 42,6 % sans aucune perte de précision, et accélération de l'entraînement de 33,7 %.",
    },
    plainly: {
      en: 'Training large AI models burns a lot of electricity. This work splits the training across machines and tunes how it runs, so the same model comes out just as accurate for far less energy.',
      fr: "Entraîner de grands modèles d'IA consomme beaucoup d'électricité. Ce travail répartit l'entraînement sur plusieurs machines et optimise son exécution, pour obtenir un modèle aussi précis en consommant bien moins d'énergie.",
    },
    description: {
      en: 'Co-engineered a distributed model-parallel architecture for the Introvert pipeline using PyTorch RPC and Docker, reducing CO₂ emissions by 42.6% with zero accuracy degradation. Implemented an optimization pipeline featuring mixed-precision training (AMP), torch.compile and asynchronous data loading, accelerating training time by 33.7%. Formulated a composite frugality metric based on the Analytic Hierarchy Process (AHP) to evaluate AI deployments across energy, memory, FLOPs and predictive accuracy together.',
      // The old French copy claimed a second figure (83.2%) the English never
      // had. Iyed confirmed 42.6% is correct; the phantom figure is gone.
      fr: "Co-conçu une architecture parallèle distribuée pour le pipeline Introvert en utilisant PyTorch RPC et Docker, réduisant les émissions de CO₂ de 42,6 % sans aucune dégradation de la précision. Implémenté un pipeline d'optimisation avancé comprenant l'entraînement en précision mixte (AMP), torch.compile et le chargement asynchrone des données, accélérant le temps d'entraînement de 33,7 %. Formulé une nouvelle métrique composite de frugalité basée sur le Processus de Hiérarchie Analytique (AHP) pour évaluer de manière complète les déploiements d'IA en termes d'énergie, mémoire, FLOPs et précision prédictive.",
    },
    tech: ['PyTorch', 'Docker', 'Distributed Systems', 'Frugal AI', 'Deep Learning', 'Python'],
    figures: [
      { src: '/assets/images/project/introvert/introvert-0.png', alt: { en: 'Distributed training architecture for the Introvert pipeline', fr: "Architecture d'entraînement distribué du pipeline Introvert" } },
      { src: '/assets/images/project/introvert/introvert-1.png', alt: { en: 'Energy and accuracy comparison across configurations', fr: 'Comparaison énergie / précision entre configurations' } },
    ],
    artifacts: [],
    tags: ['measured', 'research', 'architecture'],
    depth: 'page',
    roleSlug: 'efrei-frugal-ai',
  },
  {
    slug: 'multimodal-rag',
    rank: 3,
    title: {
      en: 'Multimodal RAG Knowledge System',
      fr: 'Système de connaissance RAG multimodal',
    },
    period: '01/2026',
    outcome: {
      en: 'Graph-augmented retrieval across PDF, Word, image and audio, explored through a D3 constellation graph.',
      fr: 'Recherche augmentée par graphe sur PDF, Word, images et audio, explorée via un graphe-constellation D3.',
    },
    plainly: {
      en: 'A tool that reads everything you throw at it — documents, images, recordings — and lets you ask questions in plain language, showing how the answers connect as a map of stars.',
      fr: "Un outil qui lit tout ce que vous lui donnez — documents, images, enregistrements — et vous laisse poser des questions en langage courant, en montrant les liens entre les réponses sous forme de carte d'étoiles.",
    },
    description: {
      en: 'Built a modular RAG system helping users sort, organize and access files across multiple formats (PDF, Word, images, audio) through graph-augmented retrieval and cloud file watching. Constructed a FastAPI backend with Qdrant vector search, PostgreSQL and Redis, paired with a D3-powered constellation-graph UI for interactive knowledge exploration.',
      fr: "Développement d'un système RAG modulaire aidant les utilisateurs à trier, organiser et accéder à des fichiers de formats variés (PDF, Word, images, audio) grâce à une recherche augmentée par graphe et une surveillance de fichiers dans le cloud. Backend FastAPI avec recherche vectorielle Qdrant, PostgreSQL et Redis, associé à une interface de graphe-constellation propulsée par D3 pour une exploration interactive des connaissances.",
    },
    tech: ['FastAPI', 'Qdrant', 'PostgreSQL', 'Redis', 'D3.js', 'RAG', 'Python'],
    figures: [
      {
        src: '/assets/images/project/multimodal-rag/graph-explorer.png',
        alt: {
          en: 'The constellation graph explorer: a force-directed graph of ingested files with a file tree on the left and a per-file detail panel on the right, over a semantic search bar',
          fr: "L'explorateur en graphe-constellation : un graphe à forces des fichiers indexés, avec l'arborescence à gauche et un panneau de détail par fichier à droite, au-dessus d'une barre de recherche sémantique",
        },
      },
    ],
    artifacts: [],
    tags: ['architecture', 'interface'],
    depth: 'page',
  },
  {
    slug: 'industrial-energy-platform',
    rank: 6,
    title: {
      en: 'Industrial Energy Intelligence Platform',
      fr: "Plateforme d'intelligence énergétique industrielle",
    },
    period: '05/2026',
    outcome: {
      en: '1st Prize and Best Art Award at National Re·Tech Fusion, on a real industrial challenge from Kilani Group.',
      fr: "1er Prix et Best Art Award au National Re·Tech Fusion, sur un défi industriel réel de Kilani Group.",
    },
    plainly: {
      en: 'Sensors on factory equipment feed a system that shows where electricity is actually going, so a plant can cut the waste it could not previously see.',
      fr: "Des capteurs sur les équipements alimentent un système qui montre où part réellement l'électricité, permettant à l'usine de réduire un gaspillage jusque-là invisible.",
    },
    description: {
      en: 'Built for the National Re·Tech Fusion competition around a real industrial challenge set by Kilani Group: an industrial energy intelligence platform combining IoT, edge computing and data analytics to monitor and optimize factory energy consumption.',
      fr: "Développée pour le concours National Re·Tech Fusion autour d'un défi industriel réel posé par Kilani Group : une plateforme d'intelligence énergétique industrielle combinant IoT, edge computing et analyse de données pour surveiller et optimiser la consommation énergétique des usines.",
    },
    tech: ['ESP32', 'TensorFlow Lite', 'Embedded ML', 'MQTT', 'C++', 'Python', 'IoT', 'Edge Computing'],
    figures: [
      {
        src: '/assets/images/placeholder/industrial-energy.svg',
        placeholder: true,
        alt: {
          en: 'Placeholder — screenshots of the energy platform are pending',
          fr: "Espace réservé — les captures de la plateforme énergétique sont à venir",
        },
      },
    ],
    artifacts: [
      {
        kind: 'report',
        href: '/assets/documents/reports/nrtf-part3a-edge-intelligence.pdf',
        label: { en: 'Part 3A — Edge Intelligence report', fr: 'Partie 3A — Rapport Edge Intelligence' },
      },
    ],
    tags: ['award', 'measured', 'hardware', 'architecture'],
    depth: 'page',
    detail: {
      pullQuote: {
        en: 'On-device anomaly detection. No cloud required.',
        fr: "Détection d'anomalies embarquée. Aucun cloud requis.",
      },
      context: {
        en: [
          'A real industrial challenge set by Kilani Group: monitor and cut a factory’s energy consumption. The obvious architecture streams every sensor reading to a server and decides there — which means the factory floor stops being able to detect its own faults the moment the network does.',
          'So the detection was pushed onto the hardware. A quantised neural network runs on the ESP32 node itself, inspecting readings every ten seconds and flagging abnormal ones before they are ever published to the MQTT broker. No server contact is required for a fault to be caught.',
        ],
        fr: [
          "Un défi industriel réel posé par le groupe Kilani : surveiller et réduire la consommation énergétique d'une usine. L'architecture évidente transmet chaque relevé de capteur à un serveur qui décide — ce qui prive l'atelier de toute capacité de détection dès que le réseau tombe.",
          "La détection a donc été déportée sur le matériel. Un réseau de neurones quantifié s'exécute sur le nœud ESP32 lui-même, inspecte les relevés toutes les dix secondes et signale les valeurs anormales avant même leur publication sur le broker MQTT. Aucun contact serveur n'est nécessaire pour détecter une panne.",
        ],
      },
      approach: {
        en: [
          'A sliding-window next-step predictor: the model takes the last five readings across all five sensor channels and predicts what each channel should read next. Input(25) → Dense(16, ReLU) → Dense(8, ReLU) → Dense(5, Sigmoid), roughly 597 parameters.',
          'Detection is fully unsupervised — the network is trained only on normal operation and never sees a labelled anomaly. A fault is caught because the model cannot predict it: when the worst channel’s normalised error exceeds 0.15, the reading is flagged and that channel is named as the culprit.',
          'One multi-output model rather than five separate detectors. It catches compound faults in a single inference call, exploits cross-sensor correlation — the two temperature probes normally track each other, so a divergence is caught even when neither channel looks bad alone — and takes about a fifth of the on-device footprint.',
          'Training data was recorded live from the hardware over the hackathon LAN: 128 rows of normal operation at a ten-second interval. Thirty labelled fault rows were generated separately and held out entirely for validation.',
        ],
        fr: [
          "Un prédicteur du pas suivant à fenêtre glissante : le modèle prend les cinq derniers relevés des cinq canaux de capteurs et prédit la valeur attendue de chaque canal. Input(25) → Dense(16, ReLU) → Dense(8, ReLU) → Dense(5, Sigmoid), environ 597 paramètres.",
          "La détection est entièrement non supervisée — le réseau n'est entraîné que sur le fonctionnement normal et ne voit jamais d'anomalie étiquetée. Une panne est détectée parce que le modèle ne parvient pas à la prédire : lorsque l'erreur normalisée du pire canal dépasse 0,15, le relevé est signalé et le canal fautif est désigné.",
          "Un seul modèle multi-sorties plutôt que cinq détecteurs séparés. Il détecte les pannes composées en une seule inférence, exploite les corrélations entre capteurs — les deux sondes de température évoluent normalement de concert, si bien qu'une divergence est détectée même quand aucun canal ne paraît anormal isolément — et occupe environ un cinquième de l'empreinte embarquée.",
          "Les données d'entraînement ont été enregistrées en direct depuis le matériel sur le réseau local du hackathon : 128 lignes de fonctionnement normal à un intervalle de dix secondes. Trente lignes de panne étiquetées ont été générées séparément et réservées exclusivement à la validation.",
        ],
      },
      metrics: [
        { key: { en: 'Model size, quantised', fr: 'Taille du modèle, quantifié' }, value: '4.52', unit: 'KB' },
        { key: { en: 'Parameters', fr: 'Paramètres' }, value: '~597' },
        { key: { en: 'On-device inference', fr: 'Inférence embarquée' }, value: '<10', unit: 'ms' },
        { key: { en: 'Fault types detected', fr: 'Types de pannes détectés' }, value: '6/6', tone: 'ok' },
        { key: { en: 'ESP32 flash used', fr: 'Flash ESP32 utilisée' }, value: '61.3', unit: '%' },
        { key: { en: 'ESP32 RAM used', fr: 'RAM ESP32 utilisée' }, value: '34.0', unit: '%' },
      ],
      role: {
        en: 'Built the edge intelligence layer: the sliding-window predictor, its training and TFLite quantisation, the anomaly-detection logic, and the firmware integration that compiles the model constants directly into the ESP32 binary — no SD card, no network dependency.',
        fr: "Développement de la couche d'intelligence embarquée : le prédicteur à fenêtre glissante, son entraînement et sa quantification TFLite, la logique de détection d'anomalies, et l'intégration firmware qui compile les constantes du modèle directement dans le binaire ESP32 — sans carte SD ni dépendance réseau.",
      },
      schematic: {
        viewBox: '0 0 740 240',
        nodes: [
          {
            id: 'sensors', label: '5 CHANNELS', sub: 'DS18B20 · BMP280 · ACS712',
            x: 16, y: 28, w: 172, h: 48,
            note: {
              en: 'Two temperature probes, pressure, humidity and current — sampled every ten seconds on the factory floor.',
              fr: 'Deux sondes de température, pression, humidité et courant — échantillonnés toutes les dix secondes en atelier.',
            },
          },
          {
            id: 'window', label: 'SLIDING WINDOW', sub: '5 steps × 5 channels',
            x: 212, y: 28, w: 158, h: 48,
            note: {
              en: 'The last five readings across all five channels become one 25-value input. The model predicts what should come next.',
              fr: 'Les cinq derniers relevés des cinq canaux forment une entrée de 25 valeurs. Le modèle prédit la valeur attendue ensuite.',
            },
          },
          {
            id: 'mlp', label: '25 → 16 → 8 → 5', sub: '~597 params · 4.52 KB',
            x: 394, y: 28, w: 160, h: 48,
            note: {
              en: 'A quantised MLP compiled into the ESP32 binary itself — no SD card, no network. Trained only on normal operation, so it has never seen a fault.',
              fr: "Un MLP quantifié compilé dans le binaire ESP32 lui-même — sans carte SD ni réseau. Entraîné uniquement sur le fonctionnement normal, il n'a jamais vu de panne.",
            },
          },
          {
            id: 'error', label: 'max |err| > 0.15', sub: 'normalised',
            x: 578, y: 28, w: 146, h: 48, tone: 'warn',
            note: {
              en: 'A fault is caught precisely because the model cannot predict it. The worst channel names the failing sensor.',
              fr: "Une panne est détectée précisément parce que le modèle ne peut pas la prédire. Le pire canal désigne le capteur défaillant.",
            },
          },
          {
            id: 'ok', label: 'PUBLISH', sub: 'MQTT broker',
            x: 394, y: 150, w: 160, h: 46, tone: 'ok',
            note: {
              en: 'Normal readings go to the broker as usual. Nothing leaves the device before it has been checked.',
              fr: 'Les relevés normaux partent vers le broker comme prévu. Rien ne quitte le nœud avant vérification.',
            },
          },
          {
            id: 'flag', label: 'ANOMALY', sub: 'flagged on device',
            x: 578, y: 150, w: 146, h: 46, tone: 'crit',
            note: {
              en: 'Flagged locally, in under 10 ms, with no server contact — which is the whole point: the floor keeps detecting faults when the network does not.',
              fr: "Signalé localement, en moins de 10 ms, sans contact serveur — c'est tout l'intérêt : l'atelier continue de détecter les pannes même quand le réseau tombe.",
            },
          },
        ],
        wires: [
          'M188,52 L212,52',
          'M370,52 L394,52',
          'M554,52 L578,52',
          'M651,76 L651,150',
          'M651,112 L474,112 L474,150',
        ],
        flow: 'M188,52 L212,52 M370,52 L394,52 M554,52 L578,52 M651,76 L651,112 L474,112 L474,150',
        callouts: [
          { x: 16, y: 118, text: { en: 'EVERY 10 s · ON DEVICE · NO CLOUD', fr: 'TOUTES LES 10 s · EMBARQUÉ · SANS CLOUD' } },
          { x: 16, y: 230, text: { en: 'FIG. A — DETECTION LOOP', fr: 'FIG. A — BOUCLE DE DÉTECTION' } },
        ],
        caption: {
          en: 'The loop that runs on the microcontroller itself. Readings become a window, the window becomes a prediction, and the gap between prediction and reality decides whether the data is published or flagged — all before anything reaches the network.',
          fr: "La boucle qui s'exécute sur le microcontrôleur lui-même. Les relevés forment une fenêtre, la fenêtre produit une prédiction, et l'écart entre prédiction et réalité décide si la donnée est publiée ou signalée — le tout avant d'atteindre le réseau.",
        },
      },
    },
  },
  {
    slug: 'ai-3d-packing',
    rank: 7,
    title: {
      en: 'AI-Powered 3D Packing Software',
      fr: "Logiciel d'optimisation d'emballage 3D basé sur l'IA",
    },
    outcome: {
      en: 'Deep reinforcement learning that packs 3D boxes into containers for measurable volume and cost savings.',
      fr: "Apprentissage par renforcement profond qui emballe des boîtes 3D dans des conteneurs, pour des économies mesurables de volume et de coûts.",
    },
    plainly: {
      en: 'Given a pile of boxes and a shipping container, it works out the arrangement that wastes the least space — the way an expert packer would, but automatically.',
      fr: "À partir d'un ensemble de cartons et d'un conteneur, il détermine l'agencement qui gaspille le moins d'espace — comme le ferait un emballeur expert, mais automatiquement.",
    },
    description: {
      en: 'This project delivers substantial volume and cost savings by efficiently packing 3D boxes within containers. It ensures optimal space utilization and minimizes waste, offering a solution for logistics, warehousing and shipping challenges.',
      fr: "Ce projet permet des économies substantielles de volume et de coûts en emballant efficacement des boîtes 3D dans des conteneurs. Il assure une utilisation optimale de l'espace et minimise les déchets, offrant une solution puissante aux défis de logistique, d'entreposage et d'expédition.",
    },
    tech: ['Deep Reinforcement Learning', 'React.js', 'Three.js', 'Django', 'TailwindCSS', 'Dynamic Programming'],
    figures: [
      { src: '/assets/images/project/3dpack/3dpack.mp4', alt: { en: 'The packing algorithm arranging boxes inside a container in 3D', fr: "L'algorithme d'emballage disposant des boîtes dans un conteneur en 3D" } },
    ],
    artifacts: [
      { kind: 'video', href: 'https://youtu.be/WB1j8iTJYVE', label: { en: 'Demo video', fr: 'Vidéo de démonstration' } },
      { kind: 'letter', href: '/assets/documents/reports/Pixemantic.pdf', label: { en: 'Recommendation letter', fr: 'Lettre de recommandation' } },
    ],
    tags: ['demo', 'research'],
    depth: 'card',
    roleSlug: 'pixemantic',
  },
  {
    slug: 'messaging-app',
    rank: 8,
    title: {
      en: 'Real-Time Messaging Web App',
      fr: 'Application de messagerie web temps réel',
    },
    outcome: {
      en: 'Built from scratch during the PROXYM internship: real-time delivery, group communication and authentication on the MERN stack.',
      fr: "Développée de zéro pendant le stage chez PROXYM : distribution en temps réel, communication de groupe et authentification sur la pile MERN.",
    },
    plainly: {
      en: 'A chat application where messages arrive instantly, groups work properly, and accounts stay secure as more people join.',
      fr: "Une application de discussion où les messages arrivent instantanément, les groupes fonctionnent correctement et les comptes restent sécurisés à mesure que le nombre d'utilisateurs augmente.",
    },
    description: {
      en: 'Developed during my internship at Proxym-IT. The app offers seamless real-time communication, handles scalability so performance holds as users and messages grow, and prioritizes security through robust authentication. It also provides group communication features and customizable user experiences.',
      fr: "Ce projet a été développé lors de mon stage chez Proxym-IT. Cette application de messagerie est conçue pour offrir une communication en temps réel fluide, éliminant les délais et améliorant l'expérience utilisateur. Elle gère efficacement les problèmes d'évolutivité, garantissant des performances fiables même avec un nombre croissant d'utilisateurs et de messages. L'application priorise la sécurité grâce à des mesures d'authentification utilisateur robustes, protégeant les données et la vie privée des utilisateurs. De plus, elle offre des fonctionnalités complètes de communication de groupe et des expériences utilisateur personnalisables.",
    },
    tech: ['React.js', 'Express.js', 'MongoDB', 'Socket.io', 'TailwindCSS', 'Node.js'],
    figures: [
      { src: '/assets/images/project/messenger/messenger-0.png', alt: { en: 'Messaging app conversation view', fr: 'Vue de conversation de la messagerie' } },
      { src: '/assets/images/project/messenger/messenger-1.png', alt: { en: 'Group communication view', fr: 'Vue de communication de groupe' } },
      { src: '/assets/images/project/messenger/messenger-2.png', alt: { en: 'Contacts and channel list', fr: 'Liste des contacts et des canaux' } },
      { src: '/assets/images/project/messenger/messenger-3.png', alt: { en: 'Authentication screen', fr: "Écran d'authentification" } },
      { src: '/assets/images/project/messenger/messenger-4.png', alt: { en: 'User settings view', fr: 'Vue des paramètres utilisateur' } },
    ],
    artifacts: [
      { kind: 'report', href: '/assets/documents/reports/Proxym.pdf', label: { en: 'Internship report', fr: 'Rapport de stage' } },
    ],
    tags: ['interface'],
    depth: 'card',
    roleSlug: 'proxym',
  },
  {
    slug: 'school-management-system',
    rank: 9,
    title: {
      en: 'School Management System',
      fr: 'Plateforme universitaire',
    },
    outcome: {
      en: 'Schedules, attendance, exams and enrollment across three tailored interfaces for students, teachers and administrators.',
      fr: "Horaires, présence, examens et inscriptions à travers trois interfaces dédiées aux étudiants, enseignants et administrateurs.",
    },
    plainly: {
      en: 'The administrative back office of a school, on the web: timetables, attendance registers, exam records and enrollment requests, each role seeing only what it needs.',
      fr: "Le back-office administratif d'un établissement, sur le web : emplois du temps, registres de présence, dossiers d'examens et demandes d'inscription, chaque rôle ne voyant que ce qui le concerne.",
    },
    description: {
      en: 'A web platform for managing schedules, attendance, exam details and enrollment requests within a school environment, providing separate interfaces for students, teachers and administrators, each tailored to their needs.',
      fr: "Le système de gestion scolaire est une plateforme web conçue pour faciliter la gestion des horaires, de la présence, des détails des examens et des demandes d'inscription dans un environnement scolaire. Elle offre des interfaces distinctes pour les étudiants, les enseignants et les administrateurs, chacune adaptée à leurs besoins spécifiques.",
    },
    // The linked repository is the Symfony version; the tag list says so.
    tech: ['PHP', 'Symfony', 'JavaScript', 'Chart.js', 'HTML', 'CSS'],
    figures: [
      { src: '/assets/images/project/edplatform/platform-0.png', alt: { en: 'School management dashboard', fr: 'Tableau de bord de gestion scolaire' } },
      { src: '/assets/images/project/edplatform/platform-1.png', alt: { en: 'Schedule and attendance view', fr: 'Vue des horaires et de la présence' } },
      { src: '/assets/images/project/edplatform/platform-2.png', alt: { en: 'Administrator interface', fr: "Interface administrateur" } },
    ],
    artifacts: [
      {
        kind: 'repo',
        href: 'https://github.com/iyedmdimegh/UniversityManagementSystem-symfonyVersion',
        label: { en: 'Source on GitHub', fr: 'Code source sur GitHub' },
      },
    ],
    tags: [],
    depth: 'earlier',
  },
];

export const featuredProjects = projects.filter((p) => p.rank <= 4);

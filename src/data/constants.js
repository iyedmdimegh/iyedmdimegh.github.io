import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const name = "Portfolio"
export const description = "A simple portfolio website"
export const BASE_URL = "https://iyedmdimegh.github.io/newportfolio/"
export const pfp = "/assets/images/pfp/pfp.jpg"
export const RESUME_ENDPOINT = "resume.pdf"
// English pack 

export const projects = [
  {
    "id": 1,
    "title": "AI-Powered 3D Packing Software",
    "description": "This Project delivers substantial volume and cost savings by efficiently packing 3D boxes within containers. It ensures optimal space utilization and minimizes waste, offering a powerful solution for logistics, warehousing, and shipping challenges. Experience precision and efficiency with our advanced packing algorithms.",
    "images": ["/assets/images/project/3dpack/3dPackGif.gif"],
    "technologies": ["Deep Reinforcement Learning", "React.js", "Three.js", "Django", "TailwindCSS", "Dynamic Programming"],
    "youtubeLink": "https://youtu.be/WB1j8iTJYVE",
    "githubLink": "",
    "documentLink": `${BASE_URL}assets/documents/reports/Pixemantic.pdf`
  },
  {
    "id": 2,
    "title": "SMARTSHIELD - AI-Driven Cybersecurity Incident Response Platform",
    "description": "SMARTSHIELD is an AI-powered platform designed for automated detection, classification, and response to cybersecurity incidents, capable of handling large volumes of network logs. Led a team in developing the platform, focusing on machine learning models for real-time threat detection and classification, ensuring high accuracy and scalability. Developed a user-friendly dashboard that visualizes real-time threats and provides an option to view AI-generated reports for detected threats.",
    "images": ["/assets/images/project/smartshield/image0.png","/assets/images/project/smartshield/image1.png", "/assets/images/project/smartshield/image2.png", "/assets/images/project/smartshield/image3.png"],
    "technologies": ["CatBoost", "XGBoost", "FastAPI", "NestJS", "React", "TailwindCSS", "PostgreSQL", "Kibana", "Docker", "CrewAI", "RabbitMQ", "openArgus", "Zeek"],
    "youtubeLink": "https://youtu.be/2Nd6C_SpXak",
    "githubLink": "",
    "documentLink": `${BASE_URL}assets/documents/papers/SMARTSHIELDTechPaper.pdf`
  },
  {
    "id": 3,
    "title": "INSAT Chess Coach Robot",
    "description": "Led a team to develop the INSAT Chess Coach Robot, an interactive robotic chess system designed for the TSYP contest. The project integrates computer vision, a robotic arm, and an adaptive chess engine to offer a unique learning experience. Key features include physical piece manipulation, skill-matched gameplay, real-time feedback, and educational modes, all while using standard chess equipment. This innovative system bridges the gap between digital and physical chess learning.",
    "images": ["/assets/images/project/chessCoach/image0.png", "/assets/images/project/chessCoach/image2.png", "/assets/images/project/chessCoach/image3.png"],
    "technologies": ["Stockfish", "Raspberry Pi 4", "Arduino", "YOLOv8", "Computer Vision"],
    "youtubeLink": "",
    "githubLink": "",
    "documentLink": `${BASE_URL}assets/documents/papers/chessTechnicalPaper.pdf`
  },
  {
    "id": 4,
    "title": "Messaging Web App",
    "description": "This project was developed during my internship at Proxym-IT. This messaging App is designed to offer seamless real-time communication, eliminating delays and enhancing the user experience. It efficiently handles scalability issues, ensuring reliable performance even with a growing number of users and messages. The app prioritizes security with robust user authentication measures, protecting user data and privacy. Additionally, it provides comprehensive group communication features and customizable user experiences to meet diverse needs.",
    "images": ["/assets/images/project/messenger/messenger-0.png", "/assets/images/project/messenger/messenger-1.png", "/assets/images/project/messenger/messenger-2.png", "/assets/images/project/messenger/messenger-3.png", "/assets/images/project/messenger/messenger-4.png"],
    "technologies": ["React.js", "Express.js", "MongoDB", "Socket.io", "TailwindCSS", "Node.js", "Postman", "MUI-icons"],
    "youtubeLink": "",
    "githubLink": "",
    "documentLink": `${BASE_URL}assets/documents/reports/Proxym.pdf`
  },
  {
    "id": 6,
    "title": "University platform",
    "description": "School Management System is a web platform designed to facilitate the management of schedules, attendance, exam details, and enrollment requests within a school environment. It provides separate interfaces for students, teachers, and administrators, each tailored to their specific needs.",
    "images": ["/assets/images/project/edplatform/platform-0.png", "/assets/images/project/edplatform/platform-1.png", "/assets/images/project/edplatform/platform-2.png"],
    "technologies": ["Javascript", "PHP", "Chart.js", "HTML", "CSS"],
    "youtubeLink": "",
    "githubLink": "https://github.com/iyedmdimegh/UniversityManagementSystem-symfonyVersion",
    "documentLink": ""
  },
  {
    "id": 7,
    "title": "Java E-commerce application",
    "description": "Java E-commerce application is a project that manages a business's products, handling both admin and client services.",
    "images": ["/assets/images/project/java/java-1.jpg"],
    "technologies": ["Java", "Java POO"],
    "youtubeLink": "",
    "githubLink": "",
    "documentLink": ""
  }
]


export const recentUpdates = [
  {
    id: 1,
    image: "/assets/images/updates/vctaPic.jpg",
    title: "I am currently Vice Chair, Technical Activities at IEEE INSAT Computer Society Chapter",
    description: "As Vice Chair and responsable for Technical Activities, I lead and manage innovative technical projects, develop the annual plan, and organize impactful workshops to enhance the skills and learning opportunities of our 250+ members."
  },
  {
    id: 2,
    image: "/assets/images/updates/AINS-HACK.jpg",
    title: "3rd Place at AINS HACKATHON (Artificial Intelligence National Summit)",
    description: "Our team competed against 20 others with a project focused on AI agents, earning us the 3rd prize."
  },
  {
    id: 3,
    image: "/assets/images/updates/project-image01.jpg",
    title: "1st prize at Enicar Coding Arena - Competitive Programming Contest",
    description: "Along with my team I competed at a Competitive Programming Contest and solved the greatest number of problems."
  },
  {
    id: 4,
    image: "/assets/images/updates/hackathon.jpg",
    title: `Organizing Commitee President of the Hackathon "Hack for good 2.0"`,
    description: "Along with team I organized a hackathon that held 140 participants and attracted many students across the country to contribute to this event with outstanding projects."
  },

];

export const skillCategories = {
    webDevelopment: {
      title: "web development",
      skills: ["HTML", "CSS", "Bootstrap", "TailwindCSS", "JavaScript", "React.js", "Node.js", "Express.js", "PHP", "Symfony", "Java", "MongoDB", "PostgreSQL", "Oracle SQL"],
      bgColor: "from-purple-900 to-red-800"
    },
    ai: {
      title: "AI",
      skills: ["Deep Reinforcement Learning", "Python", "Tensorflow", "Keras", "XGBoost", "Django", "Scilearn", "Pandas", "Numpy", "Computer Vision"],
      bgColor: "from-teal-600 to-teal-900"
    },
    other: {
      title: "other",
      skills: ["Git", "GitHub", "Linux", "C++", "C", "Assembly", "VSCode"],
      bgColor: "from-slate-600 to-slate-800"
    }
  };

export const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub className="w-6 h-6 sm:w-8 sm:h-8" />,
      url: 'https://github.com/iyedmdimegh',
      color: 'hover:text-gray-700 dark:hover:text-gray-300',
      description: 'my projects and contributions'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="w-6 h-6 sm:w-8 sm:h-8" />,
      url: 'https://www.linkedin.com/in/iyed-mdimegh-21b1b5285/',
      color: 'hover:text-blue-600 dark:hover:text-blue-400',
      description: 'Connect with me'
    },
    {
      name: 'Email',
      icon: <FaEnvelope className="w-6 h-6 sm:w-8 sm:h-8" />,
      url: 'mailto:iyedmdimegh@gmail.com',
      color: 'hover:text-red-600 dark:hover:text-red-400',
      description: 'Drop me a message'
    }
  ];


export const about_components_content = {
  welcome: "Welcome to my portfolio website!",
  hello: "Hello, I'm",
  animated1: "Iyed Mdimegh",
  animated2: "Software Engineering Student",
  animated3: "AI enthusiast",
  download: "Download Resume",
  pfp : "/assets/images/pfp/pfp.jpg"
}



export const header_component_content = {
  navItems : ['About', 'Projects', 'Resume', 'Connect'],
}

export const projects_component_content = {
  myProjects: "My Projects",
}


export const skills_component_content = {
  skills: "Skills",
}
export const recentUpdates_component_content = {
  recentUpdates: "Recent Updates",
}

export const connect_component_content = {
  title: "Let's Connect",
  description1: "I'm always open to new opportunities and collaborations.",
  description2: "Feel free to reach out!",
}

export const footer_component_content = {
  allRightsReserved: "Iyed Mdimegh. All rights reserved.",
  about : "About",
  projects : "Projects",
  skills : "Skills",
  recentUpdates : "Recent Updates",

}



// French pack 

export const projects_french = [
  {
    "id": 1,
    "title": "Logiciel d'optimisation d'emballage 3D basé sur l'IA",
    "description": "Ce projet permet des économies substantielles de volume et de coûts en emballant efficacement des boîtes 3D dans des conteneurs. Il assure une utilisation optimale de l'espace et minimise les déchets, offrant une solution puissante aux défis de logistique, d'entreposage et d'expédition. Découvrez la précision et l'efficacité de nos algorithmes d'emballage avancés.",
    "images": ["/assets/images/project/3dpack/3dPackGif.gif"],
    "technologies": ["Apprentissage par renforcement profond", "React.js", "Three.js", "Django", "TailwindCSS", "Programmation dynamique"],
    "youtubeLink": "https://youtu.be/WB1j8iTJYVE",
    "githubLink": "",
    "documentLink": `${BASE_URL}assets/documents/reports/Pixemantic.pdf`
  },
  {
    "id": 2,
    "title": "SMARTSHIELD - Plateforme de réponse aux incidents de cybersécurité basée sur l'IA",
    "description": "SMARTSHIELD est une plateforme alimentée par l'IA conçue pour la détection, la classification et la réponse automatiques aux incidents de cybersécurité, capable de gérer de grands volumes de journaux réseau. J'ai dirigé une équipe pour développer cette plateforme, en mettant l'accent sur des modèles de machine learning pour la détection et la classification des menaces en temps réel, garantissant une haute précision et évolutivité. Un tableau de bord convivial visualise les menaces en temps réel et propose des rapports générés par l'IA pour les menaces détectées.",
    "images": ["/assets/images/project/smartshield/image0.png","/assets/images/project/smartshield/image1.png", "/assets/images/project/smartshield/image2.png", "/assets/images/project/smartshield/image3.png"],
    "technologies": ["CatBoost", "XGBoost", "FastAPI", "NestJS", "React", "TailwindCSS", "PostgreSQL", "Kibana", "Docker", "CrewAI", "RabbitMQ", "openArgus", "Zeek"],
    "youtubeLink": "https://youtu.be/2Nd6C_SpXak",
    "githubLink": "",
    "documentLink": `${BASE_URL}assets/documents/papers/SMARTSHIELDTechPaper.pdf`
  },
  {
    "id": 3,
    "title": "Robot entraîneur d'échecs INSAT",
    "description": "J'ai dirigé une équipe pour développer le Robot entraîneur d'échecs INSAT, un système d'échecs robotique interactif conçu pour le concours TSYP. Le projet intègre une vision par ordinateur, un bras robotique et un moteur d'échecs adaptatif pour offrir une expérience d'apprentissage unique. Les principales caractéristiques incluent la manipulation physique des pièces, un gameplay adapté au niveau de compétence, des retours en temps réel et des modes éducatifs, tout en utilisant un équipement d'échecs standard. Ce système innovant comble le fossé entre l'apprentissage des échecs numérique et physique.",
    "images": ["/assets/images/project/chessCoach/image0.png", "/assets/images/project/chessCoach/image2.png", "/assets/images/project/chessCoach/image3.png"],
    "technologies": ["Stockfish", "Raspberry Pi 4", "Arduino", "YOLOv8", "Vision par ordinateur"],
    "youtubeLink": "",
    "githubLink": "",
    "documentLink": `${BASE_URL}assets/documents/papers/chessTechnicalPaper.pdf`
  },
  {
    "id": 4,
    "title": "Application de messagerie web",
    "description": "Ce projet a été développé lors de mon stage chez Proxym-IT. Cette application de messagerie est conçue pour offrir une communication en temps réel fluide, éliminant les délais et améliorant l'expérience utilisateur. Elle gère efficacement les problèmes d'évolutivité, garantissant des performances fiables même avec un nombre croissant d'utilisateurs et de messages. L'application priorise la sécurité grâce à des mesures d'authentification utilisateur robustes, protégeant les données et la vie privée des utilisateurs. De plus, elle offre des fonctionnalités complètes de communication de groupe et des expériences utilisateur personnalisables pour répondre à des besoins diversifiés.",
    "images": ["/assets/images/project/messenger/messenger-0.png", "/assets/images/project/messenger/messenger-1.png", "/assets/images/project/messenger/messenger-2.png", "/assets/images/project/messenger/messenger-3.png", "/assets/images/project/messenger/messenger-4.png"],
    "technologies": ["React.js", "Express.js", "MongoDB", "Socket.io", "TailwindCSS", "Node.js", "Postman", "MUI-icons"],
    "youtubeLink": "",
    "githubLink": "",
    "documentLink": `${BASE_URL}assets/documents/reports/Proxym.pdf`
  },
  {
    "id": 6,
    "title": "Plateforme universitaire",
    "description": "Le système de gestion scolaire est une plateforme web conçue pour faciliter la gestion des horaires, de la présence, des détails des examens et des demandes d'inscription dans un environnement scolaire. Elle offre des interfaces distinctes pour les étudiants, les enseignants et les administrateurs, chacune adaptée à leurs besoins spécifiques.",
    "images": ["/assets/images/project/edplatform/platform-0.png", "/assets/images/project/edplatform/platform-1.png", "/assets/images/project/edplatform/platform-2.png"],
    "technologies": ["Javascript", "PHP", "Chart.js", "HTML", "CSS"],
    "youtubeLink": "",
    "githubLink": "https://github.com/iyedmdimegh/UniversityManagementSystem-symfonyVersion",
    "documentLink": ""
  },
  {
    "id": 7,
    "title": "Application e-commerce Java",
    "description": "L'application e-commerce Java est un projet qui gère les produits d'une entreprise, en traitant à la fois les services administratifs et client.",
    "images": ["/assets/images/project/java/java-1.jpg"],
    "technologies": ["Java", "Java POO"],
    "youtubeLink": "",
    "githubLink": "",
    "documentLink": ""
  }
];

export const recentUpdates_french = [
  {
    id: 1,
    image: "/assets/images/updates/vctaPic.jpg",
    title: "Je suis actuellement Vice-Président, Activités Techniques au IEEE INSAT Computer Society Chapter",
    description: "En tant que Vice-Président et responsable des Activités Techniques, je dirige et gère des projets techniques innovants, développe le plan annuel et organise des ateliers impactants pour améliorer les compétences et les opportunités d'apprentissage de nos 250+ membres."
  },
  {
    id: 2,
    image: "/assets/images/updates/AINS-HACK.jpg",
    title: "3ème place au HACKATHON AINS (Sommet National d'Intelligence Artificielle)",
    description: "Notre équipe a affronté 20 autres avec un projet axé sur les agents IA, nous valant le 3ème prix."
  },
  {
    id: 3,
    image: "/assets/images/updates/project-image01.jpg",
    title: "1er prix au Enicar Coding Arena - Concours de Programmation Compétitive",
    description: "Avec mon équipe, j'ai participé à un concours de programmation compétitive et résolu le plus grand nombre de problèmes."
  },
  {
    id: 4,
    image: "/assets/images/updates/hackathon.jpg",
    title: `Président du Comité Organisateur du Hackathon \"Hack for good 2.0\"`,
    description: "Avec mon équipe, j'ai organisé un hackathon qui a rassemblé 140 participants et attiré de nombreux étudiants à travers le pays pour contribuer à cet événement avec des projets exceptionnels."
  }
];

export const skillCategories_french = {
    webDevelopment: {
      title: "Développement web",
      skills: ["HTML", "CSS", "Bootstrap", "TailwindCSS", "JavaScript", "React.js", "Node.js", "Express.js", "PHP", "Symfony", "Java", "MongoDB", "PostgreSQL", "Oracle SQL"],
      bgColor: "from-purple-900 to-red-800"
    },
    ai: {
      title: "IA",
      skills: ["Apprentissage par renforcement profond", "Python", "Tensorflow", "Keras", "XGBoost", "Django", "Scilearn", "Pandas", "Numpy", "Vision par ordinateur"],
      bgColor: "from-teal-600 to-teal-900"
    },
    other: {
      title: "autres",
      skills: ["Git", "GitHub", "Linux", "C++", "C", "Assembly", "VSCode"],
      bgColor: "from-slate-600 to-slate-800"
    }
  };

export const socialLinks_french = [
    {
      name: 'GitHub',
      icon: <FaGithub className="w-6 h-6 sm:w-8 sm:h-8" />,
      url: 'https://github.com/iyedmdimegh',
      color: 'hover:text-gray-700 dark:hover:text-gray-300',
      description: 'mes projets et contributions'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="w-6 h-6 sm:w-8 sm:h-8" />,
      url: 'https://www.linkedin.com/in/iyed-mdimegh-21b1b5285/',
      color: 'hover:text-blue-600 dark:hover:text-blue-400',
      description: 'Connectez-vous avec moi'
    },
    {
      name: 'Email',
      icon: <FaEnvelope className="w-6 h-6 sm:w-8 sm:h-8" />,
      url: 'mailto:iyedmdimegh@gmail.com',
      color: 'hover:text-red-600 dark:hover:text-red-400',
      description: 'Envoyez-moi un message'
    }
  ];

export const about_components_content_french = {
  welcome: "Bienvenue sur mon site portfolio !",
  hello: "Bonjour, je suis",
  animated1: "Iyed Mdimegh",
  animated2: "Étudiant en ingénierie logicielle",
  animated3: "Passionné d'IA",
  download: "Télécharger le CV",
  pfp : "/assets/images/pfp/pfp.jpg"
};

export const header_component_content_french = {
  navItems : ['À propos', 'Projets', 'CV', 'Contact'],
};

export const projects_component_content_french = {
  myProjects: "Mes Projets",
};

export const skills_component_content_french = {
  skills: "Compétences",
};
export const recentUpdates_component_content_french = {
  recentUpdates: "Mises à jour récentes",
};

export const connect_component_content_french = {
  title: "Restons connectés",
  description1: "Je suis toujours ouvert à de nouvelles opportunités et collaborations.",
  description2: "N'hésitez pas à me contacter !",
};

export const footer_component_content_french = {
  allRightsReserved: "Iyed Mdimegh. Tous droits réservés.",
  about : "À propos",
  projects : "Projets",
  skills : "Compétences",
  recentUpdates : "Mises à jour récentes",
};






   

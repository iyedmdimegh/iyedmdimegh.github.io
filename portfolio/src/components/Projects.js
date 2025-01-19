import React from 'react';
import ProjectItem from './ProjectItem';

function Projects() {
  const projects = [
    {
      "id": 1,
      "title": "AI-Powered 3D Packing Software",
      "description": "This Project delivers substantial volume and cost savings by efficiently packing 3D boxes within containers. It ensures optimal space utilization and minimizes waste, offering a powerful solution for logistics, warehousing, and shipping challenges. Experience precision and efficiency with our advanced packing algorithms.",
      "image": "/assets/images/project/3dPackGif.gif",
      "technologies": ["Deep Reinforcement Learning", "React.js", "Three.js", "Django", "TailwindCSS", "Dynamic Programming"],
      "youtubeLink": "https://youtu.be/WB1j8iTJYVE",
      "githubLink": "",
      "documentLink": ""
    },
    {
      "id": 2,
      "title": "SMARTSHIELD - AI-Driven Cybersecurity Incident Response Platform",
      "description": "SMARTSHIELD is an AI-powered platform designed for automated detection, classification, and response to cybersecurity incidents, capable of handling large volumes of network logs. Led a team in developing the platform, focusing on machine learning models for real-time threat detection and classification, ensuring high accuracy and scalability. Developed a user-friendly dashboard that visualizes real-time threats and provides an option to view AI-generated reports for detected threats.",
      "image": "/assets/images/project/smartshield/image1.png",
      "technologies": ["CatBoost", "XGBoost", "FastAPI", "NestJS", "React", "TailwindCSS", "PostgreSQL", "Kibana", "Docker", "CrewAI", "RabbitMQ", "openArgus", "Zeek"],
      "youtubeLink": "https://youtu.be/2Nd6C_SpXak",
      "githubLink": "",
      "documentLink": ""
    },
    {
      "id": 3,
      "title": "INSAT Chess Coach Robot",
      "description": "Led a team to develop the INSAT Chess Coach Robot, an interactive robotic chess system designed for the TSYP contest. The project integrates computer vision, a robotic arm, and an adaptive chess engine to offer a unique learning experience. Key features include physical piece manipulation, skill-matched gameplay, real-time feedback, and educational modes, all while using standard chess equipment. This innovative system bridges the gap between digital and physical chess learning.",
      "image": "/assets/images/project/chessCoach/image1.png",
      "technologies": ["Stockfish", "Raspberry Pi 4", "Arduino", "YOLOv8", "Computer Vision"],
      "youtubeLink": "",
      "githubLink": "",
      "documentLink": "/documents/chessTechnicalPaper.pdf"
    },
    {
      "id": 4,
      "title": "Messaging Web App",
      "description": "This project was developed during my internship at Proxym-IT. This messaging App is designed to offer seamless real-time communication, eliminating delays and enhancing the user experience. It efficiently handles scalability issues, ensuring reliable performance even with a growing number of users and messages. The app prioritizes security with robust user authentication measures, protecting user data and privacy. Additionally, it provides comprehensive group communication features and customizable user experiences to meet diverse needs.",
      "image": "/assets/images/project/messenger-0.png",
      "technologies": ["React.js", "Express.js", "MongoDB", "Socket.io", "TailwindCSS", "Node.js", "Postman", "MUI-icons"],
      "youtubeLink": "",
      "githubLink": "",
      "documentLink": "/reports/Proxym.pdf"
    },
    // {
    //   "id": 5,
    //   "title": "URL shortener",
    //   "description": "LinkKit is a website that gives a shorter version for a given URL and provides insights about it like the number of visitors and where they came from.",
    //   "image": "/assets/images/project/linkkit-1.jpg",
    //   "technologies": ["Javascript", "React.js", "Node.js", "HTML", "CSS"],
    //   "youtubeLink": "",
    //   "githubLink": "",
    //   "documentLink": ""
    // },
    {
      "id": 6,
      "title": "University platform",
      "description": "School Management System is a web platform designed to facilitate the management of schedules, attendance, exam details, and enrollment requests within a school environment. It provides separate interfaces for students, teachers, and administrators, each tailored to their specific needs.",
      "image": "/assets/images/project/platform-1.png",
      "technologies": ["Javascript", "PHP", "Chart.js", "HTML", "CSS"],
      "youtubeLink": "",
      "githubLink": "https://github.com/iyedmdimegh/UniversityManagementSystem-symfonyVersion",
      "documentLink": ""
    },
    {
      "id": 7,
      "title": "Java E-commerce application",
      "description": "Java E-commerce application is a project that manages a business's products, handling both admin and client services.",
      "image": "/assets/images/project/java-1.jpg",
      "technologies": ["Java", "Java POO"],
      "youtubeLink": "",
      "githubLink": "",
      "documentLink": ""
    }
  ];

  return (
    <section id="projects" className="mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-200 text-center">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectItem
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            technologies={project.technologies}
            youtubeLink={project.youtubeLink}
            githubLink={project.githubLink}
            documentLink={project.documentLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
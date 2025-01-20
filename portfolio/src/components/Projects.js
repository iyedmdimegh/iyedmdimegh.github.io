
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import ProjectItem from './ProjectItem';
import ProjectItemMobile from './ProjectItemMobile'; // Import the mobile version
import { projects, BASE_URL } from '../data/constants.js';

function Projects() {
  // Define breakpoints for screen size
  const isMobile = useMediaQuery({ maxWidth: 768 }); // For screens smaller than 768px (mobile)
  const isDesktop = useMediaQuery({ minWidth: 769 }); // For screens 769px and larger (PC)

  return (
    <section id="projects" className="mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-gray-100 dark:bg-gray-900 px-6 text-4xl font-bold text-gray-800 dark:text-gray-200">
            My Projects
          </span>
        </div>
      </div>
      <div className="mt-14 grid grid-cols-1 gap-8">
        {projects.map((project) =>
          isMobile ? (
            // Render ProjectItemMobile for smaller screens
            <ProjectItemMobile
              key={project.id}
              title={project.title}
              description={project.description}
              images={project.images.map((image) => BASE_URL + image)}
              technologies={project.technologies}
              youtubeLink={project.youtubeLink}
              githubLink={project.githubLink}
              documentLink={project.documentLink}
            />
          ) : isDesktop ? (
            // Render ProjectItem for larger screens
            <ProjectItem
              key={project.id}
              title={project.title}
              description={project.description}
              images={project.images.map((image) => BASE_URL + image)}
              technologies={project.technologies}
              youtubeLink={project.youtubeLink}
              githubLink={project.githubLink}
              documentLink={project.documentLink}
            />
          ) : null
        )}
      </div>
    </section>
  );
}

export default Projects;

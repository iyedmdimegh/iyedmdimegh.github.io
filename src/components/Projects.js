import React from 'react';
import { useMediaQuery } from 'react-responsive';
import ProjectItem from './ProjectItem';
import ProjectItemMobile from './ProjectItemMobile';
import { projects, projects_french, BASE_URL, projects_component_content, projects_component_content_french } from '../data/constants.js';
import { useLanguage } from '../contexts/LanguageContext';

function Projects() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 769 });
  const { language } = useLanguage();
  
  const content = language === 'en' ? projects_component_content : projects_component_content_french;
  const projectsList = language === 'en' ? projects : projects_french;

  return (
    <section id="projects" className="mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-gray-100 dark:bg-gray-900 px-6 text-4xl font-bold text-gray-800 dark:text-gray-200">
            {content.myProjects}
          </span>
        </div>
      </div>
      <div className="mt-14 grid grid-cols-1 gap-8">
        {projectsList.map((project) =>
          isMobile ? (
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

export default Projects
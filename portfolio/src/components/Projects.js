import React from 'react';
import ProjectItem from './ProjectItem';
import { projects, BASE_URL } from '../data/constants.js';

function Projects() {
  return (
    <section id="projects" className="mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
      <h2 className="text-3xl font-bold mb-16 text-gray-800 dark:text-gray-200 text-center">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectItem
            key={project.id}
            title={project.title}
            description={project.description}
            images={project.images.map(image => BASE_URL + image)}
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
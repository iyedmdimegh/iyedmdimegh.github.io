import React from 'react';

function Projects() {
  const projects = [
    { id: 1, title: 'Project 1', description: 'A React-based web application' },
    { id: 2, title: 'Project 2', description: 'An e-commerce platform' },
    { id: 3, title: 'Project 3', description: 'A portfolio website' },
  ];

  return (
    <section id="projects" className="mb-16">
      <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{project.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;


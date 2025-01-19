import React from 'react';
import { FaYoutube, FaGithub, FaFileAlt } from 'react-icons/fa';

function ProjectItem({ title, description, image, technologies, youtubeLink, githubLink, documentLink }) {
  return (
    <div className="flex flex-col bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Project Image */}
      <div className="h-[300px] overflow-hidden bg-gray-100 dark:bg-gray-700">
        <img 
          src={image} 
          // src="../assets/images/project/platform-1.png" 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Project Info */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              {title}
            </h3>
            <div className="flex gap-2">
              {youtubeLink && (
                <a
                  href={youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-teal-100 dark:hover:bg-teal-900/30 transition-all duration-300 group"
                >
                  <FaYoutube className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300" />
                </a>
              )}
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-teal-100 dark:hover:bg-teal-900/30 transition-all duration-300 group"
                >
                  <FaGithub className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300" />
                </a>
              )}
              {documentLink && (
                <a
                  href={documentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-teal-100 dark:hover:bg-teal-900/30 transition-all duration-300 group"
                >
                  <FaFileAlt className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300" />
                </a>
              )}
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {description}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm font-medium rounded-full bg-teal-600 text-white hover:bg-teal-700 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
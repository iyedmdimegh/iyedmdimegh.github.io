import React from 'react';
import {skillCategories} from '../data/constants';

function Skills() {
  

  return (
    <section id="skills" className="my-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-gray-100 dark:bg-gray-900 px-6 text-4xl font-bold text-gray-800 dark:text-gray-200">
          Skills
          </span>
        </div>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.values(skillCategories).map((category) => (
          <div 
            key={category.title}
            className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${category.bgColor}`}
          >
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-white capitalize">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div 
                    key={skill}
                    className="text-white/90 hover:text-white transition-colors duration-200 text-lg"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
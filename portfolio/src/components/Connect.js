import React from 'react';
import { socialLinks, socialLinks_french, connect_component_content, connect_component_content_french } from '../data/constants';
import { FaArrowRight } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

function Connect() {
  const { language } = useLanguage();
  const content = language === 'en' ? connect_component_content : connect_component_content_french;
  const links = language === 'en' ? socialLinks : socialLinks_french;
  
  return (
    <section id="connect" className="mb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gray-100 dark:bg-gray-900 px-6 text-4xl font-bold text-gray-800 dark:text-gray-200">
              {content.title}
            </span>
          </div>
        </div>
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {content.description1}
            <br />
            {content.description2}
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:from-blue-50/50 dark:group-hover:from-blue-900/20 transition-all duration-500"></div>
                
                <div className="relative flex flex-col items-center text-center space-y-4">
                  <div className={`p-4 rounded-full bg-gray-100 dark:bg-gray-700 transition-all duration-300 group-hover:scale-110 ${link.color}`}>
                    {link.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {link.name}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400">
                    {link.description}
                  </p>
                  
                  <div className="flex items-center text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform duration-300">
                    <span className="mr-2">Visit</span>
                    <FaArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Connect
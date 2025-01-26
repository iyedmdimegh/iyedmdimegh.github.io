import React from 'react';
import { footer_component_content, footer_component_content_french } from '../data/constants';
import { useLanguage } from '../contexts/LanguageContext';

function Footer() {
  const { language } = useLanguage();
  const content = language === 'en' ? footer_component_content : footer_component_content_french;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-800 shadow-lg mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          <nav className="flex space-x-6">
            <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
              {content.about}
            </a>
            <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
              {content.projects}
            </a>
            <a href="#Recentupdates" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
              {content.recentUpdates}
            </a>
            <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
              {content.skills}
            </a>
          </nav>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            © {currentYear} {content.allRightsReserved}
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer
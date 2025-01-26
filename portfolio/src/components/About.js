import React from 'react';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { pfp, BASE_URL, RESUME_ENDPOINT } from '../data/constants.js';
import { about_components_content, about_components_content_french } from '../data/constants.js';
import { useLanguage } from '../contexts/LanguageContext';

function About() {
  const { language } = useLanguage();
  const content = language === 'en' ? about_components_content : about_components_content_french;
  
  const phrases = [
    content.animated1,
    content.animated2,
    content.animated3
  ];
  
  const typedText = useTypingEffect(phrases);

  return (
    <section id="about" className="min-h-[80vh] flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-gray-600 dark:text-gray-400 mb-4 text-base sm:text-lg">
            {content.welcome}
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            {content.hello}{' '}
            <span className="relative">
              <span className="text-teal-600 dark:text-teal-400">
                {typedText}
              </span>
              <span className="absolute right-[-4px] w-[4px] h-8 sm:h-10 lg:h-12 bg-orange-500 animate-blink"></span>
            </span>
          </h1>
          <button
            className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors duration-300"
            onClick={() => window.open(`${BASE_URL + RESUME_ENDPOINT}`, '_blank')}
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            {content.download}
          </button>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72">
            <img
              src={`${BASE_URL + pfp}`}
              alt="Profile"
              className="rounded-2xl object-cover w-full h-full shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
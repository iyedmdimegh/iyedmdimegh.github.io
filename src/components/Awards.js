import React, { useState } from 'react';
import { awards_component_content, awards_component_content_french } from '../data/constants';
import { useLanguage } from '../contexts/LanguageContext';
import { FaTrophy, FaChevronDown, FaChevronUp } from 'react-icons/fa';

function Awards() {
  const { language } = useLanguage();
  const content = language === 'en' ? awards_component_content : awards_component_content_french;
  const [showAll, setShowAll] = useState(false);

  const displayedAwards = showAll ? content.awards : content.awards.slice(0, 4);
  const hasMoreAwards = content.awards.length > 4;

  return (
    <section id="awards" className="mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-gray-100 dark:bg-gray-900 px-6 text-4xl font-bold text-gray-800 dark:text-gray-200">
            Awards
          </span>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {displayedAwards.map((award, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="p-3 bg-teal-100 dark:bg-teal-900 rounded-full">
                  <FaTrophy className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {award.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {award.description}
                </p>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200">
                  {award.prize}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {hasMoreAwards && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group inline-flex items-center px-6 py-3 rounded-full bg-teal-600 text-white hover:bg-teal-700 transition-all duration-300 space-x-2"
          >
            <span>{showAll ? 'Show Less' : 'Show More'}</span>
            {showAll ? (
              <FaChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
            ) : (
              <FaChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
            )}
          </button>
        </div>
      )}
    </section>
  );
}

export default Awards;
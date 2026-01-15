import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { timeline_component_content, timeline_component_content_french, timelineData, timelineData_french } from '../data/constants';

export default function Timeline() {
  const { language } = useLanguage();
  const content = language === 'en' ? timeline_component_content : timeline_component_content_french;
  const data = language === 'en' ? timelineData : timelineData_french;

  return (
    <section id="timeline" className="mb-16 sm:mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-12 text-center">
          {content.title}
        </h2>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-orange-400 to-orange-500 md:transform md:-translate-x-1/2"></div>

            {data.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative mb-8 md:mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:text-left'
                }`}
              >
                <div className="flex items-start md:block">
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-white dark:border-gray-900 md:transform md:-translate-x-1/2 z-10 shadow-lg"></div>

                  <div className="ml-16 md:ml-0 w-full">
                    <div
                      className={`inline-block w-full md:w-[calc(50%-2rem)] ${
                        index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                      }`}
                    >
                      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
                        <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                          <span className="text-sm font-medium text-orange-500 dark:text-orange-400">
                            {item.period}
                          </span>
                          {item.location && (
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {item.location}
                            </span>
                          )}
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {item.position}
                        </h3>

                        <h4 className="text-lg font-semibold text-orange-600 dark:text-orange-400 mb-4">
                          {item.company}
                        </h4>

                        <ul className="space-y-2">
                          {item.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="text-gray-600 dark:text-gray-300 text-sm flex items-start"
                            >
                              <span className="text-orange-500 mr-2 mt-1 flex-shrink-0">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>

                        {item.tags && item.tags.length > 0 && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {item.tags.map((tag, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 text-xs font-medium bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

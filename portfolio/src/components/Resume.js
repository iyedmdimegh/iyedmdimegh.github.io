import React from 'react';

function Resume() {
  return (
    <section id="resume" className="mb-16">
      <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">Resume</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Here you can find a brief overview of my professional experience and skills.
      </p>
      <a
        href="/path-to-your-resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
      >
        Download Resume
      </a>
    </section>
  );
}

export default Resume;


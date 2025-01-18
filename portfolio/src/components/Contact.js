import React from 'react';

function Contact() {
  return (
    <section id="contact" className="mb-16">
      <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">Contact Me</h2>
      <form className="max-w-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Name</label>
          <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Email</label>
          <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200" required />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Message</label>
          <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200" required></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition-colors duration-300">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;


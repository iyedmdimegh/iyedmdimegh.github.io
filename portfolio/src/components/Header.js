import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes, FaCode } from 'react-icons/fa';
import { BASE_URL, RESUME_ENDPOINT } from '../data/constants';

function Header({ darkMode, setDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const navItems = ['About', 'Projects', 'Resume', 'Connect'];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = prevScrollPos > currentScrollPos;
      
      // Only update visibility when scrolling more than 70px
      if (Math.abs(prevScrollPos - currentScrollPos) > 70) {
        setVisible(isScrollingUp || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <header 
      className={`fixed w-full top-0 z-50 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-md transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo and Name Section */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center">
              <FaCode className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
              Iyed Mdimegh
            </h1>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 sm:hidden">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
            >
              {darkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
            </button>
            <button
              className="text-gray-800 dark:text-gray-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={item === "Resume" ? `${BASE_URL}${RESUME_ENDPOINT}` : `#${item.toLowerCase()}`}
                    target={item === "Resume" ? "_blank" : "_self"}
                    className="group relative px-3 py-2 text-gray-600 dark:text-gray-300 transition-all duration-300 ease-in-out hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <span className="relative z-10">
                      {item}
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                    </span>
                    <span className="absolute inset-0 w-full h-full bg-blue-100 dark:bg-blue-900/30 rounded-lg transform scale-0 opacity-0 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100"></span>
                  </a>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
            >
              {darkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } sm:hidden absolute top-16 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg z-50`}
          >
            <ul className="w-full p-4 space-y-4">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={item === "Resume" ? `${BASE_URL}${RESUME_ENDPOINT}` : `#${item.toLowerCase()}`}
                    target={item === "Resume" ? "_blank" : "_self"}
                    className="group relative block px-3 py-2 text-gray-600 dark:text-gray-300 transition-all duration-300 ease-in-out hover:text-blue-600 dark:hover:text-blue-400"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="relative z-10">{item}</span>
                    <span className="absolute inset-0 w-full h-full bg-blue-100 dark:bg-blue-900/30 rounded-lg transform scale-0 opacity-0 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
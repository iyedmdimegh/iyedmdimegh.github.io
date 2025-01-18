// import React from 'react';
// import { FaSun, FaMoon } from 'react-icons/fa';

// function Header({ darkMode, setDarkMode }) {
//   const navItems = ['About', 'Projects', 'Contact', 'Resume'];

//   return (
//     <header className="bg-white dark:bg-gray-800 shadow">
//       <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
//         <div className="flex justify-between items-center">
//           <ul className="flex space-x-8">
//             {navItems.map((item) => (
//               <li key={item}>
//                 <a
//                   href={`#${item.toLowerCase()}`}
//                   className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 relative group"
//                 >
//                   {item}
//                   <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
//                 </a>
//               </li>
//             ))}
//           </ul>
//           <button
//             onClick={() => setDarkMode(!darkMode)}
//             className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
//           >
//             {darkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
//           </button>
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default Header;

import React, { useState } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

function Header({ darkMode, setDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ['About', 'Projects', 'Contact', 'Resume'];

  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <button
              className="sm:hidden mr-4 text-gray-800 dark:text-gray-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
            <ul className={`${isMenuOpen ? 'flex' : 'hidden'} sm:flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 absolute sm:relative top-16 sm:top-0 left-0 sm:left-auto bg-white dark:bg-gray-800 sm:bg-transparent w-full sm:w-auto p-4 sm:p-0 shadow-md sm:shadow-none`}>
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="block text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 relative group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
          >
            {darkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;


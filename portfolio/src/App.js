// import React, { useState, useEffect } from 'react';
// import Header from './components/Header';
// import About from './components/About';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import Resume from './components/Resume';
// import Footer from './components/Footer';

// function App() {
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, [darkMode]);

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
//       <Header darkMode={darkMode} setDarkMode={setDarkMode} />
//       <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <About />
//         <Projects />
//         <Contact />
//         <Resume />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <About />
        {/* <Projects /> */}
        {/* <Contact /> */}
        {/* <Resume /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;


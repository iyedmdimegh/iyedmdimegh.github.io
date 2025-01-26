import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import RecentUpdates from './components/RecentUpdates';
import Skills from './components/Skills';
import Connect from './components/Connect';
import { LanguageProvider } from './contexts/LanguageContext';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <About />
          <Projects />
          <RecentUpdates />
          <Skills />
          <Connect />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
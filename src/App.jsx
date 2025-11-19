import React, { useState, useEffect } from 'react';
import DotGrid from './components/DotGrid';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="relative min-h-screen bg-gray-100 dark:bg-primary-bg text-light-secondary dark:text-text-light overflow-x-hidden transition-colors duration-300">
      {/* Full Screen DotGrid Background */}
      <div className="fixed inset-0 z-0 w-full h-full">
        <DotGrid
          dotSize={8}
          gap={25}
          baseColor={darkMode ? "#333333" : "#cccccc"}
          activeColor="#ff6347"
          proximity={150}
          shockRadius={300}
          shockStrength={4}
          resistance={800}
          returnDuration={1.8}
        />
      </div>
      
      {/* All Portfolio Content */}
      <div className="relative z-10 w-full">
        <Navigation darkMode={darkMode} toggleTheme={toggleTheme} />
        <main>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;

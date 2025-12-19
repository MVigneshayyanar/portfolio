import React from 'react';
import DotGrid from './components/DotGrid';
import Navigation from './components/Navigation';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Profiles from './components/Profiles';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-primary-bg text-text-light">
      {/* Full Screen DotGrid Background */}
      <div className="fixed inset-0 z-0 w-full h-full">
        <DotGrid
          dotSize={8}
          gap={25}
          baseColor="#333333"
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
        <Navigation />
        <main>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Profiles />
          <Education />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;

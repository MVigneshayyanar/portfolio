import React from 'react';
import DotGrid from './components/DotGrid'; // Your DotGrid component
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';
import useViewCounter from './hooks/useViewCounter';

function App() {
  const { totalViews, liveViewers, isOnline } = useViewCounter();

  return (
    <div className="relative min-h-screen bg-primary-bg text-text-light overflow-x-hidden">
      {/* Full Screen DotGrid Background */}
      <div className="fixed inset-0 z-0 w-full h-full">
        <DotGrid
          dotSize={8}                    // Moderate size for visibility
          gap={25}                       // Good spacing for full screen
          baseColor="#333333"           // Subtle dark gray
          activeColor="#ff6347"         // Your signature secondary color
          proximity={150}               // Large interaction area
          shockRadius={300}             // Wide ripple effect
          shockStrength={4}             // Noticeable but not overwhelming
          resistance={800}              // Smooth return animation
          returnDuration={1.8}          // Elegant animation timing
        />
      </div>
      
      {/* All Portfolio Content */}
      <div className="relative z-10 w-full">
        <Navigation totalViews={totalViews} liveViewers={liveViewers} />
        <main>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
        </main>
        <Footer totalViews={totalViews} liveViewers={liveViewers} />
      </div>
    </div>
  );
}

export default App;

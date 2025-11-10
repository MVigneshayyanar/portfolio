import React from 'react';
import profilePhoto from '../assets/LinkedIN.jpg';
import resumePdf from '../assets/VIGNESHAYYANAR.pdf';
import ViewCounter from './ViewCounter';

function Navigation({ totalViews, liveViewers }) {
  return (
    <nav className="sticky top-0 z-50 p-3 md:p-4">
      <div className="max-w-6xl mx-auto">
        <div className="backdrop-blur-sm bg-black/30 rounded-2xl px-4 py-3 md:px-6 md:py-4 border border-white/10 flex flex-col gap-4">
          
          {/* Profile Section - Centered on Mobile */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="relative flex-shrink-0">
                <img 
                  src={profilePhoto} 
                  alt="Profile Photo" 
                  className="w-12 h-12 rounded-full border-2 border-secondary object-cover"
                />
                <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-400 rounded-full border-2 border-black"></div>
              </div>
              <div className="text-center md:text-left">
                <div className="font-montserrat font-bold text-xl sm:text-2xl text-text-light">VIGNESHAYYANAR</div>
                <p className="text-sm sm:text-base text-tertiary font-medium">Flutter Developer</p>
              </div>
            </div>
          
            {/* Action Icons - Second Line on Mobile, Inline on Desktop */}
            <div className="flex items-center justify-center gap-3 md:gap-4">
              {/* Social Icons */}
              <a 
                href="mailto:vigneshayyanarm05@gmail.com" 
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-secondary/20 border border-white/20 hover:border-secondary/50 text-tertiary hover:text-secondary transition-all duration-300 hover:scale-110 flex items-center justify-center group"
              >
                <i className="fas fa-envelope text-lg group-hover:scale-110 transition-transform duration-300"></i>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/vigneshayyanar-m-3b1823293/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-blue-500/20 border border-white/20 hover:border-blue-400/50 text-tertiary hover:text-blue-400 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
              >
                <i className="fab fa-linkedin text-lg group-hover:scale-110 transition-transform duration-300"></i>
              </a>
              
              <a 
                href="https://github.com/MVigneshayyanar" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-gray-500/20 border border-white/20 hover:border-gray-300/50 text-tertiary hover:text-gray-300 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
              >
                <i className="fab fa-github text-lg group-hover:scale-110 transition-transform duration-300"></i>
              </a>
              
              {/* Resume Button */}
              <a 
                href={resumePdf} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-secondary hover:bg-tertiary text-white hover:text-black px-4 sm:px-5 py-3 rounded-full font-bold text-sm sm:text-base transition-all duration-300 hover:scale-105 flex items-center gap-2 border border-secondary hover:border-tertiary"
              >
                <i className="fas fa-download text-sm sm:text-base"></i>
                <span className="hidden sm:inline">Resume</span>
              </a>
            </div>
          </div>
          
          {/* View Counter Section */}
          <div className="flex justify-center md:justify-end border-t border-white/10 pt-3">
            <ViewCounter totalViews={totalViews} liveViewers={liveViewers} variant="compact" />
          </div>
          
        </div>
      </div>
    </nav>
  );
}

export default Navigation;

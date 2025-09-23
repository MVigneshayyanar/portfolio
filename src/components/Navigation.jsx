import React from 'react';
import profilePhoto from '../assets/LinkedIN.jpg';
import resumePdf from '../assets/VIGNESHAYYANAR.pdf';

function Navigation() {
  return (
    <nav className="sticky top-0 z-50 p-3 md:p-4">
      <div className="max-w-6xl mx-auto">
        <div className="backdrop-blur-sm bg-black/30 rounded-2xl px-4 py-3 md:px-6 md:py-4 border border-white/10 flex items-center justify-between">
          
          {/* Compact Profile */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <img 
                src={profilePhoto} 
                alt="Profile Photo" 
                className="w-10 h-10 rounded-full border-2 border-secondary object-cover"
              />
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border border-black"></div>
            </div>
            <div>
              <div className="font-montserrat font-bold text-lg sm:text-xl text-text-light">Vigneshayyanar</div>
              <p className="text-xs sm:text-sm text-tertiary">Flutter Developer</p>
            </div>
          </div>
          
          {/* Compact Actions */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Social Icons - Enhanced Circles */}
            <a 
              href="mailto:vigneshayyanarm05@gmail.com" 
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary/20 border border-white/20 hover:border-secondary/50 text-tertiary hover:text-secondary transition-all duration-300 hover:scale-110 flex items-center justify-center group"
            >
              <i className="fas fa-envelope text-sm sm:text-base group-hover:scale-110 transition-transform duration-300"></i>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/vigneshayyanar-m-3b1823293/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-500/20 border border-white/20 hover:border-blue-400/50 text-tertiary hover:text-blue-400 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
            >
              <i className="fab fa-linkedin text-sm sm:text-base group-hover:scale-110 transition-transform duration-300"></i>
            </a>
            
            <a 
              href="https://github.com/MVigneshayyanar" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-gray-500/20 border border-white/20 hover:border-gray-300/50 text-tertiary hover:text-gray-300 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
            >
              <i className="fab fa-github text-sm sm:text-base group-hover:scale-110 transition-transform duration-300"></i>
            </a>
            
            {/* Compact Resume Button */}
            <a 
              href={resumePdf} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="ml-2 bg-secondary hover:bg-tertiary text-white hover:text-black px-3 sm:px-4 py-2 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 hover:scale-105 flex items-center gap-1 sm:gap-2 border border-secondary hover:border-tertiary"
            >
              <i className="fas fa-download text-xs sm:text-sm"></i>
              <span className="hidden xs:inline sm:inline">Resume</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;

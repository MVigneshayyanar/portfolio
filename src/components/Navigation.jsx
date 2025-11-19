import React from 'react';
import profilePhoto from '../assets/LinkedIN.jpg';
import resumePdf from '../assets/VIGNESHAYYANAR.pdf';

function Navigation({ darkMode, toggleTheme }) {
  return (
    <nav className="sticky top-0 z-50 p-3 md:p-4">
      <div className="max-w-6xl mx-auto">
        <div className="backdrop-blur-sm bg-gray-200/90 dark:bg-black/30 rounded-2xl px-4 py-3 md:px-6 md:py-4 border border-gray-300 dark:border-white/10 shadow-lg dark:shadow-none flex flex-col gap-4">
          
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="relative flex-shrink-0">
                <img 
                  src={profilePhoto} 
                  alt="Profile Photo" 
                  className="w-12 h-12 rounded-full border-2 border-light-primary dark:border-secondary object-cover"
                />
                <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-400 rounded-full border-2 border-white dark:border-black"></div>
              </div>
              <div className="text-center md:text-left">
                <div className="font-montserrat font-bold text-xl sm:text-2xl text-light-secondary dark:text-text-light">VIGNESHAYYANAR</div>
                <p className="text-sm sm:text-base text-light-primary dark:text-tertiary font-medium">Flutter Developer</p>
              </div>
            </div>
          
            {/* Action Icons */}
            <div className="flex items-center justify-center gap-3 md:gap-4">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="w-12 h-12 rounded-full bg-gray-300 dark:bg-white/10 hover:bg-light-primary/20 border border-gray-400 dark:border-white/20 hover:border-light-primary/50 text-light-secondary dark:text-tertiary hover:text-light-primary transition-all duration-300 hover:scale-110 flex items-center justify-center group"
                aria-label="Toggle theme"
              >
                {darkMode ? (
                  <i className="fas fa-sun text-lg group-hover:scale-110 transition-transform duration-300"></i>
                ) : (
                  <i className="fas fa-moon text-lg group-hover:scale-110 transition-transform duration-300"></i>
                )}
              </button>

              {/* Social Icons */}
              <a 
                href="mailto:vigneshayyanarm05@gmail.com" 
                className="w-12 h-12 rounded-full bg-gray-300 dark:bg-white/10 hover:bg-light-primary/20 border border-gray-400 dark:border-white/20 hover:border-light-primary/50 text-light-secondary dark:text-tertiary hover:text-light-primary transition-all duration-300 hover:scale-110 flex items-center justify-center group"
              >
                <i className="fas fa-envelope text-lg group-hover:scale-110 transition-transform duration-300"></i>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/vigneshayyanar-m-3b1823293/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-full bg-gray-300 dark:bg-white/10 hover:bg-blue-500/20 border border-gray-400 dark:border-white/20 hover:border-blue-400/50 text-light-secondary dark:text-tertiary hover:text-blue-400 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
              >
                <i className="fab fa-linkedin text-lg group-hover:scale-110 transition-transform duration-300"></i>
              </a>
              
              <a 
                href="https://github.com/MVigneshayyanar" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-full bg-gray-300 dark:bg-white/10 hover:bg-gray-500/20 border border-gray-400 dark:border-white/20 hover:border-gray-600 dark:hover:border-gray-300/50 text-light-secondary dark:text-tertiary hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
              >
                <i className="fab fa-github text-lg group-hover:scale-110 transition-transform duration-300"></i>
              </a>
              
              {/* Resume Button */}
              <a 
                href={resumePdf} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-light-primary dark:bg-secondary hover:bg-light-tertiary dark:hover:bg-tertiary text-white dark:text-white hover:text-white dark:hover:text-black px-4 sm:px-5 py-3 rounded-full font-bold text-sm sm:text-base transition-all duration-300 hover:scale-105 flex items-center gap-2 border border-light-primary dark:border-secondary hover:border-light-tertiary dark:hover:border-tertiary"
              >
                <i className="fas fa-download text-sm sm:text-base"></i>
                <span className="hidden sm:inline">Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;

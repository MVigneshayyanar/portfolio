import React from 'react';
import profilePhoto from '../assets/LinkedIN.jpg';
import resumePdf from '../assets/VIGNESHAYYANAR.pdf';

function Navigation() {
  return (
    <nav className="sticky top-0 bg-card-bg border-b border-gray-800 px-4 md:px-8 py-3 flex flex-col md:flex-row justify-between items-center z-50 min-h-[70px] gap-4 md:gap-0">
      <div className="flex items-center justify-center md:justify-start">
        <img 
          src={profilePhoto} 
          alt="Profile Photo" 
          className="w-11 h-11 rounded-full mr-3 border-2 border-secondary object-cover"
        />
        <div className="text-center md:text-left">
          <div className="font-montserrat font-bold text-lg text-text-light">
            Vigneshayyanar
          </div>
          <p className="text-sm text-text-muted mt-1">Flutter Developer</p>
        </div>
      </div>
      
      <div className="flex items-center justify-center flex-wrap gap-4 md:gap-6">
        <a 
          href="mailto:vigneshayyanarm05@gmail.com" 
          aria-label="Email"
          className="text-tertiary hover:text-secondary transition-colors duration-300"
        >
          <i className="fas fa-envelope text-2xl md:text-3xl"></i>
        </a>
        <a 
          href="https://www.linkedin.com/in/vigneshayyanar-m-3b1823293/" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="LinkedIn Profile"
          className="text-tertiary hover:text-secondary transition-colors duration-300"
        >
          <i className="fab fa-linkedin text-2xl md:text-3xl"></i>
        </a>
        <a 
          href="https://github.com/MVigneshayyanar" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="GitHub Profile"
          className="text-tertiary hover:text-secondary transition-colors duration-300"
        >
          <i className="fab fa-github text-2xl md:text-3xl"></i>
        </a>
        <a 
          href={resumePdf} 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Download Resume"
          className="bg-secondary text-white px-4 py-2 rounded-full font-bold text-sm transition-all duration-300 hover:bg-transparent hover:text-secondary border-2 border-secondary hover:-translate-y-1 flex items-center gap-2"
        >
          <i className="fas fa-download"></i>
          <span>Resume</span>
        </a>
      </div>
    </nav>
  );
}

export default Navigation;

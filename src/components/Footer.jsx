import React from 'react';

function Footer() {
  return (
    <footer className="p-3 md:p-4">
      <div className="max-w-6xl mx-auto">
        <div className="backdrop-blur-sm bg-gray-200/90 dark:bg-black/30 rounded-2xl px-4 py-3 md:px-6 md:py-4 border border-gray-300 dark:border-white/10 shadow-lg dark:shadow-none">
          
          {/* Header Section */}
          <div className="flex items-center gap-3 mb-4">
            <div>
              <h3 className="font-montserrat font-bold text-base sm:text-lg text-light-secondary dark:text-text-light">Let's Connect!</h3>
              <p className="text-xs text-light-primary dark:text-tertiary">Ready to collaborate</p>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="text-gray-700 dark:text-text-muted text-sm sm:text-base leading-relaxed mb-6">
            Ready to bring your app ideas to life? I'm always excited to work on innovative Flutter projects and collaborate with amazing teams.
          </div>
          
          {/* Social Links - Compact Style */}
          <div className="flex flex-wrap justify-start gap-2 md:gap-3 mb-6">
            <a 
              href="mailto:vigneshayyanarm05@gmail.com" 
              className="w-10 h-10 rounded-full bg-gray-300 dark:bg-white/10 hover:bg-light-primary/20 border border-gray-400 dark:border-white/20 hover:border-light-primary/50 text-light-secondary dark:text-tertiary hover:text-light-primary transition-all duration-300 hover:scale-110 flex items-center justify-center group"
            >
              <i className="fas fa-envelope text-sm group-hover:scale-110 transition-transform duration-300"></i>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/vigneshayyanar-m-3b1823293/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-300 dark:bg-white/10 hover:bg-blue-500/20 border border-gray-400 dark:border-white/20 hover:border-blue-400/50 text-light-secondary dark:text-tertiary hover:text-blue-400 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
            >
              <i className="fab fa-linkedin text-sm group-hover:scale-110 transition-transform duration-300"></i>
            </a>
            
            <a 
              href="https://github.com/MVigneshayyanar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-300 dark:bg-white/10 hover:bg-gray-500/20 border border-gray-400 dark:border-white/20 hover:border-gray-600 dark:hover:border-gray-300/50 text-light-secondary dark:text-tertiary hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
            >
              <i className="fab fa-github text-sm group-hover:scale-110 transition-transform duration-300"></i>
            </a>
          </div>
          
          {/* Bottom Section */}
          <div className="border-t border-gray-300 dark:border-white/10 pt-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs sm:text-sm">
              <div className="text-gray-700 dark:text-text-muted">
                © 2025 Vigneshayyanar M. All rights reserved.
              </div>
              <div className="flex items-center gap-2">
                <span className="text-light-primary dark:text-secondary font-medium">Flutter Developer</span>
                <span className="text-gray-700 dark:text-text-muted">•</span>
                <span className="text-light-primary dark:text-secondary font-medium">Open for Opportunities</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;

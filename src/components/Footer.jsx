import React from 'react';

function Footer() {
  return (
    <footer className="bg-card-bg text-center px-4 py-8 mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h3 className="text-secondary font-montserrat text-xl mb-4">Let's Connect!</h3>
          <p className="text-text-muted mb-6 max-w-2xl mx-auto">
            Ready to bring your app ideas to life? I'm always excited to work on innovative Flutter projects and collaborate with amazing teams.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
            <a 
              href="mailto:vigneshayyanarm05@gmail.com" 
              className="text-tertiary hover:text-secondary transition-colors duration-300 flex items-center gap-2"
            >
              <i className="fas fa-envelope text-lg"></i>
              <span>vigneshayyanarm05@gmail.com</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/vigneshayyanar-m-3b1823293/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-tertiary hover:text-secondary transition-colors duration-300 flex items-center gap-2"
            >
              <i className="fab fa-linkedin text-lg"></i>
              <span>LinkedIn Profile</span>
            </a>
            <a 
              href="https://github.com/MVigneshayyanar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-tertiary hover:text-secondary transition-colors duration-300 flex items-center gap-2"
            >
              <i className="fab fa-github text-lg"></i>
              <span>GitHub Profile</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <p className="text-text-muted text-sm">© 2025 Vigneshayyanar M. All rights reserved.</p>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-secondary font-bold">Flutter Developer</span>
              <span className="text-text-muted">|</span>
              <span className="text-secondary font-bold">Open for Opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import React from 'react';
import { motion } from 'framer-motion';
import profilePhoto from '../assets/LinkedIN.jpg';
import resumePdf from '../assets/Vigneshayyanar_CV.pdf';

function Navigation() {
  return (
    <motion.nav
      className="sticky top-0 z-50 p-3 md:p-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="backdrop-blur-sm bg-black/30 rounded-2xl px-4 py-3 md:px-6 md:py-4 border border-white/10 flex flex-col gap-4">

          {/* Profile Section */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <motion.div
              className="flex items-center gap-4 justify-center md:justify-start"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <motion.div
                className="relative flex-shrink-0"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={profilePhoto}
                  alt="Profile Photo"
                  className="w-12 h-12 rounded-full border-2 border-secondary object-cover"
                />
                <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-400 rounded-full border-2 border-black"></div>
              </motion.div>
              <div className="text-center md:text-left">
                <motion.div
                  className="font-montserrat font-bold text-xl sm:text-2xl text-text-light"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  VIGNESHAYYANAR
                </motion.div>
                <motion.p
                  className="text-sm sm:text-base text-tertiary font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Flutter Developer
                </motion.p>
              </div>
            </motion.div>

            {/* Action Icons */}
            <motion.div
              className="flex items-center justify-center gap-3 md:gap-4"
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {/* Social Icons */}
              <motion.a
                href="mailto:vigneshayyanarm05@gmail.com"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-secondary/20 border border-white/20 hover:border-secondary/50 text-tertiary hover:text-secondary transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-envelope text-lg"></i>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/vigneshayyanar-m-3b1823293/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-blue-500/20 border border-white/20 hover:border-blue-400/50 text-tertiary hover:text-blue-400 transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-linkedin text-lg"></i>
              </motion.a>

              <motion.a
                href="https://github.com/MVigneshayyanar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-tertiary hover:text-white transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-github text-lg"></i>
              </motion.a>

              {/* Resume Button */}
              <motion.a
                href={resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary hover:bg-tertiary text-white hover:text-black px-4 sm:px-5 py-3 rounded-full font-bold text-sm sm:text-base transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-download text-sm sm:text-base"></i>
                <span className="hidden sm:inline">Resume</span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navigation;

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const socialLinks = [
    { href: "mailto:vigneshayyanarm05@gmail.com", icon: "fas fa-envelope", label: "Email", hoverColor: "hover:text-red-400 hover:border-red-400/50" },
    { href: "https://www.linkedin.com/in/vigneshayyanar-m-3b1823293/", icon: "fab fa-linkedin", label: "LinkedIn", hoverColor: "hover:text-blue-400 hover:border-blue-400/50" },
    { href: "https://github.com/MVigneshayyanar", icon: "fab fa-github", label: "GitHub", hoverColor: "hover:text-white hover:border-white/50" }
  ];

  return (
    <footer className="p-3 md:p-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="backdrop-blur-sm bg-black/30 rounded-2xl px-4 py-4 md:px-6 md:py-6 border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >

          {/* Header Section */}
          <motion.div
            className="flex items-center gap-3 mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <motion.span
              className="text-3xl"
              animate={{
                rotate: [0, 14, -8, 14, -4, 10, 0],
              }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              👋
            </motion.span>
            <div>
              <h3 className="font-montserrat font-bold text-base sm:text-lg text-text-light">Let's Connect!</h3>
              <p className="text-xs text-tertiary">Ready to collaborate</p>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            className="text-text-muted text-sm sm:text-base leading-relaxed mb-5"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            Ready to bring your app ideas to life? I'm always excited to work on innovative <span className="text-secondary font-medium">Flutter projects</span> and collaborate with amazing teams.
          </motion.div>

          {/* Social Links & CTA */}
          <motion.div
            className="flex flex-wrap items-center gap-3 mb-5"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : "_blank"}
                rel={link.href.startsWith('mailto') ? undefined : "noopener noreferrer"}
                className={`w-11 h-11 rounded-full bg-white/10 border border-white/20 text-tertiary transition-all duration-300 flex items-center justify-center ${link.hoverColor}`}
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.label}
              >
                <i className={`${link.icon} text-base`}></i>
              </motion.a>
            ))}

            {/* CTA Button */}
            <motion.a
              href="mailto:vigneshayyanarm05@gmail.com"
              className="inline-flex items-center gap-2 bg-secondary text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300 hover:bg-tertiary hover:text-black ml-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-paper-plane"></i>
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            className="border-t border-white/10 pt-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs sm:text-sm">
              <div className="text-text-muted">
                © 2025 <span className="text-secondary font-medium">Vigneshayyanar M</span>. All rights reserved.
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-secondary font-medium bg-secondary/10 px-2.5 py-1 rounded-full border border-secondary/30 text-xs">
                  Flutter Developer
                </span>
                <span className="text-green-400 font-medium bg-green-500/10 px-2.5 py-1 rounded-full border border-green-500/30 text-xs flex items-center gap-1.5">
                  <motion.span
                    className="w-1.5 h-1.5 rounded-full bg-green-400"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  Open for Opportunities
                </span>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;

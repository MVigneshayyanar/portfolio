import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="about" className="p-3 md:p-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="backdrop-blur-sm bg-black/30 rounded-2xl px-4 py-3 md:px-6 md:py-4 border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >

          {/* Section Header */}
          <motion.div
            className="flex items-center gap-3 mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div>
              <h2 className="font-montserrat font-bold text-base sm:text-lg text-text-light">About Me</h2>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="text-text-muted text-sm sm:text-base leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            I am a passionate <strong className="text-secondary">Flutter App Developer</strong> with expertise in building cross-platform mobile applications.
            I specialize in <strong className="text-tertiary">Flutter & Dart</strong> for app development and <strong className="text-tertiary">Firebase</strong> for backend services like authentication, real-time databases, and storage.
            Additionally, I have hands-on experience with <strong className="text-tertiary">AWS</strong> where I worked on cloud resource management, automation, and scalability.
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

export default About;

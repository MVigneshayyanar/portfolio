import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const educationData = [
    {
      institution: 'Sri Sairam Engineering College',
      degree: 'M.Tech in Computer Science and Engineering (Integrated 5-Year)',
      year: '2023 – 2028',
      emoji: '🎓',
      current: true
    },
    {
      institution: 'Little Flower Matric. Hr. Sec. School',
      degree: '12th Standard',
      year: '2023',
      emoji: '📚'
    },
    {
      institution: 'Little Flower Matric. Hr. Sec. School',
      degree: '10th Standard',
      year: '2021',
      emoji: '📖'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="education" className="p-3 md:p-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="backdrop-blur-sm bg-black/30 rounded-2xl px-4 py-4 md:px-6 md:py-6 border border-white/10"
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
              <h2 className="font-montserrat font-bold text-base sm:text-lg text-text-light">Education</h2>
              <p className="text-xs text-tertiary">Academic Background</p>
            </div>
          </motion.div>

          {/* Education Cards */}
          <motion.div
            className="space-y-3"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                className="group backdrop-blur-sm bg-white/5 rounded-xl px-4 py-3 border border-white/10 hover:border-secondary/30 transition-all duration-300"
                variants={cardVariants}
                whileHover={{ x: 5 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex items-center gap-3 flex-1">
                    <motion.span
                      className="text-2xl"
                      animate={edu.current ? { rotate: [0, -10, 10, 0] } : {}}
                      transition={{ duration: 2, repeat: edu.current ? Infinity : 0, repeatDelay: 2 }}
                    >
                      {edu.emoji}
                    </motion.span>
                    <div>
                      <h3 className="font-semibold text-sm sm:text-base text-text-light mb-0.5 flex items-center gap-2">
                        {edu.institution}
                        {edu.current && (
                          <span className="text-[10px] bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full border border-blue-500/30">
                            Pursuing
                          </span>
                        )}
                      </h3>
                      <p className="text-text-muted text-xs sm:text-sm">
                        {edu.degree}
                      </p>
                    </div>
                  </div>
                  <motion.div
                    className="text-secondary font-medium text-xs sm:text-sm bg-secondary/10 px-3 py-1.5 rounded-full border border-secondary/30 w-fit"
                    whileHover={{ scale: 1.05 }}
                  >
                    {edu.year}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

export default Education;

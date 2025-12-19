import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const experiences = [
    {
      company: 'Maestromind',
      position: 'Full Stack App Developer Intern',
      duration: 'Nov 2025 – Present',
      location: 'Remote',
      responsibilities: [
        'Developing full-stack web applications using modern technologies.',
        'Working on both frontend and backend development tasks.',
        'Collaborating with the team to deliver scalable solutions.'
      ],
      emoji: '🚀',
      current: true
    },
    {
      company: 'Ignito Corporation',
      position: 'Flutter App Developer Intern',
      duration: 'Jul 2025 – Aug 2025',
      location: 'Remote',
      responsibilities: [
        'Developed mobile applications with Flutter and Firebase integration.',
        'Worked on real-time database, authentication, and UI/UX improvements.'
      ],
      emoji: '📱'
    },
    {
      company: 'Brainovision Solutions India Pvt. Ltd.',
      position: 'AWS Intern',
      duration: 'Feb 2025 – Jun 2025',
      location: 'Remote',
      responsibilities: [
        'Created an AWS Cloud Resource Management System for automation and monitoring.',
        'Configured EC2, S3, Lambda, and CloudWatch ensuring security and scalability.',
        'Implemented real-time monitoring, auto-scaling groups, and cost optimization strategies.'
      ],
      emoji: '☁️'
    },
    {
      company: 'InternPe',
      position: 'Web Developer Intern',
      duration: 'Jan 2025 – Feb 2025',
      location: 'Remote',
      responsibilities: [
        'Contributed to web development projects using modern frameworks.',
        'Assisted in building responsive interfaces and debugging backend services.'
      ],
      emoji: '💻'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="experience" className="p-3 md:p-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="backdrop-blur-sm bg-black/30 rounded-2xl px-4 py-4 md:px-6 md:py-6 border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h2 className="font-montserrat font-bold text-base sm:text-lg text-text-light">Experience</h2>
          </motion.div>

          {/* Experience Cards */}
          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="group backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10 hover:border-secondary/30 transition-all duration-300"
                variants={cardVariants}
                whileHover={{ x: 8, borderColor: 'rgba(255, 99, 71, 0.4)' }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3">
                  {/* Left Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <motion.span
                        className="text-2xl"
                        animate={exp.current ? { y: [0, -5, 0] } : {}}
                        transition={{ duration: 1.5, repeat: exp.current ? Infinity : 0 }}
                      >
                        {exp.emoji}
                      </motion.span>
                      <div>
                        <h3 className="text-secondary text-lg font-bold flex items-center gap-2">
                          {exp.company}
                          {exp.current && (
                            <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full border border-green-500/30">
                              Current
                            </span>
                          )}
                        </h3>
                        <p className="text-text-light text-sm font-medium">{exp.position}</p>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <ul className="space-y-1.5 ml-10">
                      {exp.responsibilities.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          className="flex items-start gap-2 text-text-muted text-sm"
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.4 + index * 0.1 + itemIndex * 0.05 }}
                        >
                          <span className="text-secondary mt-0.5">▸</span>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Right - Duration & Location */}
                  <div className="flex flex-row lg:flex-col items-start lg:items-end gap-2 ml-10 lg:ml-0">
                    <span className="text-xs text-text-muted bg-white/5 px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-1.5">
                      <i className="fas fa-calendar-alt text-secondary text-[10px]"></i>
                      {exp.duration}
                    </span>
                    <span className="text-xs text-text-muted flex items-center gap-1">
                      <i className="fas fa-map-marker-alt text-tertiary text-[10px]"></i>
                      {exp.location}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;

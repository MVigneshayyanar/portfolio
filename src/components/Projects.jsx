import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const projects = [
    {
      title: 'MaxBillUp',
      description: 'A Flutter billing app for store owners to create invoices, manage staff, and print bills via Bluetooth-connected printers. Features role management and seamless printing integration.',
      githubUrl: 'https://github.com/MVigneshayyanar/MaxBillUp',
      tags: ['Flutter', 'Bluetooth', 'Billing'],
      emoji: '🧾'
    },
    {
      title: 'Harvest Hub',
      description: 'A Flutter app where donors can post extra food or items and others can easily view and collect them. Integrated with Firebase authentication and real-time database.',
      githubUrl: 'https://github.com/MVigneshayyanar/harvesthub.git',
      tags: ['Flutter', 'Firebase', 'Real-time'],
      emoji: '🌾'
    },
    {
      title: 'Attendance Management System',
      description: 'A Flutter + Firebase system for students and staff with role-based login, attendance tracking, notifications, and reports.',
      githubUrl: 'https://github.com/MVigneshayyanar/camsvirtusa.git',
      tags: ['Flutter', 'Firebase', 'Auth'],
      emoji: '📊'
    },
    {
      title: 'Contact Management App',
      description: 'Flutter app with Firebase backend that manages contacts, recent calls, dialer integration, and authentication (signup/login).',
      githubUrl: 'https://github.com/MVigneshayyanar/contactbook.git',
      tags: ['Flutter', 'Firebase', 'CRUD'],
      emoji: '📱'
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
    hidden: { opacity: 0, y: 30, rotateX: -10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="projects" className="p-3 md:p-4" ref={ref}>
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
            <h2 className="font-montserrat font-bold text-base sm:text-lg text-text-light">Projects</h2>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group backdrop-blur-sm bg-white/5 rounded-xl p-5 border border-white/10 hover:border-secondary/40 transition-all duration-300"
                variants={cardVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Emoji & Title */}
                <div className="flex items-center gap-3 mb-3">
                  <motion.span
                    className="text-2xl"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    {project.emoji}
                  </motion.span>
                  <h3 className="text-secondary text-lg font-bold">{project.title}</h3>
                </div>

                {/* Description */}
                <p className="text-text-muted text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      className="px-2.5 py-1 text-xs rounded-full bg-secondary/10 border border-secondary/20 text-secondary"
                      whileHover={{ scale: 1.1, borderColor: 'rgba(255, 99, 71, 0.5)' }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* GitHub Button */}
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-secondary text-white px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 hover:bg-tertiary hover:text-black"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fab fa-github"></i>
                  View on GitHub
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;

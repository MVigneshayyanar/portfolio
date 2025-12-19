import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const skills = [
    {
      name: 'Flutter & Dart',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
      description: 'Cross-platform mobile development',
      color: 'from-blue-500 to-cyan-400'
    },
    {
      name: 'Firebase',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
      description: 'Auth, Firestore, Realtime DB, Storage',
      color: 'from-orange-500 to-yellow-400'
    },
    {
      name: 'Git',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      description: 'Version control & collaboration',
      color: 'from-red-500 to-pink-400'
    },
    {
      name: 'UI/UX Design',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
      description: 'User interface & experience design',
      color: 'from-purple-500 to-indigo-400'
    },
    {
      name: 'AWS Cloud',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
      description: 'EC2, S3, Lambda, Deployment & Scaling',
      color: 'from-green-500 to-emerald-400'
    }
  ];

  const additionalTech = [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', gradient: 'from-blue-400 to-cyan-400' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', gradient: 'from-green-400 to-emerald-400' },
    { name: 'Postman', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg', gradient: 'from-orange-400 to-red-400' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', gradient: 'from-green-600 to-teal-600' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', gradient: 'from-cyan-400 to-blue-400' },
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', gradient: 'from-blue-600 to-purple-600' },
    { name: 'Android Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg', gradient: 'from-green-500 to-lime-500' },
  ];

  return (
    <section id="skills" className="p-3 md:p-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="backdrop-blur-sm bg-black/30 rounded-2xl px-4 py-6 md:px-6 md:py-8 border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h2 className="font-montserrat font-bold text-lg sm:text-xl text-text-light">
              Skills & Technologies
            </h2>
          </motion.div>

          {/* Main Skills Grid */}
          <div className="relative flex flex-wrap justify-center gap-6 md:gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
              >
                <div className="relative w-36 h-36 md:w-40 md:h-40 mx-auto">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-3xl rotate-12 group-hover:rotate-0 transition-transform duration-500`}></div>

                  {/* Card Content */}
                  <motion.div
                    className="relative bg-card-bg rounded-3xl p-4 md:p-6 h-full flex flex-col items-center justify-center border border-tertiary group-hover:border-transparent transition-all duration-500"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="mb-3 group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={skill.icon}
                        alt={`${skill.name} icon`}
                        className="w-10 h-10 md:w-12 md:h-12 object-contain filter brightness-110"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-text-light font-semibold text-xs md:text-sm text-center leading-tight">
                      {skill.name}
                    </h3>
                  </motion.div>

                  {/* Tooltip */}
                  <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                    {skill.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Technologies */}
          <motion.div
            className="mt-10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
              {additionalTech.map((tech, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`relative bg-gradient-to-r ${tech.gradient} p-0.5 rounded-2xl`}>
                    <div className="bg-card-bg rounded-2xl px-4 md:px-6 py-2 md:py-3 flex items-center space-x-2 md:space-x-3">
                      <img
                        src={tech.icon}
                        alt={`${tech.name} icon`}
                        className="w-5 h-5 md:w-6 md:h-6 object-contain group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                      <span className="text-text-light text-xs md:text-sm font-medium">
                        {tech.name}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

export default Skills;

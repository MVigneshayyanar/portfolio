import React from 'react';

function Skills() {
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

  return (
    <section id="skills" className="section-container">
      <h2 className="heading-primary text-center">
        Skills & Technologies
      </h2>
      
      {/* Hexagonal Grid */}
      <div className="relative flex flex-wrap justify-center gap-8 mt-12">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="group relative"
            style={{
              animationDelay: `${index * 0.2}s`,
              animation: 'fadeInUp 0.8s ease-out forwards'
            }}
          >
            {/* Hexagonal Background */}
            <div className="relative w-40 h-40 mx-auto">
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-3xl rotate-12 group-hover:rotate-0 transition-transform duration-500`}></div>
              
              {/* Card Content */}
              <div className="relative bg-card-bg rounded-3xl p-6 h-full flex flex-col items-center justify-center border border-tertiary group-hover:border-transparent transition-all duration-500 hover:scale-105">
                {/* Icon */}
                <div className="mb-3 group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={skill.icon} 
                    alt={`${skill.name} icon`}
                    className="w-12 h-12 object-contain filter brightness-110"
                    loading="lazy"
                  />
                </div>
                
                {/* Skill Name */}
                <h3 className="text-text-light font-semibold text-sm text-center leading-tight">
                  {skill.name}
                </h3>
              </div>
              
              {/* Tooltip */}
              <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                {skill.description}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Badges */}
     <div className="mt-116">
  <div className="flex flex-wrap justify-center items-center gap-4">
    {[
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', gradient: 'from-blue-400 to-cyan-400' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', gradient: 'from-green-400 to-emerald-400' },
      { name: 'Postman', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg', gradient: 'from-orange-400 to-red-400' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', gradient: 'from-green-600 to-teal-600' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', gradient: 'from-cyan-400 to-blue-400' },
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', gradient: 'from-blue-600 to-purple-600' },
      { name: 'Android Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg', gradient: 'from-green-500 to-lime-500' },
      
    ].map((tech, index) => (
      <div 
        key={index}
        className="group relative"
      >
        <div className={`relative bg-gradient-to-r ${tech.gradient} p-0.5 rounded-2xl hover:scale-105 transition-all duration-300`}>
          <div className="bg-card-bg rounded-2xl px-6 py-3 flex items-center space-x-3">
            <img 
              src={tech.icon} 
              alt={`${tech.name} icon`}
              className="w-6 h-6 object-contain group-hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />
            <span className="text-text-light text-sm font-medium">
              {tech.name}
            </span>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


    </section>
  );
}

export default Skills;

import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'Harvest Hub',
      description: 'A Flutter app where donors can post extra food or items and others can easily view and collect them. Integrated with Firebase authentication and real-time database.',
      githubUrl: 'https://github.com/MVigneshayyanar/harvesthub.git'
    },
    {
      title: 'Attendance Management System',
      description: 'A Flutter + Firebase system for students and staff with role-based login, attendance tracking, notifications, and reports.',
      githubUrl: 'https://github.com/MVigneshayyanar/camsvirtusa.git'
    },
    {
      title: 'Contact Management App',
      description: 'Flutter app with Firebase backend that manages contacts, recent calls, dialer integration, and authentication (signup/login).',
      githubUrl: 'https://github.com/MVigneshayyanar/contactbook.git'
    }
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="font-montserrat text-2xl md:text-3xl text-text-light border-b-2 border-secondary inline-block pb-2 mb-8">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="backdrop-blur-sm  p-8 rounded-xl border border-white/20 hover:border-secondary hover:-translate-y-2 hover:shadow-lg hover:shadow-secondary/30 transition-all duration-300 "
          >
            <h3 className="text-secondary text-xl font-semibold mb-4">{project.title}</h3>
            <p className="text-text-muted mb-6 leading-relaxed">{project.description}</p>
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-secondary text-white px-6 py-3 rounded-full font-bold transition-all duration-300 hover:bg-tertiary hover:text-black"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

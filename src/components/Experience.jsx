import React from 'react';

function Experience() {
  const experiences = [
    {
      company: 'Maestromind',
      position: 'Full Stack App Developer Intern',
      duration: 'Nov 2025 – Present · Remote',
      responsibilities: [
        'Developing full-stack web applications using modern technologies.',
        'Working on both frontend and backend development tasks.',
        'Collaborating with the team to deliver scalable solutions.'
      ]
    },
    {
      company: 'Ignito Corporation',
      position: 'Flutter App Developer Intern',
      duration: 'Jul 2025 – Aug 2025 · Remote',
      responsibilities: [
        'Developed mobile applications with Flutter and Firebase integration.',
        'Worked on real-time database, authentication, and UI/UX improvements.'
      ]
    },
    {
      company: 'Brainovision Solutions India Pvt. Ltd.',
      position: 'AWS Intern',
      duration: 'Feb 2025 – Jun 2025 · Remote',
      responsibilities: [
        'Created an AWS Cloud Resource Management System for automation and monitoring.',
        'Configured EC2, S3, Lambda, and CloudWatch ensuring security and scalability.',
        'Implemented real-time monitoring, auto-scaling groups, and cost optimization strategies.'
      ]
    },
    {
      company: 'InternPe',
      position: 'Web Developer Intern',
      duration: 'Jan 2025 – Feb 2025 · Remote',
      responsibilities: [
        'Contributed to web development projects using modern frameworks.',
        'Assisted in building responsive interfaces and debugging backend services.'
      ]
    }
  ];

  return (
    <section id="experience" className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="font-montserrat text-2xl md:text-3xl text-text-light border-b-2 border-secondary inline-block pb-2 mb-8">
        Experience
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="backdrop-blur-sm  p-8 rounded-xl border border-white/20 hover:border-secondary hover:-translate-y-2 hover:shadow-lg hover:shadow-secondary/30 transition-all duration-300 "
          >
            <h3 className="text-secondary text-xl font-semibold mb-2">{exp.company}</h3>
            <p className="text-text-muted mb-4">
              <strong className="text-text-light">{exp.position}</strong><br />
              {exp.duration}
            </p>
            <ul className="space-y-2">
              {exp.responsibilities.map((item, itemIndex) => (
                <li key={itemIndex} className="text-text-muted text-sm leading-relaxed">
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;

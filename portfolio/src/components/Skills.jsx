import React from 'react';

function Skills() {
  const skills = [
    'Flutter & Dart',
    'Firebase (Auth, Firestore, Realtime DB, Storage)',
    'Git',
    'UI/UX',
    'AWS (EC2, S3, Lambda, Deployment & Scaling)'
  ];

  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="font-montserrat text-2xl md:text-3xl text-text-light border-b-2 border-secondary inline-block pb-2 mb-8">
        Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="bg-card-bg p-8 rounded-xl border border-tertiary hover:border-secondary hover:-translate-y-2 hover:shadow-lg hover:shadow-secondary/30 transition-all duration-300 text-text-muted text-center font-medium"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

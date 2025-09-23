import React from 'react';

function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="font-montserrat text-2xl md:text-3xl text-text-light border-b-2 border-secondary inline-block pb-2 mb-8">
        About Me
      </h2>
      <p className="text-text-muted leading-relaxed text-base md:text-lg">
        I am a passionate <strong className="text-text-light">Flutter App Developer</strong> with expertise in building cross-platform mobile applications.  
        I specialize in <strong className="text-text-light">Flutter & Dart</strong> for app development and <strong className="text-text-light">Firebase</strong> for backend services like authentication, real-time databases, and storage.  
        Additionally, I have hands-on experience with <strong className="text-text-light">AWS</strong> where I worked on cloud resource management, automation, and scalability.
      </p>
    </section>
  );
}

export default About;

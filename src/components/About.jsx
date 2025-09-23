import React from 'react';

function About() {
  return (
    <section id="about" className="p-3 md:p-4">
      <div className="max-w-6xl mx-auto">
        <div className="backdrop-blur-sm bg-black/30 rounded-2xl px-4 py-3 md:px-6 md:py-4 border border-white/10">
          
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-4">
            <div>
              <h2 className="font-montserrat font-bold text-base sm:text-lg text-text-light">About Me</h2>

            </div>
          </div>
          
          {/* Content */}
          <div className="text-text-muted text-sm sm:text-base leading-relaxed">
            I am a passionate <strong className="text-secondary">Flutter App Developer</strong> with expertise in building cross-platform mobile applications.
            I specialize in <strong className="text-tertiary">Flutter & Dart</strong> for app development and <strong className="text-tertiary">Firebase</strong> for backend services like authentication, real-time databases, and storage.
            Additionally, I have hands-on experience with <strong className="text-tertiary">AWS</strong> where I worked on cloud resource management, automation, and scalability.
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;

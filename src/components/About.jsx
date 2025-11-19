import React from 'react';

function About() {
  return (
    <section id="about" className="p-3 md:p-4">
      <div className="max-w-6xl mx-auto">
        <div className="backdrop-blur-sm bg-gray-200/90 dark:bg-black/30 rounded-2xl px-4 py-3 md:px-6 md:py-4 border border-gray-300 dark:border-white/10 shadow-lg dark:shadow-none">
          
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-4">
            <div>
              <h2 className="font-montserrat font-bold text-base sm:text-lg text-light-secondary dark:text-text-light">About Me</h2>

            </div>
          </div>
          
          {/* Content */}
          <div className="text-gray-700 dark:text-text-muted text-sm sm:text-base leading-relaxed">
            I am a passionate <strong className="text-light-primary dark:text-secondary">Flutter App Developer</strong> with expertise in building cross-platform mobile applications.
            I specialize in <strong className="text-light-primary dark:text-tertiary">Flutter & Dart</strong> for app development and <strong className="text-light-primary dark:text-tertiary">Firebase</strong> for backend services like authentication, real-time databases, and storage.
            Additionally, I have hands-on experience with <strong className="text-light-primary dark:text-tertiary">AWS</strong> where I worked on cloud resource management, automation, and scalability.
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;

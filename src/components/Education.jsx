import React from 'react';

function Education() {
  const educationData = [
    {
      institution: 'Sri Sairam Engineering College',
      degree: 'M.Tech in Computer Science and Engineering (Integrated 5-Year)',
      year: '2023 – 2028'
    },
    {
      institution: 'Little Flower Matric. Hr. Sec. School',
      degree: '12th Standard',
      year: '2023'
    },
    {
      institution: 'Little Flower Matric. Hr. Sec. School',
      degree: '10th Standard',
      year: '2021'
    }
  ];

  return (
    <section id="education" className="sticky top-0 z-50 p-3 md:p-4">
      <div className="max-w-6xl mx-auto">
        <div className="backdrop-blur-sm bg-black/30 rounded-2xl px-4 py-3 md:px-6 md:py-4 border border-white/10">
          
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-4">
            <div>
              <h2 className="font-montserrat font-bold text-sm sm:text-base text-text-light">Education</h2>
              <p className="text-xs text-tertiary">Academic Background</p>
            </div>
          </div>
          
          {/* Education Content */}
          <div className="space-y-4">
            {educationData.map((edu, index) => (
              <div 
                key={index}
                className="backdrop-blur-sm bg-white/5 rounded-xl px-4 py-3 border border-white/10 hover:border-secondary/50 transition-all duration-300 hover:bg-white/10"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm sm:text-base text-text-light mb-1">
                      {edu.institution}
                    </h3>
                    <p className="text-text-muted text-xs sm:text-sm">
                      {edu.degree}
                    </p>
                  </div>
                  <div className="text-secondary font-medium text-xs sm:text-sm bg-secondary/10 px-3 py-1 rounded-full border border-secondary/30">
                    {edu.year}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Education;

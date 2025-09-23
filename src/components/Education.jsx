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
    <section id="education" className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="font-montserrat text-2xl md:text-3xl text-text-light border-b-2 border-secondary inline-block pb-2 mb-8">
        Education
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border border-tertiary rounded-lg overflow-hidden">
          <thead className="bg-card-bg">
            <tr>
              <th className="px-4 py-4 text-left text-secondary font-bold border-b-2 border-secondary">Institution</th>
              <th className="px-4 py-4 text-left text-secondary font-bold border-b-2 border-secondary">Degree</th>
              <th className="px-4 py-4 text-left text-secondary font-bold border-b-2 border-secondary">Year</th>
            </tr>
          </thead>
          <tbody>
            {educationData.map((edu, index) => (
              <tr key={index} className="border-b border-gray-700 last:border-b-0">
                <td className="px-4 py-4 text-text-muted">{edu.institution}</td>
                <td className="px-4 py-4 text-text-muted">{edu.degree}</td>
                <td className="px-4 py-4 text-text-muted">{edu.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Education;

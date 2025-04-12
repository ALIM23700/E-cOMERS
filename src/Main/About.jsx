import React from 'react';
import final from '../Images/final.jpg';
import Limon from '../Images/Limon.jpg';
import Rifat from '../Images/Rifat.jpg';

const About = () => {
  const team = [
    {
      name: 'Md Abdul Alim',
      role: 'Project Manager',
      image: final,
      intro: 'I love building sleek and user-friendly interfaces with React and Tailwind CSS.',
    },
    {
      name: 'Md. Rafsan Zani',
      role: 'Developer-1',
      image: Limon,
      intro: 'Always passionate about creating seamless user journeys and smart designs.',
    },
    {
      name: 'Rifat Zaman',
      role: 'Developer-2',
      image: Rifat,
      intro: 'Ensuring everything runs smoothly and our customers are happy every day.',
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">Meet Our Team</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-2xl shadow-2xl drop-shadow-2xl flex flex-col items-center transition-all duration-300 hover:scale-[1.03]"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-48 h-48 object-cover rounded-full shadow-md mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-800">{member.name}</h2>
            <p className="text-indigo-600 font-medium mb-2">{member.role}</p>
            <p className="text-gray-700 text-center">{member.intro}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;

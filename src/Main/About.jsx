import React from 'react';
import final from '../Images/final.jpg';

const About = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">About Me</h1>

      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-6 bg-gray-100 p-6 rounded-2xl shadow-2xl drop-shadow-2xl transition-all duration-300 hover:scale-[1.02]">
        <img
          src={final}
          alt="My profile"
          className="w-64 h-64 object-cover rounded-2xl shadow-md"
        />

        <div className="text-gray-700">
          <h2 className="text-2xl font-semibold mb-2">Hi, I'm Abdul Alim 👋</h2>
          <p className="mb-2">
            I'm the creator of this e-commerce website. I love building sleek and user-friendly interfaces with React and Tailwind CSS.
          </p>
          <p className="mb-2">
            This platform is designed to give users a smooth and enjoyable shopping experience. I’m constantly learning and improving my web development skills to bring the best to you.
          </p>
          <p>
            Thanks for visiting my site — I hope you enjoy shopping here as much as I enjoyed building it!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

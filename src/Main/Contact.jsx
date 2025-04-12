import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>

      <div className="bg-gray-100 p-6 rounded-2xl shadow-2xl drop-shadow-2xl w-full max-w-2xl space-y-4 transition-all duration-300 hover:scale-[1.02]">
        <div className="flex items-center space-x-4">
          <FaEnvelope className="text-blue-600 text-2xl" />
          <span className="text-lg text-gray-700">abdulalim23700@gmail.com</span>
        </div>

        <div className="flex items-center space-x-4">
          <FaPhone className="text-green-600 text-2xl" />
          <span className="text-lg text-gray-700">01791723700</span>
        </div>

        <p className="mt-6 text-gray-600">
          Feel free to reach out with any questions, feedback, or business inquiries. We're here to help!
        </p>
      </div>
    </div>
  );
};

export default Contact;

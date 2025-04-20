import React, { useState } from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      // Here, you'd typically send this data to your server or email service
      console.log('Feedback sent:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>

      <div className="bg-gray-100 p-6 rounded-2xl shadow-2xl drop-shadow-2xl w-full max-w-2xl transition-all duration-300 hover:scale-[1.02] space-y-6">
        <div className="flex items-center space-x-4">
          <FaEnvelope className="text-blue-600 text-2xl" />
          <span className="text-lg text-gray-700">abdulalim23700@gmail.com</span>
        </div>

        <div className="flex items-center space-x-4">
          <FaPhone className="text-green-600 text-2xl" />
          <span className="text-lg text-gray-700">01791723700</span>
        </div>

        <p className="text-gray-600">
          Feel free to reach out with any questions, feedback, or business inquiries. We're here to help!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>

          {submitted && (
            <p className="text-green-600 text-center pt-2">Thanks for your feedback!</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;

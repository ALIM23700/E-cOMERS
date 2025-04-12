import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white  py-6  mt-12 w-ful">
      <div className="w-full text-center">
        <div className="flex justify-center space-x-8 mb-4">
          <a href="#" className="hover:text-red-500">About Us</a>
          <a href="#" className="hover:text-red-500">Contact</a>
          <a href="#" className="hover:text-red-500">Privacy Policy</a>
          <a href="#" className="hover:text-red-500">Terms of Service</a>
        </div>
        <div className="mb-4">
          <p className="text-sm">&copy; 2025 E-tech. All Rights Reserved.</p>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-2xl hover:text-red-500"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="text-2xl hover:text-red-500"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-2xl hover:text-red-500"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-2xl hover:text-red-500"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


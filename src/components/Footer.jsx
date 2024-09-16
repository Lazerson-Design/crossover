import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-6 text-center">
      {/* Social Icons */}
      <div className="mb-4">
        <a href="https://twitter.com" className="text-gray-500 mx-2 hover:text-gray-700">
          <i className="fab fa-twitter fa-lg"></i>
        </a>
        <a href="https://facebook.com" className="text-gray-500 mx-2 hover:text-gray-700">
          <i className="fab fa-facebook-f fa-lg"></i>
        </a>
        <a href="https://dribbble.com" className="text-gray-500 mx-2 hover:text-gray-700">
          <i className="fab fa-dribbble fa-lg"></i>
        </a>
        <a href="https://instagram.com" className="text-gray-500 mx-2 hover:text-gray-700">
          <i className="fab fa-instagram fa-lg"></i>
        </a>
      </div>
      
      
      <p className="text-gray-600">
        2023-2024 © crossover. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;



import React from 'react';

const ContactForm = () => {
  return (
    <div className="bg-gray-100 p-8 flex flex-col lg:flex-row justify-between items-start">
      
      <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h2 className="text-3xl font-bold mb-4">Contact Info:</h2>
        <p className="text-gray-700 mb-4">
          Praesent interdum congue mauris, et fringilla lacus pel vitae. 
          Quisque nisl mauris, aliquam eu ultrices vel, 
          conse vitae sapien at imperdiet risus.
        </p>
        <ul>
          <li className="mb-2">
            <span className="font-bold">Address:</span> 123 Street Name, City, Germany
          </li>
          <li className="mb-2">
            <span className="font-bold">Phone:</span> +49 123 456 789
          </li>
          <li className="mb-2">
            <span className="font-bold">Email:</span> info@Example.com
          </li>
          <li>
            <span className="font-bold">Fax:</span> +49 123 456 789
          </li>
        </ul>
      </div>

      
      <div className="lg:w-1/2 w-full">
        <form className="grid grid-cols-1 gap-4">
          <div className="flex space-x-4">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          <input 
            type="text" 
            placeholder="Your Title" 
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
          />

          <textarea 
            placeholder="Your Comment" 
            rows="4" 
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
          ></textarea>

          <button 
            type="submit" 
            className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

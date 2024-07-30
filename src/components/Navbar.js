import React from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import logo from './logo1.png'; // Import the new image with transparent background

const Navbar = ({ isDarkMode, toggleTheme, isGuest }) => {
  return (
    <nav className={`shadow-md ${isDarkMode ? 'bg-gradient-to-r from-gray-800 to-gray-900' : 'bg-gradient-to-r from-gray-200 to-gray-300'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Left Content: Logo and Navigation Links */}
          <div className="flex items-center">
            <a href="/home" className="flex items-center">
              <span className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>InsightInk</span>
              <img src={logo} alt="Logo" className="h-10 w-10 ml-3.5" /> {/* Adjust the height and width as needed */}

            </a>
            <div className="flex space-x-4 ml-4">
              <a href="/home" className={`px-3 py-2 rounded-md text-sm font-medium ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`}>Home</a>
              <a href="/blogs" className={`px-3 py-2 rounded-md text-sm font-medium ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`}>Blogs</a>
              <a href="/about" className={`px-3 py-2 rounded-md text-sm font-medium ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`}>About</a>
              <a href="/contact" className={`px-3 py-2 rounded-md text-sm font-medium ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`}>Contact</a>
            </div>
          </div>

          {/* Right Content: Action Buttons and Dark Mode */}
          <div className="flex items-center space-x-4">
            <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-6 rounded">
              Create Blog
            </button>
            <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-6 rounded">
              Your Blogs
            </button>
            <div onClick={toggleTheme} className="cursor-pointer">
              {isDarkMode ? (
                <MdLightMode className="text-gray-300 text-2xl hover:text-white" />
              ) : (
                <MdDarkMode className="text-gray-700 text-2xl hover:text-black" />
              )}
            </div>
            {!isGuest && (
              <a href="/" className={`px-3 py-2 rounded-md text-sm font-medium ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`}>Logout</a>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

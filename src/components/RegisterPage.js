import React, { useState } from 'react';
import { MdEmail } from "react-icons/md"; // Import the email icon
import { RiLockPasswordFill } from "react-icons/ri"; // Import the password icon
import { CgProfile } from "react-icons/cg"; // Import the profile icon
import { registerUser } from './api';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import pen1 from './pen1.jpg'; // Import the background image

const RegisterPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const [registerData, setRegisterData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(registerData.username, registerData.email, registerData.password); // Pass entire registerData object to registerUser
      console.log('Registration successful:', response);
      // Handle success (e.g., redirect to homepage)
      navigate('/'); // Navigate to homepage after successful registration
    } catch (error) {
      console.error('Registration failed:', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${pen1})`, backdropFilter: 'blur(5px)' }}>
      <div className="w-full max-w-md bg-white bg-opacity-20 p-8 rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105 " style={{ backdropFilter: 'blur(10px)' }}>
        <h2 className="text-3xl font-extrabold text-center mb-6 text-white">Create Account</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-white font-medium">Username</label>
            <div className="flex items-center border border-gray-300 rounded-md focus-within:border-gray-500 bg-white bg-opacity-50">
              <CgProfile className="text-gray-400 ml-2" />
              <input
                type="text"
                id="username"
                className="w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 bg-transparent"
                placeholder="Enter your username"
                value={registerData.username}
                onChange={(e) => setRegisterData({ ...registerData, username: e.target.value })}
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white font-medium">Email</label>
            <div className="flex items-center border border-gray-300 rounded-md focus-within:border-gray-500 bg-white bg-opacity-50">
              <MdEmail className="text-gray-400 ml-2" />
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 bg-transparent"
                placeholder="Enter your email"
                value={registerData.email}
                onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-white font-medium">Password</label>
            <div className="flex items-center border border-gray-300 rounded-md focus-within:border-gray-500 bg-white bg-opacity-50">
              <RiLockPasswordFill className="text-gray-400 ml-2" />
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 bg-transparent"
                placeholder="Enter your password"
                value={registerData.password}
                onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                required
              />
            </div>
          </div>
          <button type="submit" className="w-full bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded flex items-center justify-center space-x-2 focus:outline-none transition duration-300 transform hover:scale-105">
            <span>Register</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;

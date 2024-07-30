import React, { useState } from 'react';
import { MdEmail } from "react-icons/md"; // Import the email icon
import { RiLockPasswordFill } from "react-icons/ri"; // Import the password icon
import { IoLogIn } from 'react-icons/io5'; // Import the login icon
import { loginUser, guestLogin } from './api';
import { useNavigate } from 'react-router-dom';
import pen1 from './pen1.jpg'; // Import the new background image
import { authenticateGuest } from './auth.js'; // Adjust the import based on your file structure

const LoginPage = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(loginData.email, loginData.password);
      console.log('Login successful:', response);
      navigate('/home');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleGuestSignIn = async () => {
    try {
      const response = await guestLogin();
      console.log('Guest sign-in successful:', response);
      navigate('/home');
    } catch (error) {
      console.error('Guest sign-in failed:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${pen1})`, backdropFilter: 'blur(5px)' }}>
      <div className="max-w-md w-full bg-white bg-opacity-20 p-8 rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105" style={{ backdropFilter: 'blur(10px)' }}>
        <h2 className="text-3xl font-extrabold text-center mb-6 text-white">Welcome Back!</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white font-medium">Email</label>
            <div className="flex items-center border border-gray-300 rounded-md focus-within:border-gray-500 bg-white bg-opacity-50">
              <MdEmail className="text-gray-400 ml-2" />
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 bg-transparent"
                placeholder="Enter your email"
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
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
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                required
              />
            </div>
          </div>
          <button type="submit" className="w-full bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded flex items-center justify-center space-x-2 focus:outline-none transition duration-300 transform hover:scale-105">
            <span>Login</span>
            <IoLogIn /> {/* Include the login icon */}
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-black-200">or</p>
          <button
            onClick={handleGuestSignIn}
            className="text-black underline hover:no-underline focus:outline-none transition duration-300 transform hover:scale-105"
          >
            Sign in as Guest
          </button>
        </div>
        <div className="mt-4 text-center">
          <p className="text-black-200">Don't have an account?</p>
          <button
            onClick={() => navigate('/register')}
            className="text-black underline hover:no-underline focus:outline-none transition duration-300 transform hover:scale-105"
          >
            Create an Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

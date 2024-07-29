import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';

const App = () => {
  const [isGuest, setIsGuest] = useState(false); // Set this based on your login logic
  const [isDarkMode, setIsDarkMode] = useState(true);
  const location = useLocation();

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className={`flex flex-col min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      {/* Conditionally render the Navbar based on the current route */}
      {location.pathname === '/home' && <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} isGuest={isGuest} />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LoginPage setIsGuest={setIsGuest} />} />
          <Route path="/login" element={<LoginPage setIsGuest={setIsGuest} />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<HomePage isDarkMode={isDarkMode} />} />
        </Routes>
      </main>
    </div>
  );
};

// Wrap the App component in Router
const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;

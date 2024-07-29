// auth.js

// Function to simulate user authentication with a token
export const authenticateUser = (token) => {
    localStorage.setItem('token', token); // Store token in localStorage
  };
  
  // Function to check if the user is authenticated
  export const isLoggedIn = () => {
    return !!localStorage.getItem('token'); // Return true if token exists
  };
  
  // Function to log out the user
  export const logoutUser = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
  };
  
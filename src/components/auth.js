// Function to simulate user authentication with a token
export const authenticateUser = (token) => {
  localStorage.setItem('token', token); // Store token in localStorage
  localStorage.setItem('isGuest', 'false'); // Store guest status
};

// Function to simulate guest login
export const authenticateGuest = () => {
  localStorage.setItem('token', 'guest_token'); // Store guest token in localStorage
  localStorage.setItem('isGuest', 'true'); // Store guest status
};

// Function to check if the user is authenticated
export const isLoggedIn = () => {
  return !!localStorage.getItem('token'); // Return true if token exists
};

// Function to check if the user is a guest
export const isGuest = () => {
  return localStorage.getItem('isGuest') === 'true'; // Return true if guest status is true
};

// Function to log out the user
export const logoutUser = () => {
  localStorage.removeItem('token'); // Remove token from localStorage
  localStorage.removeItem('isGuest'); // Remove guest status from localStorage
};

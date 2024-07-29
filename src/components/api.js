// src/components/api.js

const API_URL = 'http://localhost:5000/api/auth'; // Replace with your backend URL

// Function to handle user login
export const loginUser = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

// Function to handle user registration
// api.js

export const registerUser = async (username , email , password) => {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username , email , password}),
    });

    if (!response.ok) {
      throw new Error('Registration failed');
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};
// Function to handle guest login
export const guestLogin = async () => {
  try {
    const response = await fetch(`${API_URL}/guest`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error with guest login:', error);
    throw error;
  }
};

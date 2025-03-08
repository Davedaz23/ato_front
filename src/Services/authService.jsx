import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email'); // Assuming email is also stored in localStorage
 console.log("here it is");
    console.log(email);
    if (token && email) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      fetchUser(email); // Pass the email to the fetchUser function
    } else {
      console.error('No token or email found');
      setUser(null); // Set user to null if either token or email is missing
    }
  }, []);
  

  const fetchUser = async (email) => {
    try {
      const response = await axios.get(`/api/auth/me?email=${email}`);
      setUser(response.data.user);
    } catch (err) {
      console.error('Failed to fetch user', err);
      localStorage.removeItem('token');
      setUser(null);
    }
  };
  

  const login = async (email, password) => {
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      setUser(response.data.user); // Set user after successful login
    } catch (err) {
      console.error('Login failed', err);
      throw err;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };

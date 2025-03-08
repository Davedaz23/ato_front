import React, { createContext, useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { api } from '../api';

// Create the AuthContext
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const idleTimeoutRef = useRef(null); // Reference to store the timeout

  const idleLogoutTimeout = 5 * 60 * 1000; // 5 minutes in milliseconds

  // Function to reset the idle timer
  const resetIdleTimer = () => {
    if (idleTimeoutRef.current) {
      clearTimeout(idleTimeoutRef.current);
    }
    // Set a new timeout for 5 minutes of inactivity
    idleTimeoutRef.current = setTimeout(() => {
      console.log('User is idle, logging out');
      logout();
    }, idleLogoutTimeout);
  };

  // Add event listeners to reset the timer on any user activity
  useEffect(() => {
    const events = ['mousemove', 'keydown', 'click', 'touchstart']; // Events that indicate user activity

    const handleActivity = () => {
      resetIdleTimer(); // Reset the idle timer on activity
    };

    events.forEach(event => {
      window.addEventListener(event, handleActivity);
    });

    // Clean up the event listeners on component unmount
    return () => {
      events.forEach(event => {
        window.removeEventListener(event, handleActivity);
      });
      if (idleTimeoutRef.current) {
        clearTimeout(idleTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');

    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      if (!storedUser) {
        fetchUser(token); // Fetch user if not in localStorage
      } else {
        setUser(JSON.parse(storedUser));
        setIsLoading(false); // Done loading when user is set from localStorage
      }
    } else {
      setIsLoading(false); // Done loading if no token
    }

    // Set an interval to regularly check for token expiration
    const checkTokenInterval = setInterval(() => {
      if (token && isTokenExpired(token)) {
        console.log('Token expired, logging out');
        logout();
      }
    }, 10000); // Check every 10 seconds (adjust as needed)

    return () => clearInterval(checkTokenInterval); // Clear the interval on component unmount
  }, []);

  // Fetch the authenticated user's data using the token
  const fetchUser = async (token) => {
    try {
      const response = await api.post('/auth/me'); // API call to fetch user data
      setUser(response.data.user);
      localStorage.setItem('user', JSON.stringify(response.data.user)); // Save user data in localStorage
    } catch (err) {
      console.error('Failed to fetch user', err);
      logout(); // Optional: log out if fetching fails
    } finally {
      setIsLoading(false); // Stop loading once the process completes
    }
  };

  // Check if the token is expired
  const isTokenExpired = (token) => {
    if (!token) return true;
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return Date.now() >= payload.exp * 1000; // Check expiration against the current time
    } catch (error) {
      console.error('Failed to decode token', error);
      return true; // Consider token invalid if decoding fails
    }
  };

  // Login function
  const login = async (email, password) => {
    try {
      const response = await api.post('/auth/login', { email, password }, {
        timeout: 5000 // Set timeout to 5 seconds
      });
      const { token, user } = response.data;

      // Store token and user data in localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      // Set token in axios headers
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      // Update user state
      setUser(user);

      resetIdleTimer(); // Reset idle timer after login
    } catch (err) {
      console.error('Login failed', err);
      throw err;
    }
  };

  // Logout function
  const logout = () => {
    console.log('Logging out');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    delete axios.defaults.headers.common['Authorization']; // Remove token from headers
    if (idleTimeoutRef.current) {
      clearTimeout(idleTimeoutRef.current); // Clear the idle timer on logout
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

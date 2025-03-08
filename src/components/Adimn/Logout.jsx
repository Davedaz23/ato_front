import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead
import { AuthContext } from '../../Context/AuthContext';
const Logout = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate(); // Use useNavigate

  useEffect(() => {
    logout(); // Call the logout function
    navigate('//'); // Redirect to the login page or homepage
  }, [logout, navigate]);

  return null; // This component doesn't need to render anything
};

export default Logout;

// src/components/Navbar.js
import React, { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white">My Blog</Link>
        <div>
          {user ? (
            <>
              <span className="text-white">Welcome, {user.username}</span>
              <button onClick={logout} className="ml-4 text-white">Logout</button>
            </>
          ) : (
            <Link to="/login" className="text-white">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

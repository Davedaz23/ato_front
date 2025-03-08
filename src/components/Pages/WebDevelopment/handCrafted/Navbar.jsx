import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white text-lg font-bold">Ethiopian Cloths</Link>
        <div>
          <Link to="/" className="text-gray-300 hover:text-white px-4">Home</Link>
          <Link to="/products" className="text-gray-300 hover:text-white px-4">Products</Link>
          <Link to="/cart" className="text-gray-300 hover:text-white px-4">Cart</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

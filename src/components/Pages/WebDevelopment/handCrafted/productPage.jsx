import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProductPage = ({ product }) => {
  return (
    <div>
      <Navbar />
      <div className="p-4">
        <img src={product.image} alt={product.name} className="w-full h-96 object-cover" />
        <h2 className="text-2xl font-bold">{product.name}</h2>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-gray-900 font-bold mt-2">${product.price}</p>
        <button className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded">
          Add to Cart
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;

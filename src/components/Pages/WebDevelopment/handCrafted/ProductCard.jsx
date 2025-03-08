import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="p-4 border rounded shadow-sm">
      <img src={product.image} alt={product.name} className="w-full h-60 object-cover" />
      <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-gray-900 font-bold mt-2">${product.price}</p>
      <button
        onClick={() => onAddToCart(product)}
        className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CartPage = () => {
  // Assume you have cart items from context or state
  const cartItems = []; // Replace with your cart items logic

  return (
    <div>
      <Navbar />
      <h1 className="text-3xl font-bold text-center my-4">Your Cart</h1>
      <div className="p-4">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="flex justify-between border-b py-2">
              <span>{item.name}</span>
              <span>${item.price}</span>
            </div>
          ))
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;

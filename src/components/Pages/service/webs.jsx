// src/components/Webs.js
import React from 'react';
import { Link } from 'react-router-dom';
import hb2 from '../../../assets/img/hb2.jfif';
import hb3 from '../../../assets/img/hb3.jfif';
import hb4 from '../../../assets/img/hb4.jfif';
import hero from '../../../assets/img/habesha3.jpg';
import cus from '../../../assets/img/customer.png';

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    name: 'Amina Tesfaye',
    feedback: 'The quality of the cloths is amazing! Highly recommend this shop.',
  },
  {
    id: 2,
    name: 'Samuel Abebe',
    feedback: 'Fast delivery and excellent customer service.',
  },
  {
    id: 3,
    name: 'Marta Kedir',
    feedback: 'I love my new traditional dress! It fits perfectly.',
  },
];

// Sample team members data
const teamMembers = [
  {
    id: 1,
    name: 'Defar Gobeze',
    role: 'Founder & Developer',
    image: cus, // Add team member images
  },
  {
    id: 2,
    name: 'Abel Mindaye',
    role: 'Founder & Marketing Specialist',
    image: cus,
  },
  {
    id: 3,
    name: 'Eyob Wondimu',
    role: 'Founder & Designer',
    image: cus,
  },
];

const Webs = () => {
  const products = [
    {
      id: 1,
      name: 'Ethiopian Handwoven Cloth',
      price: 'ETB 2,000',
      description: 'Beautiful handwoven Ethiopian cloth, perfect for traditional occasions.',
      image: hb2,
    },
    {
      id: 2,
      name: 'Colorful Cotton Wrap',
      price: 'ETB 1,500',
      description: 'A colorful cotton wrap for everyday wear.',
      image: hb3,
    },
    {
      id: 3,
      name: 'Elegant Traditional Dress',
      price: 'ETB 3,500',
      description: 'An elegant traditional dress with intricate patterns.',
      image: hb4,
    },
  ];

  return (
    <div className="bg-gray-50 h-auto w-full overflow-hidden">
    {/* Navbar */}
    <nav className="bg-green-700 p-4 rounded-t-lg w-full">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Traditional Cloth Shop</h1>
        <div className="flex flex-wrap">
          <Link to="/" className="text-white mx-2 hover:underline">Home</Link>
          <Link to="/about" className="text-white mx-2 hover:underline">About Us</Link>
          <Link to="/contact" className="text-white mx-2 hover:underline">Contact</Link>
          <Link to="/faq" className="text-white mx-2 hover:underline">FAQ</Link>
        </div>
      </div>
    </nav>
  
    {/* Hero Section */}
    <header className="w-full bg-center bg-cover h-64" style={{ backgroundImage: `url(${hero})` }}>
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        <h2 className="text-white text-3xl font-bold text-center px-4">
          Explore Our Handcrafted Traditional Cloths
        </h2>
      </div>
    </header>
  
    {/* Main Content */}
    <main className="p-4 md:p-8">
      <h2 className="text-2xl font-semibold mb-4">Our Products</h2>
      
      {/* Fix Grid Layout Overflow */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded shadow-md bg-white overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-green-700 font-semibold">{product.price}</p>
              <button className="mt-2 w-full bg-green-600 text-white py-2 rounded hover:bg-green-500">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
  
      {/* Testimonials Section */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Customer Testimonials</h2>
        <div className="flex flex-col space-y-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="p-4 border rounded shadow">
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-gray-600">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </section>
  
      {/* Meet the Team Section */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div key={member.id} className="border rounded shadow-md bg-white overflow-hidden">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  
    {/* Footer */}
    <footer className="bg-green-700 p-6 mt-8 rounded-b-lg w-full">
      <p className="text-white text-center">
        &copy; 2024 Traditional Cloth Shop. All rights reserved.
      </p>
    </footer>
  </div>
  
  );
};

export default Webs;

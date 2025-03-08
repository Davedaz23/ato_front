import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <header className="bg-cover h-64" style={{ backgroundImage: "url('your-image-url.jpg')" }}>
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <h1 className="text-white text-4xl">Welcome to Ethiopian Handcrafted Cloths</h1>
        </div>
      </header>
      <Footer />
    </div>
  );
};

export default Home;

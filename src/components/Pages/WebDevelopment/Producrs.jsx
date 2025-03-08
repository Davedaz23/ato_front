import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import Loading from '../components/Loading';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      // Replace with your API URL
      const response = await fetch('https://api.example.com/products');
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    // Handle adding to cart (you can use context or state management here)
    console.log('Added to cart:', product);
  };

  return (
    <div>
      <Navbar />
      <h1 className="text-3xl font-bold text-center my-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {loading ? (
          <Loading />
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
          ))
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Products;

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUp } from '@fortawesome/free-solid-svg-icons';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Detect scroll position for button visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 100); // Show button after 100px scroll
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to avoid memory leaks
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
  className={`fixed bottom-4 right-4 bg-gradient-to-r from-cyan-700 via-cyan-300 to-cyan-700 shadow-lg text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none ${isVisible ? 'opacity-100' : 'opacity-0 transition-opacity duration-300 ease-in-out'}`}
  onClick={scrollToTop}
  aria-label="Scroll to Top"
>
  <FontAwesomeIcon icon={faCircleUp} className='text-xxl text-gray-700 font-bold' />
</button>
  );
};

export default BackToTop;

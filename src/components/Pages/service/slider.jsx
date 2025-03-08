import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import dev from "../../../assets/img/dev.png"; // Replace with your actual image path
import Webs from "./webs"; // Adjust path for your Webs component

export default function SimpleSlider() {
  const slides = [
    {
      content: (
        <div className="w-full h-full flex items-start justify-center">
          <img src={dev} alt="Web Development" className="w-full h-auto object-contain" />
        </div>
      )
    }
,    
    { content: <div className="h-auto overflow-y-auto p-4"><Webs /></div> },
   
    { content: <div className="flex items-center justify-center h-64 bg-gray-100"><h2 className="text-3xl font-bold text-center">Our Services</h2></div> },
    { content: <img src="https://via.placeholder.com/800x400" alt="Placeholder Image" className="w-full h-full object-cover" /> },
    { content: <div className="bg-blue-200 p-4"><h3 className="text-xl font-semibold">More Information</h3><p>This slide contains some more information about our services.</p></div> },
    {
      content: (
        <div className="h-full overflow-auto">
          <iframe
            src="https://www.example.com"
            title="Another Embedded Website"
            className="w-full h-96 border border-gray-300 rounded-lg"
          />
        </div>
      )
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-[800px] overflow-hidden"> {/* Set a fixed height */}
  {/* Slides Container */}
  <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
    {slides.map((slide, index) => (
      <div key={index} className="w-full flex-shrink-0">{slide.content}</div>
    ))}
  </div>

  {/* Navigation Buttons (Properly Centered) */}
  <button 
    onClick={prevSlide} 
    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#FD5F20] text-white p-3 rounded-full shadow-lg"
  >
    <FaChevronLeft className="text-gray-100 text-3xl" />
  </button>

  <button 
    onClick={nextSlide} 
    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#FD5F20] text-white p-3 rounded-full shadow-lg"
  >
    <FaChevronRight className="text-gray-100 text-3xl" />
  </button>

  {/* Dots Navigation */}
  <div className="absolute bottom-4 w-full flex justify-center space-x-2">
    {slides.map((_, index) => (
      <button key={index} onClick={() => setCurrentSlide(index)} className={`h-2 w-2 rounded-full ${currentSlide === index ? "bg-[#FD5F20]" : "bg-gray-300"}`}></button>
    ))}
  </div>
</div>

  );
}

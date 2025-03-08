import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import abstracts from '../assets/img/abstracts.jpg';
import ato from '../assets/img/ato.jpg';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState([
    {
      id: 1,
      imageUrl: abstracts,
      label: "First slide label",
      content: "Some representative placeholder content for the first slide.",
    },
    {
      id: 2,
      imageUrl: ato,
      label: "Second slide label",
      content: "Some representative placeholder content for the second slide.",
    },
    {
      id: 3,
      imageUrl: ato,
      label: "Third slide label",
      content: "Some representative placeholder content for the third slide.",
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full overflow-hidden">
      {slides.map((slide, index) => (
        <Transition
          as="div"
          key={slide.id}
          show={currentSlide === index}
          enter="transition-opacity duration-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-1000"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className="absolute top-0 left-0 w-full h-full"
        >
          <img src={slide.imageUrl} alt={`Slide ${slide.id}`} className="block w-full" />
          <div className="absolute inset-x-0 bottom-5 py-5 text-center text-white">
            <h5 className="text-xl">{slide.label}</h5>
            <p>{slide.content}</p>
          </div>
        </Transition>
      ))}
    </div>
  );
};

export default Carousel;

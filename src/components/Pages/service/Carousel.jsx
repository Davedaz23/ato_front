import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import dev from '../../../assets/img/dev.png'; // Update with your actual image path
import Webs from './webs'; // Ensure the path to your Webs component is correct
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'; // Import chevron icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import SimpleSlider from './slider';
const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null); // Create a reference to the Slider

    // Create an array of your slides
    const slides = [
        { content: <img src={dev} alt="Web Development" /> },
        { content: <div className="h-auto overflow-y-auto p-4"><Webs /></div> }, // Add overflow handling here
        {
            content: (
                <div className="h-auto overflow-auto">
                    <iframe
                        src="https://atocreative.et" // Replace with the URL of the website you want to display
                        title="Embedded Website"
                        className="w-full h-auto border border-gray-300 rounded-lg"
                    />
                </div>
            )
        },
        // New slide with text content
        { content: <div className="flex items-center justify-center h-full bg-gray-100"><h2 className="text-3xl font-bold text-center">Our Services</h2></div> },
        
        // New slide with another image
        { content: <img src="https://via.placeholder.com/800x400" alt="Placeholder Image" className="w-full h-full object-cover" /> },

        // New slide with a component
        { content: <div className="bg-blue-200 p-4"><h3 className="text-xl font-semibold">More Information</h3><p>This slide contains some more information about our services.</p></div> },
        
        // New slide with an iframe (another website)
        { content: (
            <div className="h-full overflow-auto">
                <iframe
                    src="https://www.example.com" // Replace with the URL of another website
                    title="Another Embedded Website"
                    className="w-full h-96 border border-gray-300 rounded-lg"
                />
            </div>
        )}
    ];

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (index) => setCurrentSlide(index), // Update current slide index
        centerMode: false, // Disable center mode to avoid additional slide display
    };

    // Navigate to the next slide
    const nextSlide = () => {
        sliderRef.current.slickNext(); // Use the slickNext method
    };

    // Navigate to the previous slide
    const prevSlide = () => {
        sliderRef.current.slickPrev(); // Use the slickPrev method
    };
    
    return (
        <div className='w-full bg-red-400/60         '>
    <div className='flex items-center justify-between p-4'>
        <h1 className='text-3xl font-bold'>Web Development</h1>
        <button className='text-lg text-[#FD5F20] border border-[#FD5F20] rounded-lg px-4 py-2 hover:bg-[#FD5F20] hover:text-white transition-colors'>
            Try Now <FontAwesomeIcon icon={faArrowUp} className='transform rotate-45 ml-2' />
        </button>
    </div>
    <div className="w-[100%]  overflow-auto max-h-96 p-4"> {/* Add overflow-auto and set height */}
    <div className="w-full max-w-screen-lg mx-auto overflow-hidden">
    <div className="w-full overflow-hidden">
    <Slider
  className="border border-[#FD5F20] w-full overflow-hidden"  // Prevents extra width
  {...settings}
  ref={sliderRef}
  beforeChange={(current, next) => setCurrentSlide(next)}
>
  {slides.map((slide, index) => (
    <div key={index} className="w-full flex justify-center items-center ">
      {slide.content}
    </div>
  ))}
</Slider>

</div>

</div>

    </div>
    <div className="absolute left-0 top-60 p-4 transform flex flex-col items-center">
        <button
            onClick={prevSlide}
            className="rounded-full shadow-md p-2 hover:bg-gray-200 transition-colors"
            style={{ marginBottom: '10px' }} // Add margin for spacing
            disabled={currentSlide === 0} // Disable if on the first slide
        >
            <FaChevronUp className="text-[#FD5F20] text-2xl" />
        </button>
        <button
            onClick={nextSlide}
            className="rounded-full shadow-md p-2 hover:bg-gray-200 transition-colors"
            disabled={currentSlide === slides.length - 1} // Disable if on the last slide
        >
            <FaChevronDown className="text-[#FD5F20] text-2xl" />
        </button>
    </div>
</div>

    );
};

export default Carousel;

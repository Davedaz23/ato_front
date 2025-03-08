import React, { useEffect, useState } from 'react';
import g1 from '../../../assets/gena/download.jpg';
import g2 from '../../../assets/gena/g2.jpg';
import g3 from '../../../assets/gena/g3.jpg';
import g4 from '../../../assets/gena/g4.jpg';
import g5 from '../../../assets/gena/g5.jpg';

const images = [g1, g2, g3, g4, g5]; // Array of image imports

const ChristmasModal = ({ isOpen, onClose }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        if (!isOpen) return;

        const interval = setInterval(() => {
            setFade(false); // Start fade out
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Move to next image
                setFade(true); // Start fade in
            }, 500); // Duration of fade out
        }, 3000); // Change image every 3 seconds

        // Create confetti pieces initially and then every 10 seconds
        createConfettiPieces(100); // Initial confetti
        const confettiInterval = setInterval(() => {
            createConfettiPieces(100); // Generate confetti every 10 seconds
        }, 10000); // 10 seconds

        return () => {
            clearInterval(interval);
            clearInterval(confettiInterval); // Clear the confetti interval on unmount
        };
    }, [isOpen]);

    const createConfettiPieces = (numPieces) => {
        const confettiContainer = document.querySelector('.confetti');
        for (let i = 0; i < numPieces; i++) {
            const piece = document.createElement('div');
            piece.className = 'confetti-piece';
            piece.style.left = `${Math.random() * 100}%`; // Random horizontal position
            piece.style.animationDuration = `${Math.random() * 2 + 1}s`; // Random duration
            piece.style.animationDelay = `${Math.random() * 2}s`; // Random delay
            piece.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`; // Random color
            confettiContainer.appendChild(piece);
            
            // Remove the confetti piece after animation ends
            piece.addEventListener('animationend', () => {
                piece.remove();
            });
        }
    };

    if (!isOpen) return null;

    return (
        
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
                <div className="relative bg-white  m-4 rounded-lg shadow-lg p-8 max-w-lg text-center overflow-y-auto overflow-hidden modal-background">
                    <h1 className="text-5xl font-bold text-[#FD5F20] mb-4 bg-white bg-opacity-80 p-2 rounded">መልካም ገና!</h1>
                    <p className="text-xl font-bold text-gray-700 mb-6 bg-white bg-opacity-80 p-2 rounded">
                        May the miracle of the Christmas season fill your heart with joy and peace.
                    </p>
                    <p className="text-xl font-bold text-gray-700 mb-6 bg-white bg-opacity-80 p-2 rounded">
                        Wishing you a blessed Genna filled with love and happiness!
                    </p>
                    
                    {/* Slideshow Image */}
                    <div className={`transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                        <img
                            src={images[currentIndex]}
                            alt={`Ethiopian Christmas ${currentIndex + 1}`}
                            className="w-full h-auto rounded-lg mb-4"
                        />
                    </div>
        
                    {/* Decorative Balloons */}
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                        <div className="balloon balloon-blue"></div>
                        <div className="balloon balloon-red"></div>
                        <div className="balloon balloon-yellow"></div>
                        <div className="balloon balloon-green"></div>
                    </div>
                    
                    <div className="confetti"></div>   
        
                    <button
                        onClick={onClose}
                        className="bg-[#FD5F20] text-white py-2 px-4 rounded-lg hover:bg-[#E6551C] transition duration-300"
                    >
                        Close
                    </button>
                </div>
            </div>
        
    );
};

export default ChristmasModal;
import React, { useState } from 'react';
import BrandingPage from './service/Branding';
import DigitalMarketing from './service/Digital-Marketing';
import VideoProduction from './service/Video-Production';
import Design from './service/Design';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faPaintBrush, faBullseye, faVideo } from '@fortawesome/free-solid-svg-icons';

const Service = () => {
    const [selectedService, setSelectedService] = useState('branding');

    const renderServiceContent = () => {
        switch (selectedService) {
            case 'branding':
                return <BrandingPage />;
            case 'design':
                return <Design />;
            case 'digital-marketing':
                return <DigitalMarketing />;
            case 'video-production':
                return <VideoProduction />;
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen w-full mt-20 ">
            {/* Navigation Bar */}
            <nav className="flex  lg:flex-nowrap justify-center items-center w-full bg-gradient-to-r text-gray-200 from-[#FD5F20] via-[#FF8C00] via-[#FF6F30] via-[#FF4500] to-[#FD5F20] shadow-[0px_4px_15px_rgba(0,0,0,0.6)] rounded-xl p-4">
                <button
                    onClick={() => setSelectedService('branding')}
                    className={`flex items-center gap-2 px-6 py-3 font-semibold transition-colors rounded-full ${
                        selectedService === 'branding' ? 'bg-[#e55a1e]' : 'hover:bg-[#e55a1e]'
                    }`}
                >
                    <FontAwesomeIcon icon={faBullhorn} />
                    Branding
                </button>
                <button
                    onClick={() => setSelectedService('design')}
                    className={`flex items-center gap-2 px-6 py-3 font-semibold transition-colors rounded-full ${
                        selectedService === 'design' ? 'bg-[#e55a1e]' : 'hover:bg-[#e55a1e]'
                    }`}
                >
                    <FontAwesomeIcon icon={faPaintBrush} />
                    Design
                </button>
                <button
                    onClick={() => setSelectedService('digital-marketing')}
                    className={`flex items-center gap-2 px-6 py-3 font-semibold transition-colors rounded-full ${
                        selectedService === 'digital-marketing' ? 'bg-[#e55a1e]' : 'hover:bg-[#e55a1e]'
                    }`}
                >
                    <FontAwesomeIcon icon={faBullseye} />
                    Digital Marketing
                </button>
                <button
                    onClick={() => setSelectedService('video-production')}
                    className={`flex items-center gap-2 px-6 py-3 font-semibold transition-colors rounded-full ${
                        selectedService === 'video-production' ? 'bg-[#e55a1e]' : 'hover:bg-[#e55a1e]'
                    }`}
                >
                    <FontAwesomeIcon icon={faVideo} />
                    Video Production
                </button>
            </nav>

            {/* Service Content */}
            <div className="pt-8 overflow-hidden">
                {renderServiceContent()}
            </div>
        </div>
    );
};

export default Service;

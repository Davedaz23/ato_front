import React from 'react';
import defar from '../../../assets/img/Mask group.png';

const DigitalMarketingInfo = () => {
    return (
        <div className="relative min-h-screen overflow-hidden flex flex-col md:flex-row">
            {/* Left Sidebar */}
            <div className="md:w-1/6 sm:w-full md:fixed md:left-0 md:top-28 m-4 px-6 py-8 bg-[#FD5F20] bg-opacity-40 shadow-xl rounded-xl transform transition-transform hover:scale-105 hover:shadow-2xl">
                <h1 className="font-bold">In this article</h1>
                <p>
                    Top 10 digital marketing courses in 2024 <br />
                    Online Digital Marketing courses - FAQ <br />
                    Methodology <br />
                    What to Do Next?
                </p>
            </div>

            {/* Right Sidebar */}
            <div className="md:w-1/6 sm:w-full md:fixed md:right-0 md:top-28 m-4 px-6 py-8 bg-[#FD5F20] bg-opacity-40 shadow-xl rounded-xl transform transition-transform hover:scale-105 hover:shadow-2xl">
                {/* Profile Image */}
                <div className="flex justify-center mb-4">
                    <img
                        src={defar}
                        alt="Samson Taddese"
                        className="w-24 h-24 rounded-full border-4 border-[#FD5F20]"
                    />
                </div>

                {/* Profile Details */}
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Abel M.</h2>
                <p className="text-sm text-gray-600 mb-2">Digital Marketing Specialist</p>

                {/* Profile Description */}
                <p className="text-sm text-gray-500">
                    Get access to exclusive tips and strategies Samson shares with our newsletter subscribers.
                </p>

                {/* Call to Action Button */}
                <button className="mt-4 w-full py-2 bg-[#FD5F20] text-white rounded-lg shadow-md hover:bg-indigo-700 transition-colors">
                    Subscribe Now
                </button>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 md:ml-1/6 md:mr-1/6 px-8 py-2 text-gray-800">
                <p className="mb-1">
                    Digital marketing has become the go-to marketing strategy for small businesses and enterprises alike.
                    You’ve probably heard about digital marketing before, but it encompasses many different strategies for businesses.
                </p>

                <div>
                    <h2 className="text-xl font-semibold mb-1">This guide will discuss:</h2>
                    <ul className="list-disc list-inside pl-4">
                        <li>What digital marketing is</li>
                        <li>The benefits of digital marketing</li>
                        <li>Types of digital marketing</li>
                        <li>How to do digital marketing</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-1">What is digital marketing?</h2>
                    <p className="mb-1">
                        Digital marketing is the use of digital channels to market products. Also known as online marketing,
                        digital marketing promotes brands and connects them to potential customers via the internet. It takes many forms, including:
                    </p>
                    <ul className="list-disc list-inside pl-4">
                        <li>Search engines</li>
                        <li>Websites</li>
                        <li>Social media</li>
                        <li>Email</li>
                        <li>Mobile apps</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-1">B2B vs. B2C Digital Marketing</h2>
                    <p className="mb-1">
                        Digital marketing strategies depend on the company’s model. Here are some distinctions:
                    </p>
                    <ul className="list-disc list-inside pl-4">
                        <li>B2B decisions involve multiple people, while B2C typically only involves a single person.</li>
                        <li>B2B clients have longer decision-making processes; B2C has shorter sales cycles.</li>
                        <li>B2B transactions are logic-driven; B2C transactions are more emotion-driven.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-1">The Benefits of Digital Marketing</h2>
                    <p className="mb-2">
                        Regardless of whether you’re a B2B or B2C company, digital marketing helps businesses better understand their customers and deliver tailored experiences across every channel.
                    </p>
                    <h3 className="text-lg font-semibold mb-1">Reach a large demographic</h3>
                    <p className="mb-0">
                        Digital marketing allows you to reach a wider customer base with less effort. It enables global reach, helping you expand your market reach and grow your business in ways that would have seemed impossible before.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DigitalMarketingInfo;
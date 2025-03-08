import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import mainImage from '../../assets/img/computer.png'; // Replace with actual image path
import thumbnail1 from '../../assets/img/Mask group (2).png';
import thumbnail2 from '../../assets/img/Mask group (3).png';
import thumbnail3 from '../../assets/img/Mask group (4).png';
import thumbnail4 from '../../assets/img/Mask group (5).png';
import { api } from '../../api';

const PlaylistPage = () => {
    const playlistItems = [
        { id: 1, image: thumbnail1, title: "Learn from My Mistakes: 7 Digital Course Pitfalls to Skip", description: "Discover the top digital course pitfalls to avoid from experienced creator Amy Porterfield." },
        { id: 2, image: thumbnail2, title: "Learn from My Mistakes: 7 Digital Course Pitfalls to Skip", description: "Discover the top digital course pitfalls to avoid from experienced creator Amy Porterfield." },
        { id: 3, image: thumbnail3, title: "Learn from My Mistakes: 7 Digital Course Pitfalls to Skip", description: "Discover the top digital course pitfalls to avoid from experienced creator Amy Porterfield." },
        { id: 4, image: thumbnail4, title: "Learn from My Mistakes: 7 Digital Course Pitfalls to Skip", description: "Discover the top digital course pitfalls to avoid from experienced creator Amy Porterfield." },
        { id: 5, image: thumbnail4, title: "Learn from My Mistakes: 7 Digital Course Pitfalls to Skip", description: "Discover the top digital course pitfalls to avoid from experienced creator Amy Porterfield." },
    ];

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const subscriberData = {
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            phone_number: formData.phoneNumber,
            status: formData.status, // Include status
        };
        console.log('Submitting subscriber data:', formData);

        try {
            const response = await api.post("/subscribers", subscriberData);
            console.log('Subscriber created:', response.data);
            setMessage('Thank you for signing up!');  // Success message
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: ''
            });
        } catch (error) {
            console.error('Error creating subscriber:', error.response ? error.response.data : error.message);
            setMessage('Error: Unable to sign up. Please try again.');  // Error message
        }
    };

    return (
        <div className="flex flex-col overflow-hidden">
            {/* Main Image and Playlist Section */}
            <div className="flex flex-col md:flex-row w-full">
                <div className="relative flex-1 md:w-3/5 h-auto md:h-[400px]"> {/* Adjust height here */}
                    <img
                        src={mainImage}
                        alt="Main content"
                        className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute bottom-0 left-0 w-full backdrop-blur-sm p-4 rounded-lg">
                        <p className="text-gray-100 text-sm mb-2">
                            <strong>Zafor Iqubal</strong> - 17 Oct, 2024
                        </p>
                        <h1 className="text-lg md:text-2xl font-bold text-white">
                            What is Digital Marketing?
                        </h1>
                        <p className="mt-2 text-xs md:text-base text-white">
                            Discover the top digital course pitfalls to avoid from experienced creator Amy Porterfield. Skip common mistakes and start with confidence!
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            <button className="bg-[#FD5F20] text-white px-4 py-1 rounded hover:bg-orange-600 transition">
                                PPC
                            </button>
                            <button className="bg-[#FD5F20] text-white px-4 py-1 rounded hover:bg-blue-600 transition">
                                CRO
                            </button>
                            <button className="bg-[#FD5F20] text-white px-4 py-1 rounded hover:bg-green-600 transition">
                                Affiliate Marketing
                            </button>
                        </div>
                    </div>
                </div>
                <div className="md:w-2/5 p-2 h-auto md:h-[400px] overflow-y-auto"> {/* Adjust height here */}
                    <h2 className="text-lg font-semibold mb-2">Latest Blogs</h2>
                    <div className="space-y-2">
                        {playlistItems.map((item) => (
                            <Link
                                key={item.id}
                                to="/Blog/LatestBlogs"
                                className="flex items-start space-x-2 hover:bg-gray-100 p-2 rounded-lg"
                            >
                                <div className='flex flex-row gap-2 items-center '>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-20 h-20 object-cover rounded-lg"
                                    />
                                    <div>
                                        <h3 className="text-sm font-semibold">{item.title}</h3>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-xs">{item.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Sign Up Form Section */}
            <div className="flex flex-col md:flex-row w-full p-4">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md md:w-1/3">
                    <h2 className="text-2xl font-bold mb-2">Sign Up for News + Offers</h2>
                    <p className="text-gray-600 mb-6">
                        Receive exciting round-ups, including exclusive offers, insights into new creative projects, articles, design industry updates, and much more.
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="w-full border-2 border-[#FD5F20] p-4 mt-4 rounded-lg md:mt-0 md:ml-4 md:w-2/3">
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="mb-2 w-full">
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full px-2 py-2 border-2 border-[#FD5F20] rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-[#FD5F20] placeholder-gray-500"
                                placeholder="Enter your first name"
                                required
                                aria-label="First Name"
                            />
                        </div>
                        <div className="mb-2 w-full">
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full px-2 py-2 border-2 border-[#FD5F20] rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-[#FD5F20] placeholder-gray-500"
                                placeholder="Enter your last name"
                                required
                                aria-label="Last Name"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="mb-2 w-full">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-2 py-2 border-2 border-[#FD5F20] rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-[#FD5F20] placeholder-gray-500"
                                placeholder="Enter your email"
                                required
                                aria-label="Email"
                            />
                        </div>
                        <div className="mb-2 w-full">
                            <input
                                type="tel"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className="w-full px-2 py-2 border-2 border-[#FD5F20] rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-[#FD5F20] placeholder-gray-500"
                                placeholder="Enter your phone number"
                                required
                                aria-label="Phone Number"
                            />
                        </div>
                    </div>
                    <div className="mb-2">
                        <button
                            type="submit"
                            className="w-full px-2 py-2 bg-[#FD5F20] opacity-90 text-white rounded-lg hover:bg-[#E6551C] focus:outline-none focus:ring-2 focus:ring-[#FF6A33]"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
                {message && (
                    <p className={`mt-4 text-sm ${message.includes('Thank') ? 'text-green-600' : 'text-red-600'}`}>
                        {message}
                    </p>
                )}
            </div>
        </div>
    );
};

export default PlaylistPage;
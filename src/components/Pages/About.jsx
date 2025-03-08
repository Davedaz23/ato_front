import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { api } from '../../api';

import { ToastContainer, toast } from 'react-toastify';  // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css';  // Import CSS for toast notifications
import ab from '../../assets/img/About.png';
import ConsultationForm from './ConsultationForm';

const About = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Select Your Industry');
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        industry: ''
    });

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setFormData({ ...formData, industry: option });
        setIsOpen(false);
    };

    const options = [
        'Solopreneurs',
        'Personal Training',
        'Beauty Spa',
        'Bakery & Spa',
        'Bakery & Cafe',
        'Consultancy',
        'Coaching Center',
        'Boutique Services',
        'Clinics & Medicals',
        'Other Services',
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/consultations', formData);
            console.log('Success:', response.data);
            toast.success('Consultation request submitted successfully!'); // Show success toast
            setFormData({ name: '', phone: '', email: '', industry: '' });
            setSelectedOption('Select Your Industry');
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error('Error submitting form. Please try again.'); // Show error toast
        }
    };

    return (
        <div className='m-8 mt-28'>
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover /> {/* Toast container */}
            <div className='container mx-auto'>
                <div className='flex flex-col md:flex-row'>
                    <div className='flex-1 mr-2'>
                        <div className='flex-1 justify-between sm:space-x-8'>
                            <div className='pt-2 md:w-full lg:w-full sm:w-full'>
                                <h1 className='font-extrabold font-urbanist text-5xl sm:w-full sm:mb-4'>
                                    Ato Creative! Our Name Has a Story.
                                </h1>
                                <p className='font-urbanist text-justify'>
                                    Welcome to Ato Creative, a unique agency founded by three innovative minds. The term 'ato' holds significance in the Igbo language, meaning 'three', representing our founders. In Amharic, 'Ato' is a respectful term for a man. This mirrors our approach to creativity and design, emphasizing humility, respect, and collaboration. Join us at Ato Creative for projects fueled by cultural richness, collaborative effort, and boundless creativity.
                                </p>
                                <button className='bg-[#FD5F20] p-4 rounded-lg text-white mt-4 mb-6'>Watch Our Story</button>
                            </div>
                            <div className='flex flex-col gap-8 mt-8 md:flex-row md:justify-between'>
                                <div className='w-full md:w-full'>
                                    <h1 className='text-4xl md:text-5xl font-bold mb-4 underline decoration-[#FD5F20]'>We Are</h1>
                                    <ul className='text-justify'>
                                        <li className='mb-4'>
                                            <h2 className='font-bold'>Client-Centric</h2>
                                            <p className='text-gray-500'>Our clients' triumphs are our own. We tailor our services to their unique needs.</p>
                                        </li>
                                        <li className='mb-4'>
                                            <h2 className='font-bold'>Transparent & Integrative</h2>
                                            <p className='text-gray-500'>We operate with honesty and ethical behavior, fostering trust.</p>
                                        </li>
                                        <li className='mb-4'>
                                            <h2 className='font-bold'>Creative & Innovative</h2>
                                            <p className='text-gray-500'>We push boundaries with fresh ideas, driving success.</p>
                                        </li>
                                        <li className='mb-4'>
                                            <h2 className='font-bold'>Data-Driven</h2>
                                            <p className='text-gray-500'>Informed decisions from data analysis lead to optimized campaigns.</p>
                                        </li>
                                        <li className='mb-4'>
                                            <h2 className='font-bold'>Results-Oriented</h2>
                                            <p className='text-gray-500'>We focus on measurable outcomes for brand growth and revenue.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex-1 flex-col m-4 px-2 py-2'>
                        <div className='sm:w-full lg:w-full md:w-full item-justify-right'>
                            <img src={ab} className='md:pl-6 md:mt-8 md:h-80 md:w-full object-cover' alt="About Us" />
                        </div>
                        <div className='w-full md:w-full m-4'>
                            <h1 className='text-5xl font-bold font-urbanist mb-4'>We take time to understand your Business</h1>
                            <p className='text-gray-600 mb-4 font-urbanist text-justify'>
                                We help you find the right Niche for your business, create a Messaging that resonates with your Audience, and structure a solution that’s appealing to your Audience. We then help you create different pitches to offer your solution to your Target Audience.
                            </p>
                            <h1 className='text-3xl font-bold'>Act Now - Your Future Awaits!</h1>
                            <ConsultationForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
// src/components/ConsultationForm.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { api } from '../../api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ConsultationForm = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Select Your Industry');
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        industry: ''
    });
    const [errors, setErrors] = useState({}); // State for error messages

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
        setErrors({ ...errors, [name]: '' }); // Clear error messages on change
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.phone) newErrors.phone = 'Phone number is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.industry || formData.industry === 'Select Your Industry') 
            newErrors.industry = 'Industry selection is required';
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Returns true if no errors
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return; // Prevent submission if validation fails

        try {
            const response = await api.post('/consultations', formData);
            console.log('Success:', response.data);
            toast.success('Consultation request submitted successfully!');
            setFormData({ name: '', phone: '', email: '', industry: '' });
            setSelectedOption('Select Your Industry');
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error('Error submitting form. Please try again.');
        }
    };

    return (
        <div>
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick pauseOnFocusLoss draggable pauseOnHover />
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col md:flex-row'>
                    <div className='w-full md:w-1/2'>
                        <div className='m-2'>
                            <input
                                type='text'
                                name='name'
                                id='name'
                                value={formData.name}
                                onChange={handleChange}
                                placeholder='Name'
                                className={`w-full border-2 p-1 rounded focus:outline-none focus:ring-2 hover:border-[#FD5F20] ${errors.name ? 'border-red-500' : 'border-[#FD5F20]'}`}
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                        </div>
                        <div className='m-2'>
                            <input
                                type='text'
                                name='phone'
                                id='phone'
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder='Phone'
                                className={`w-full border-2 p-1 rounded focus:outline-none focus:ring-2 hover:border-[#FD5F20] ${errors.phone ? 'border-red-500' : 'border-[#FD5F20]'}`}
                            />
                            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                        </div>
                    </div>
                    <div className='w-full md:w-1/2'>
                        <div className='m-2'>
                            <div className="relative w-full">
                                <div
                                    onClick={toggleDropdown}
                                    className={`w-full border-2 rounded-lg p-2 shadow-lg cursor-pointer ${errors.industry ? 'border-red-500' : 'border-[#FD5F20]'}`}
                                >
                                    {selectedOption}
                                    <FontAwesomeIcon
                                        className={`absolute text-[#FD5F20] right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                                        icon={faChevronDown} />
                                </div>
                                {isOpen && (
                                    <ul className="absolute left-0 w-full mt-1 bg-white border border-2 border-[#FD5F20] rounded-lg shadow-2xl z-50">
                                        {options.map((option) => (
                                            <li
                                                key={option}
                                                className="px-4 py-2 cursor-pointer hover:bg-[#FD5F20] hover:text-white"
                                                onClick={() => handleOptionClick(option)}
                                            >
                                                {option}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            {errors.industry && <p className="text-red-500 text-sm">{errors.industry}</p>}
                        </div>
                        <div className='m-2'>
                            <input
                                type='email'
                                name='email'
                                id='email'
                                value={formData.email}
                                onChange={handleChange}
                                placeholder='Email'
                                className={`w-full border-2 p-1 rounded focus:outline-none focus:ring-2 hover:border-[#FD5F20] ${errors.email ? 'border-red-500' : 'border-[#FD5F20]'}`}
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>
                    </div>
                </div>
                <div className=''>
                    <button type='submit' className='bg-[#FD5F20] rounded-lg p-2 text-white font-bold w-full'>
                        Get Free Consultation
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ConsultationForm;
import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import axios from 'axios';
import HeadComponent from '../../head';
import { api } from '../../api';
import AlertModal from './AllertModal'

import { FaChevronDown } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
const ContactForm = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
    budget: '',
    company: '',
    metrics: '',
  });
  const [responseMessage, setResponseMessage] = useState('');
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [modalVisible, setModalVisible] = useState(false);

  const [isSuccess, setIsSuccess] = useState(false);
  useEffect(() => {
    api.get('/contacts/CreateContact')
      .then(response => setData(response.data))
      .catch(error => console.log(error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/contacts/CreateContact', formData);
      setResponseMessage("Your message was sent successfully!"); // Success message
      setIsSuccess(true);
      setModalVisible(true);
      setFormData({ name: '', email: '', phone: '', budget: '', company: '', metrics: '', message: '' }); // Reset form
    } catch (error) {
      setResponseMessage(error.response?.data?.error || 'An error occurred while sending your message.'); // Error message
      setIsSuccess(false);
      setModalVisible(true);
    }
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
   <HeadComponent/>
    <div className="max-w-full min-h-screen mx-auto">
      <div className="flex flex-col lg:flex-row lg:space-x-8 gap-12">
        <div className='flex flex-col flex-1 mb-2 lg:mb-0'>
        <div className="text-justify font-urbanist sm:text-4xl lg:text-4xl font-bold mb-4">
  <h1>Would You Like To Start A Project With Us?</h1>
</div>




          <p className='text-base sm:text-lg mb-4 font-urbanist'>
            Uncover and define the fundamental qualities and values of your brand with the guidance of our team of experts. Our seasoned professionals will work closely with you to reveal the true essence of your brand, allowing you to better understand and communicate its unique identity to your audience. Let us help you unlock the full potential of your brand with our comprehensive discovery process.
          </p>
       
        </div>

        <div className='flex flex-col flex-1'>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          {/* {responseMessage && <p className="mb-4 text-green-500">{responseMessage}</p>} */}
          <form onSubmit={handleSubmit} className="space-y-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="appearance-none border border-2 border-[#FD5F20] rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="appearance-none border border-2 border-[#FD5F20] rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="relative">
              <select
  id="budget"
  name="budget"
  className="appearance-none border-2 border-[#FD5F20] rounded-lg w-full py-2 px-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white hover:border-[#E04E14]"
  value={formData.budget}
  onChange={handleChange}
  required
>
  <option value="" disabled hidden>
    Select Budget
  </option>
  <option value=">5k"> &lt;5k </option>
  <option value="5k-10k">5k - 10k</option>
  <option value="10k-20k">10k - 20k</option>
  <option value="20k-30k">20k - 30k</option>
  <option value="30k-40k">30k - 40k</option>
  <option value="50k+">50k+</option>
</select>


  {/* Chevron Icon */}
  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-[#FD5F20]">
    {/* <svg
      className="w-4 h-4 text-gray-700"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      /> 
    </svg>*/}
    <FontAwesomeIcon icon={faChevronDown} />
  </div>
</div>


              <div>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="appearance-none border border-2 border-[#FD5F20] rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="appearance-none border border-2 border-[#FD5F20] rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="relative">
  <select
    id="metrics"
    name="metrics"
    className="appearance-none border-2 border-[#FD5F20] rounded-lg w-full py-2 px-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white hover:border-[#E04E14]"
    value={formData.metrics}
    onChange={handleChange}
    required
  >
    <option disabled hidden value="">Select Preferred Contact Method</option>
    <option value="video-call">Request a Video Call</option>
    <option value="phone-call">Request a Phone Call</option>
    <option value="face-to-face">Request a Face-to-Face Meeting</option>
    <option value="email">Email</option>
  </select>

  {/* Chevron Icon */}
  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
    <svg
      className="w-4 h-4 text-gray-700"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  </div>
</div>

            </div>

            <div>
              <textarea
                id="message"
                name="message"
                className="appearance-none border border-2 border-[#FD5F20] rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-16 resize-none"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex items-center w-full justify-center">
              <button
                type="submit"
                className="bg-[#FD5F20] hover:bg-[#FD5F20] text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full sm:w-full"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      {modalVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className={`bg-white rounded-lg shadow-lg p-6 w-full max-w-lg`}>
            <h2 className={`text-xl font-bold mb-4 ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>
              {isSuccess ? 'Success' : 'Error'}
            </h2>
            <p className={`mb-4 ${isSuccess ? 'text-green-600' : 'text-red-600'} {isSuccess ? 'Success' : 'Error'`}>{responseMessage}</p>
            <button
              onClick={closeModal}
              className="bg-[#FD5F20] text-white font-bold py-2 px-4 rounded hover:bg-[#e4541d]"
            >
              Close
            </button>
          </div>
        </div>
      )}
     
    </div>
    </>
  );
};

export default ContactForm;

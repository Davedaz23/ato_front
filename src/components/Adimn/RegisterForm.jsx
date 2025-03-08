import React, { useState, useContext } from 'react';

import { api } from '../../api';

const RegisterForm = () => {
  
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleEvent = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/auth/register', formData);
      setSuccess(true);
      console.log("defar");
      console.log(response.data.message); // success message
    } catch (error) {
      setError(error.response.data.error || 'Error during registration');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <div className="text-red-500">{error}</div>}
      <div>
        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username" // Add name attribute
          value={formData.username}
          onChange={handleEvent} // Use handleEvent for all inputs
          className="w-full text-gray-600 border border-[#FD5F20] p-2 focus:border-[#FD5F20]  focus:outline-[#FD5F20]  focus:ring-2 focus:ring-[#FD5F20] rounded"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email" // Add name attribute
          value={formData.email}
          onChange={handleEvent} // Use handleEvent for all inputs
          className="w-full text-gray-600 border border-[#FD5F20] p-2 focus:border-[#FD5F20]  focus:outline-[#FD5F20]  focus:ring-2 focus:ring-[#FD5F20] rounded"
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password" // Add name attribute
          value={formData.password}
          onChange={handleEvent} // Use handleEvent for all inputs
          className="w-full text-gray-600 border border-[#FD5F20] p-2 focus:border-[#FD5F20]  focus:outline-[#FD5F20]  focus:ring-2 focus:ring-[#FD5F20] rounded"
          required
        />
      </div>
      <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;

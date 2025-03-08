import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', formData);
      console.log(response.data);
      navigate('/login');
    } catch (error) {
      setError('Registration failed');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-gray-700">Register</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm text-gray-600">Username</label>
            <input
              type="text"
              name="username"
              className="w-full p-2 border rounded"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-2 border rounded"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              className="w-full p-2 border rounded"
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pink-600 text-white p-2 rounded hover:bg-pink-700"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

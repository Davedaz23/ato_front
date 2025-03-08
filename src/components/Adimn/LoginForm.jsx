import React, { useState, useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ onClose }) => {
  const { login } = useContext(AuthContext); // Access login function from context
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate(); // To handle redirection

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors
    setSuccess(false); // Reset success message

    try {
      // Call the login function from context, passing email and password
      await login(formData.email, formData.password);

      // Show success message
      setSuccess(true);

      // Redirect to dashboard
      navigate('/admin/dashboard');

      // Close the modal if necessary
       onClose();
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || 'Login failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <div className="text-red-500">{error}</div>}
      {success && <div className="text-green-500">Login successful! Redirecting...</div>}
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
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
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          className="w-full border border-[#FD5F20] gray-300 p-2 rounded w-full text-gray-600 border border-[#FD5F20] p-2 focus:border-[#FD5F20]  focus:outline-[#FD5F20]  focus:ring-2 focus:ring-[#FD5F20] rounded"
          required
        />
      </div>

      <button type="submit" className="w-full bg-[#FD5F20] text-white p-2 rounded">
        Login
      </button>
    </form>
  );
};

export default LoginForm;

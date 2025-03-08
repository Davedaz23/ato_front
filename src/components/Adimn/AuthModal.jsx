import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const AuthModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Register

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  z-50 flex items-center justify-center bg-black bg-opacity-50 ">
      {/* Modal Content */}
      <div className="bg-white rounded-xl shadow-lg z-60 w-96  relative">
        <div className='bg-[#FD5F20] top-0 rounded-t-xl p-4'>
        <button
          onClick={onClose}
          className="absolute top-2 text-3xl right-2 text-gray-300 hover:text-gray-700"
        >
          &times;
        </button>

        {/* Tabs */}
        <div className="mb-4 flex justify-center space-x-4 text-gray-200">
  <button
    className={`px-6 py-2 text-lg font-semibold transition-all duration-300 ease-in-out transform rounded-lg 
      ${isLogin ? 'text-[#FD5F20] bg-white shadow-lg scale-105' : 'text-gray-200 hover:text-[#FD5F20] hover:bg-gray-800'}`}
    onClick={() => setIsLogin(true)}
  >
    Login
  </button>
  <button
    className={`px-6 py-2 text-lg font-semibold transition-all duration-300 ease-in-out transform rounded-lg 
      ${!isLogin ? 'text-[#FD5F20] bg-white shadow-lg scale-105' : 'text-gray-200 hover:text-[#FD5F20] hover:bg-gray-800'}`}
    onClick={() => setIsLogin(false)}
  >
    Register
  </button>
</div>

</div>
<div className='p-6'>  {/* Form */}
        {isLogin ? <LoginForm onClose={onClose} /> : <RegisterForm onClose={onClose} />}</div>
   
      </div>
    </div>
  );
};

export default AuthModal;

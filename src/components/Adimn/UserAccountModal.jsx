import React from 'react';

const UserAccountModal = ({ user, onLogout, onClose }) => {
  if (!user) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-end bg-black bg-opacity-50">
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-xl w-80 p-6 relative">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
        aria-label="Close Modal"
      >
        &times;
      </button>

      <div className="flex flex-col items-center">
        <img
          src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt="User Profile"
          className="w-16 h-16 rounded-full mb-4"
        />
        <h2 className="text-xl text-white">{user.email}</h2>
        <p className="text-gray-300">Role: <span className="font-bold">{user.role}</span></p>
        <p className="mt-4 text-center text-gray-400">
          I am a fullstack software developer with ReactJS for frontend and NodeJS for backend.
        </p>
        <button
          onClick={onLogout}
          className="mt-6 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  </div>
  );
};

export default UserAccountModal;

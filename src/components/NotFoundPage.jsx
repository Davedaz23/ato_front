import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleGoHome = () => {
    navigate('/'); // Redirect to home page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <h2 className="mt-4 text-2xl font-semibold">Oops! Page Not Found</h2>
        <p className="mt-2 text-gray-400">
          The page you're looking for doesn't exist. It might have been removed, renamed, or it never existed at all.
        </p>
        <button
          onClick={handleGoHome}
          className="mt-6 px-6 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          Go Back Home
        </button>
      </div>
      <div className="mt-10">
        <img
          src="https://media.giphy.com/media/3oKIPtAT1v5L6ZNO8Y/giphy.gif" 
          alt="404 Illustration"
          className="w-1/2 md:w-1/3"
        />
      </div>
    </div>
  );
};

export default NotFoundPage;

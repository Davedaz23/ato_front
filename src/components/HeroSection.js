import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import marketing from '../assets/Video/marketing.mp4';

const validationSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Name must be at least 2 characters long').required('Name is required'),
  email: Yup.string()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid Email')
    .required('Email is required'),
});

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const onSubmit = async (data) => {
    toast.success(`Welcome, ${data.name}! Let's grow your business!`);
  };

  return (
<div className="relative min-h-screen pt-8 text-gray-900 ">


      <ToastContainer />
      <div className="container mx-auto px-6 md:px-8 relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 space-y-6 lg:space-y-0">
          {/* Left Content Section */}
          <div className="flex-1 text-center lg:text-left space-y-6">
          <motion.h1
  className="text-lg lg:text-4xl xl:text-6xl font-extrabold leading-tight"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  Join the Movement: Empower Your Startup or SME Today!
</motion.h1>

<motion.p
  className="text-xs lg:text-lg xl:text-xl text-gray-700"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.3 }}
>
Are you prepared to elevate your business to the next level? 
Our dedicated team is committed to restoring balance and significantly enhancing the online presence of startups and SMEs.
 We invite you to connect with us now and allow us to help make your digital footprint unforgettable!</motion.p>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Name Input */}
                  <div className="flex-1">
                    <input
                      type="text"
                      name="name"
                      {...register('name')}
                      className={`border-2 rounded-lg p-3 w-full focus:outline-none focus:ring-2 text-black shadow-lg ${errors.name
                          ? 'border-red-500 focus:ring-red-500'
                          : isValid
                            ? 'border-green-500 focus:ring-green-500'
                            : 'border-[#FD5F20] focus:ring-[#FD5F20]/90'
                        }`}
                      placeholder="Enter your name"
                    />
                    {errors.name && (
                      <div className="flex items-center mt-2 bg-gray-100 p-2 rounded-md shadow-sm">
                        <svg
                          className="w-5 h-5 text-red-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          ></path>
                        </svg>
                        <p className="text-red-500 text-sm">{errors.name.message}</p>
                      </div>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="flex-1">
                    <input
                      type="email"
                      name="email"
                      {...register('email')}
                      className={`border-2 rounded-lg   p-3 w-full focus:outline-none focus:ring-2 text-black shadow-lg ${errors.email
                          ? 'border-red-500 focus:ring-red-500'
                          : isValid
                            ? 'border-green-500 focus:ring-green-500'
                            : 'border-[#FD5F20] focus:ring-[#FD5F20]/90'
                        }`}
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <div className="flex items-center  mt-2  p-2 rounded-md shadow-sm">
                        <svg
                          className="w-5 h-5 text-red-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          ></path>
                        </svg>
                        <p className="text-red-500 text-sm">{errors.email.message}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full text-lg font-semibold bg-[#FD5F20] text-white py-3 rounded-lg hover:bg-[#e04e1c] hover:text-white transition duration-200 shadow-lg"
                >
                  Let’s Get Started
                </button>
              </form>

            </motion.div>
          </div>

          {/* Right Media Section */}
          <motion.div
  className="flex-1 w-full max-w-md lg:max-w-lg xl:max-w-xl"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1, delay: 0.7 }}
>
  <video
    src={marketing}
    title="Creative Marketing Video"
    className="w-full h-[50vh] lg:h-[60vh] xl:h-[70vh] object-cover rounded-lg shadow-2xl border-4 border-white"
    controls
    autoPlay
    muted
    loop
  />
</motion.div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;

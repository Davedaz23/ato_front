import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import branding from '../../../assets/img/branding.png'

const BrandingPage = () => {
  return (
    <div className='p-8'>
      <div className='flex items-center justify-between p-2 pl-8 pr-36'>
        <h2 className='text-3xl font-bold'>Branding</h2>
        <button className='border border-2 border-[#FD5F20] rounded-lg '>
          <span className='text-2xl text-[#FD5F20] cursor-pointer hover:underline m-2'>
            Try Now 
            <FontAwesomeIcon icon={faArrowUp} className='transform rotate-45 ml-2' />
          </span>
        </button>
      </div>
      <p className='mt-4'><img src={branding} /></p>
    </div>
  );
};

export default BrandingPage;

import React from 'react';
import profile from '../../../assets/img/Mask group.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Carousel from './Carousel';
import SimpleSlider from './slider';

const Design = () => {
  return (
<div className="flex h-auto flex-col md:flex-row w-full md:w-full md:gap-4 overflow-hidden mb-4">
  <div className="md:w-3/4 w-full h-auto overflow-hidden">
    <div className="w-full h-auto">
      <SimpleSlider />
    </div>
  </div>


  <div className="md:w-1/4 w-full h-100 md:h-full">
    <div className="h-full border border-gray-300 rounded-lg flex flex-col items-center p-4 bg-[#FCD5C5] bg-opacity-25">
      
      {/* Profile Photo */}
      <img
        src={profile}
        alt="Profile"
        className=" rounded-full object-cover mb-4"
      />

      {/* Name */}
      <h2 className='text-xl font-semibold mb-2'>Defar Gobeze</h2>

      {/* Description */}
      <p className='text-gray-700 text-center'>
        Experience the difference with Defar. Our team will craft a unique website tailored to your exact specifications,
        ensuring a seamless and visually stunning front end along with a robust and efficient back end.
      </p>

      {/* Skills List */}
      <div className='flex flex-col m-4'>
        <div>
          <span>
            <FontAwesomeIcon className='text-xs text-[#FD5F20] p-1 mr-1 rounded-full border border-[#FD5F20]' icon={faCheck} />
          </span>
          Prototyping
        </div>
        <div>
          <span>
            <FontAwesomeIcon className='text-sm text-[#FD5F20] p-1 mr-1 rounded-full border border-[#FD5F20]' icon={faCheck} />
          </span>
          Testing & Debugging
        </div>
        <div>
          <span>
            <FontAwesomeIcon className='text-sm text-[#FD5F20] p-1 mr-1 rounded-full border border-[#FD5F20]' icon={faCheck} />
          </span>
          Wireframing
        </div>
        <div>
          <span>
            <FontAwesomeIcon className='text-sm text-[#FD5F20] p-1 mr-1 rounded-full border border-[#FD5F20]' icon={faCheck} />
          </span>
          SEO & Analytics
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default Design;

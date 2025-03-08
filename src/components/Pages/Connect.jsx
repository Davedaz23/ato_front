import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 9.0300, // Latitude for Addis Ababa
  lng: 38.7400, // Longitude for Addis Ababa
};

const Connect = () => {
  const googleMapsApiKey = 'YOUR_GOOGLE_MAPS_API_KEY'; // Replace with your API key

  return (
    <div className="min-h-full px-4 sm:px-6 lg:px-8 pt-20">
      <div className="mt-8 flex flex-col md:flex-row">
        <div className="flex-1 md:flex-none md:w-1/2 p-4">
          <h1 className="text-gray-800 text-2xl font-extrabold">
            Our office is located in the Beautiful City of Addis Ababa
          </h1>
          <p className="mt-4 text-lg">
            We like our home like we like our designs; clean and minimal. We’re based in the heart of beautiful Addis Ababa. Don’t hesitate to visit. We have an open door policy.
          </p>
          <button className="rounded bg-[#FD5F20] m-4 px-6 py-3 font-semibold text-gray-200">
            <FontAwesomeIcon icon={faMapMarkedAlt} className="text-red-800 text-2xl" />
            {' '}
            <a href='https://www.google.com/maps?ll=8.995867,38.789909&z=14&t=m&hl=en&gl=ET&mapclient=embed&cid=8702575565295036214'>
            Use This Live Location to Our Office
            </a>
          </button>
        </div>

        <div className="flex-1 md:flex-none md:w-1/2 p-4">
  {/* Google Map */}
  <div className="w-full">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13255.060213575276!2d38.79133532530632!3d8.99486305900315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8584b0f1294d%3A0x78c5c25e5067a736!2sBole%20Medhanialem%20Church!5e0!3m2!1sen!2set!4v1722943168146!5m2!1sen!2set&style=feature:all|saturation:-100|lightness:50" 
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="rounded-lg shadow-lg w-full h-60"
    ></iframe>
  </div>
</div>

      </div>
    </div>
  );
};

export default Connect;

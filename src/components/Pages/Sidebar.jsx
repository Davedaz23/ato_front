import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
  return (
    <div className="space-y-8  ">
      {/* Special Offer Banner */}
      <div className="bg-[#FD5F20] text-white p-4 rounded-lg shadow-lg">
        <h3 className="text-lg font-bold">🎉 Limited-Time Offer!</h3>
        <p className="mt-2">Get 20% off on all branding and digital marketing services. Elevate your brand with us!</p>
        <button className="mt-4 px-4 py-2 bg-white text-blue-500 font-semibold rounded">Learn More</button>
      </div>

      {/* Featured Testimonial */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h4 className="text-md font-semibold">What Our Clients Say</h4>
        <p className="italic mt-2">"Ato Creative transformed our brand! Their design and marketing services took our reach to the next level."</p>
        <p className="text-sm font-semibold mt-2">- Jessica R., Founder of TrendyCo</p>
      </div>

      {/* Quick Links */}
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h4 className="text-lg font-bold text-gray-700">Explore Our Services</h4>
        <ul className="mt-3 space-y-2">
          <li>
            <a href="/service/branding" className="text-blue-600 hover:underline">
              Branding & Identity
            </a>
          </li>
          <li>
            <a href="/service/digital-marketing" className="text-blue-600 hover:underline">
              Digital Marketing
            </a>
          </li>
          <li>
            <a href="/service/video-production" className="text-blue-600 hover:underline">
              Video Production
            </a>
          </li>
          <li>
            <a href="/service/web-development" className="text-blue-600 hover:underline">
              Web Development
            </a>
          </li>
        </ul>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-red-100 p-4 rounded-lg shadow-sm">
        <h4 className="text-md font-bold text-yellow-700">Stay Updated</h4>
        <p className="text-sm mt-2">Join our newsletter for tips, insights, and exclusive offers.</p>
        <form className="mt-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border rounded"
          />
          <button className="mt-2 w-full px-3 py-2 bg-[#FD5F20] text-white rounded">
            Subscribe
          </button>
        </form>
      </div>

      {/* Social Media Links */}
      <div className="text-center mt-4">
        <h4 className="font-semibold">Follow Us</h4>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="text-[#FD5F20]">
            <FontAwesomeIcon icon={faFacebookF} size="lg" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="text-[#FD5F20]">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-[#FD5F20]">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-[#FD5F20]">
            <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

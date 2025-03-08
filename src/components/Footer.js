import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faTiktok,
  faYoutube,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-[#FD5F20] bg-opacity-80 text-black py-12 mt-auto font-urbanist">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Footer Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">About Us</h3>
            <p className="text-gray-800 text-sm">
              Ato Creatives is a leading digital agency, helping brands create impactful experiences through innovation, marketing, and technology.
            </p>
          </div>

          {/* Services & Expertise */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Services & Expertise</h3>
            <ul className="space-y-2 text-gray-800">
              <li>Brand Strategy & Identity</li>
              <li>Digital Marketing & SEO</li>
              <li>Web & App Development</li>
              <li>Creative Content & Design</li>
              <li>AI-Powered Solutions</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Get in Touch</h3>
            <p className="flex items-center text-gray-800 mb-2">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              <a href="mailto:contact@atocreatives.com" className="hover:underline">contact@atocreatives.com</a>
            </p>
            <p className="flex items-center text-gray-800 mb-2">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              <a href="tel:+251912345678" className="hover:underline">+251 912 345 678</a>
            </p>
            <p className="flex items-center text-gray-800">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
              456 Innovation Hub, Addis Ababa, Ethiopia
            </p>
          </div>

          {/* Featured Work Showcase */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Featured Work</h3>
            <p className="text-gray-800 text-sm mb-3">
              Check out some of our latest projects that make an impact.
            </p>
            <a href="#" className="text-black font-semibold hover:text-white transition">View Our Work →</a>
          </div>
        </div>

        {/* Social Links & Community */}
        <div className="flex flex-col items-center mt-8 text-gray-900">
          <h3 className="text-xl font-semibold mb-4">Join Our Community</h3>
          <p className="text-gray-800 text-sm mb-4">Follow us for the latest trends, updates, and insights.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white">
              <FontAwesomeIcon icon={faFacebookF} size="2x" />
            </a>
            <a href="#" className="hover:text-white">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="#" className="hover:text-white">
              <FontAwesomeIcon icon={faTiktok} size="2x" />
            </a>
            <a href="#" className="hover:text-white">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-gray-800">
          <p>© 2024 Ato Creatives. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


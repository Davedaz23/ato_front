import React, { useState, useContext, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faSearch, faBars } from '@fortawesome/free-solid-svg-icons';

import { faBook, faCogs, faEnvelope, faPen, faUsers, faSignOutAlt, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import AuthModal from './Adimn/AuthModal';
import UserAccountModal from './Adimn/UserAccountModal';
import { AuthContext } from '../Context/AuthContext';
import logo from '../assets/Icons/logo.svg';
import ReactCountryFlag from "react-country-flag";
import { faFacebook, faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext) || {};
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const localData = ['Our Story', 'Services', 'Contact', 'Blog', 'Connect'];

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
        setSearchQuery('');
        setSearchResults([]);
    };

    const handleInputChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (query.trim() === '') {
            setSearchResults([]);
        } else {
            const results = localData.filter((item) => item.toLowerCase().includes(query.toLowerCase()));
            setSearchResults(results);
        }
    };

    const handleGoogleSearch = () => {
        const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
        window.open(googleSearchUrl, '_blank');
    };

    const navbarRef = useRef(null);
    const dropdownRef = useRef(null);

    const navItemClass = "hover:text-[#FD5F20] hover:opacity-60 cursor-pointer";

    const toggleNavbar = () => setIsOpen((prev) => !prev);
    const handleLogout = () => {
        logout();
        setIsDropdownOpen(false);
    };

    const handleModalClose = () => setIsModalOpen(false);
    const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef, navbarRef]);

    const handleMobileLinkClick = () => {
        setIsOpen(false); // Close the mobile menu
    };

    return (
<nav className="fixed top-4 left-0 right-0 z-50 shadow-lg shadow-backdrop items-center bg-white rounded-lg p-2 md:p-4 mx-auto max-w-[90%] md:max-w-[80%] lg:max-w-[70%]" ref={navbarRef}>
{/* <nav className="fixed top-4 left-0 right-0 z-50 shadow-lg shadow-backdrop items-center bg-white rounded-lg p-2 md:p-4 mx-auto max-w-[90%] md:max-w-[80%] lg:max-w-[70%]"> */}

<div className="container mx-auto max-w-6xl px-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <RouterLink to="/">
                        <img
                            className="h-8 w-auto object-contain cursor-pointer"
                            src={logo}
                            alt="Logo"
                        />
                    </RouterLink>

                    {/* Desktop Links */}
                    <div className="hidden md:flex space-x-3 text-[#FD5F20] text-sm font-bold">
                        <RouterLink to="/ourStory" className={navItemClass}>
                            Our Story
                        </RouterLink>
                        <RouterLink to="/Service" className={navItemClass}>
                            Services
                        </RouterLink>

                        <RouterLink to="/blog" className={navItemClass}>
                            Blog
                        </RouterLink>
                        <RouterLink to="/Connect" className={navItemClass}>
                            Connect
                        </RouterLink>
                        <ReactCountryFlag countryCode="US" svg className="ml-2" title="EN" />
                        <div className="relative">
                            <button onClick={toggleSearch} className="focus:outline-none" aria-label="Toggle search">
                                <FontAwesomeIcon icon={faSearch} className="text-xl" />
                            </button>
                            {isSearchOpen && (
                                <div className="absolute top-full mt-2 left-0 bg-white shadow-lg rounded-lg p-4 z-50">
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={handleInputChange}
                                        placeholder="Search..."
                                        className="w-64 p-2 border border-gray-300 rounded-md focus:outline-none"
                                    />
                                    <ul className="mt-2">
                                        {searchResults.length > 0 ? (
                                            searchResults.map((result, idx) => (
                                                <li key={idx} className="p-2 hover:bg-gray-100 cursor-pointer">{result}</li>
                                            ))
                                        ) : (
                                            searchQuery && (
                                                <li onClick={handleGoogleSearch} className="p-2 hover:bg-gray-100 cursor-pointer text-gray-500">
                                                    Search on Google for "{searchQuery}"
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <ul className="flex space-x-2 text-[#FD5F20] text-xl">
                            {[
                                { href: 'https://www.facebook.com', icon: faFacebook },
                                { href: 'https://www.instagram.com', icon: faInstagram },
                                { href: 'https://www.tiktok.com', icon: faTiktok },
                                { href: 'https://www.youtube.com', icon: faYoutube },
                            ].map(({ href, icon }, idx) => (
                                <li key={idx}>
                                    <a href={href} target="_blank" rel="noopener noreferrer" className={navItemClass}>
                                        <FontAwesomeIcon icon={icon} />
                                    </a>
                                </li>
                            ))}
                        </ul>
                        {user ? (
                            <>
                                <RouterLink to="/admin" className={navItemClass}>
                                    <FontAwesomeIcon icon={faSignOutAlt} className="mr-1" /> Admin Panel
                                </RouterLink>
                                <li className="relative" ref={dropdownRef}>
                                    <button onClick={toggleDropdown} className="hover:underline" aria-label="User Details">
                                        {user.email}
                                    </button>
                                    {isDropdownOpen && (
                                        <UserAccountModal
                                            user={user}
                                            onLogout={handleLogout}
                                            onClose={() => setIsDropdownOpen(false)}
                                        />
                                    )}
                                </li>
                            </>
                        ) : (
                            <button onClick={() => setIsModalOpen(true)} className="hover:underline" aria-label="Login">
                                <FontAwesomeIcon icon={faSignInAlt} className="mr-1" /> Login
                            </button>
                        )}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden">
                        <button className="text-[#FD5F20] font-bold text-2xl" onClick={toggleNavbar} aria-label="Toggle Navbar">
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden bg-gradient-to-r from-[#FD5F20] to-[#FF6A33] text-white font-bold text-lg shadow-lg rounded-lg mt-2 p-4">
                        <ul className="space-y-4">
                            <li>
                                <RouterLink to="/ourStory" onClick={handleMobileLinkClick} className={`${navItemClass} flex items-center transition transform hover:scale-105`}>
                                    Our Story
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/Service" onClick={handleMobileLinkClick} className={`${navItemClass} flex items-center transition transform hover:scale-105`}>
                                    Services
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/?section=ContactForm" onClick={handleMobileLinkClick} className={`${navItemClass} flex items-center transition transform hover:scale-105`}>
                                    Contact
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/blog" onClick={handleMobileLinkClick} className={`${navItemClass} flex items-center transition transform hover:scale-105`}>
                                    Blog
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/Connect" onClick={handleMobileLinkClick} className={`${navItemClass} flex items-center transition transform hover:scale-105`}>
                                    Connect
                                </RouterLink>
                            </li>
                            {user ? (
                                <li onClick={handleLogout} className={`${navItemClass} flex items-center transition transform hover:scale-105`}>
                                    <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" /> Logout
                                </li>
                            ) : (
                                <li>
                                    <button onClick={() => setIsModalOpen(true)} className={`${navItemClass} flex items-center transition transform hover:scale-105`}>
                                        <FontAwesomeIcon icon={faSignInAlt} className="mr-2" /> Login
                                    </button>
                                </li>
                            )}
                        </ul>
                    </div>
                )}
            </div>
            <AuthModal isOpen={isModalOpen} onClose={handleModalClose} />
        </nav>
    );
};

export default Navbar;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaChevronDown, FaNewspaper, FaBlog, FaEnvelope, FaFileContract, FaBars } from 'react-icons/fa';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false); // State to handle collapsed sidebar
  const [isMobileView, setIsMobileView] = useState(false); // State to handle mobile view

  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isNewsMenuOpen, setIsNewsMenuOpen] = useState(false);
  const [isBlogsMenuOpen, setIsBlogsMenuOpen] = useState(false);
  const [isContactMenuOpen, setIsContactMenuOpen] = useState(false);
  const [isContractMenuOpen, setIsContractMenuOpen] = useState(false);

  // Toggles for submenus
  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);
  const toggleNewsMenu = () => setIsNewsMenuOpen(!isNewsMenuOpen);
  const toggleBlogsMenu = () => setIsBlogsMenuOpen(!isBlogsMenuOpen);
  const toggleContactMenu = () => setIsContactMenuOpen(!isContactMenuOpen);
  const toggleContractMenu = () => setIsContractMenuOpen(!isContractMenuOpen);

  // Toggle collapse/expand sidebar
 const [open, setOpen] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [def, setDef] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
 const toggleSidebar=()=>setOpen(!open);
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (open === false)
      setDef(true);
    setOpen(true);

  };
  const handleMouseLeave = () => {
    if (def) {
      setOpen(false);
      setIsHovered(false);
      setDef(false);
    }
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMinimized(window.innerWidth <= 768); // Example breakpoint for when to minimize
      setOpen(window.innerWidth > 768)

    };

    handleResize(); // Set initial state based on window width
    window.addEventListener('resize', handleResize); // Listen for window resize

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up event listener
    };
  }, []);

  return (
  //   <div
  //   className={`h-full bg-white text-[#FD5F20] transition-all duration-300 z-50 
  //     ${open ? 'w-64' : 'w-20'} ${isMobileView ? 'hover:w-64' : ''}`}
  //   onMouseEnter={() => isMobileView && setIsCollapsed(false)} // Expand on hover for mobile view
  //   onMouseLeave={() => isMobileView && setIsCollapsed(true)}  // Collapse on mouse leave for mobile view
  // >

<div
        className={`${open ? "w-64 " : " w-20 "
          } duration-300 bg-[#FD5F20]  h-full flex flex-col  text-lg  text-white h-screen overflow-hidden hover:w-60 transition-all
           duration-300 ease-in-out
          ${isHovered && !open ? 'hover:w-60' : ''
          }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >

      {/* Collapse/Expand button */}
      <div className="flex justify-between items-center px-4 py-4">
        <h1 className={`text-2xl font-bold ${!open ? 'hidden' : 'block'}`}>Admin Panel</h1>
        <button onClick={toggleSidebar} className="text-2xl">
          <FaBars />
        </button>
      </div>

      {/* User Management Section */}
      <div>
        <button 
          className="flex items-center justify-between w-full py-2 px-4 text-left rounded hover:bg-[#FD5F20] hover:bg-opacity-25"
          onClick={toggleUserMenu}
        >
          <span className="flex items-center">
            <FaUser className="mr-2" />
            <span className={`${!open ? 'hidden' : 'block'}`}>User Management</span>
          </span>
          {!!open && (
            <FaChevronDown className={`transition-transform ${isUserMenuOpen ? 'rotate-180' : ''}`} />
          )}
        </button>
        {isUserMenuOpen && !!open && (
          <div className="pl-8 space-y-2">
            <Link to="/user-registration" className="block py-2 px-4 rounded hover:bg-[#FD5F20] hover:bg-opacity-25">User Registration</Link>
            <Link to="/user-list" className="block py-2 px-4 rounded hover:bg-[#FD5F20] hover:bg-opacity-25">User List</Link>
          </div>
        )}
      </div>

      {/* News Management Section */}
      <div>
        <button 
          className="flex items-center justify-between w-full py-2 px-4 text-left rounded hover:bg-[#FD5F20] hover:bg-opacity-25"
          onClick={toggleNewsMenu}
        >
          <span className="flex items-center">
            <FaNewspaper className="mr-2" />
            <span className={`${!open ? 'hidden' : 'block'}`}>News Management</span>
          </span>
          {!!open && (
            <FaChevronDown className={`transition-transform ${isNewsMenuOpen ? 'rotate-180' : ''}`} />
          )}
        </button>
        {isNewsMenuOpen && !!open && (
          <div className="pl-8 space-y-2">
            <Link to="/post-news" className="block py-2 px-4 rounded hover:bg-[#FD5F20] hover:bg-opacity-25">Post News</Link>
            <Link to="/news-list" className="block py-2 px-4 rounded hover:bg-[#FD5F20] hover:bg-opacity-25">News List</Link>
          </div>
        )}
      </div>

      {/* Blogs Management Section */}
      <div>
        <button 
          className="flex items-center justify-between w-full py-2 px-4 text-left rounded hover:bg-[#FD5F20] hover:bg-opacity-25"
          onClick={toggleBlogsMenu}
        >
          <span className="flex items-center">
            <FaBlog className="mr-2" />
            <span className={`${!open ? 'hidden' : 'block'}`}>Blogs Management</span>
          </span>
          {!!open && (
            <FaChevronDown className={`transition-transform ${isBlogsMenuOpen ? 'rotate-180' : ''}`} />
          )}
        </button>
        {isBlogsMenuOpen && !!open && (
          <div className="pl-8 space-y-2">
            <Link to="/post-blogs" className="block py-2 px-4 rounded hover:bg-[#FD5F20] hover:bg-opacity-25">Post Blog</Link>
            <Link to="/blog-list" className="block py-2 px-4 rounded hover:bg-[#FD5F20] hover:bg-opacity-25">Blog List</Link>
          </div>
        )}
      </div>

      {/* Contact Management Section */}
      <div>
        <button 
          className="flex items-center justify-between w-full py-2 px-4 text-left rounded hover:bg-[#FD5F20] hover:bg-opacity-25"
          onClick={toggleContactMenu}
        >
          <span className="flex items-center">
            <FaEnvelope className="mr-2" />
            <span className={`${!open ? 'hidden' : 'block'}`}>Contact Management</span>
          </span>
          {!!open && (
            <FaChevronDown className={`transition-transform ${isContactMenuOpen ? 'rotate-180' : ''}`} />
          )}
        </button>
        {isContactMenuOpen && !!open && (
          <div className="pl-8 space-y-2">
            <Link to="/manage-contact" className="block py-2 px-4 rounded hover:bg-[#FD5F20] hover:bg-opacity-25">Manage Contact Us</Link>
            <Link to="/contact-list" className="block py-2 px-4 rounded hover:bg-[#FD5F20] hover:bg-opacity-25">Contact List</Link>
          </div>
        )}
      </div>

      {/* Contract Management Section */}
      <div>
        <button 
          className="flex items-center justify-between w-full py-2 px-4 text-left rounded hover:bg-[#FD5F20] hover:bg-opacity-25"
          onClick={toggleContractMenu}
        >
          <span className="flex items-center">
            <FaFileContract className="mr-2" />
            <span className={`${!open ? 'hidden' : 'block'}`}>Contract Management</span>
          </span>
          {!!open && (
            <FaChevronDown className={`transition-transform ${isContractMenuOpen ? 'rotate-180' : ''}`} />
          )}
        </button>
        {isContractMenuOpen && !!open && (
          <div className="pl-8 space-y-2">
            <Link to="/create-contract" className="block py-2 px-4 rounded hover:bg-[#FD5F20] hover:bg-opacity-25">Create Contract</Link>
            <Link to="/contract-list" className="block py-2 px-4 rounded hover:bg-[#FD5F20] hover:bg-opacity-25">Contract List</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;

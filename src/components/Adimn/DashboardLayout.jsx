import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar'; // Import the Sidebar component

const DashboardLayout = () => {
  return (
    <div className="flex mt-20 min-h-screen" >
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-100 overflow-hidden">
       
        {/* Render the nested routes here */}
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;

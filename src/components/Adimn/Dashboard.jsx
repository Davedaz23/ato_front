import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom'; // Import Outlet

const Dashboard = () => {
  const [stats, setStats] = useState({
    usersCount: 0,
    newsCount: 0,
    blogsCount: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/admin/stats');
        const data = await response.json();
        setStats({
          usersCount: data.usersCount,
          newsCount: data.newsCount,
          blogsCount: data.blogsCount,
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="flex mt-20 min-h-screen">
    
      <div className="flex-1 p-6 bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700">Users</h2>
            <p className="text-4xl font-bold">{stats.usersCount}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700">News Posts</h2>
            <p className="text-4xl font-bold">{stats.newsCount}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700">Blogs</h2>
            <p className="text-4xl font-bold">{stats.blogsCount}</p>
          </div>
        </div>
        {/* Render nested route content here */}
     
      </div>
    </div>
  );
};

export default Dashboard;

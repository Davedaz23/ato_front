import React, { useEffect, useState } from 'react';

const VisitorStats = () => {
  const [visitorData, setVisitorData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/getVisitorData'); // Your backend endpoint that interacts with GA API
      const data = await response.json();
      setVisitorData(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Visitor Statistics</h2>
      {visitorData ? (
        <div>
          <p>Total Visitors: {visitorData.totalVisitors}</p>
          <p>Sessions: {visitorData.sessions}</p>
          <p>Page Views: {visitorData.pageViews}</p>
          {/* Add more stats as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default VisitorStats;

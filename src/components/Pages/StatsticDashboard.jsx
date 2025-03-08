import React, { useContext, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { api } from '../../api';
import { AuthContext } from '../../Context/AuthContext';

const StatisticDashboard = () => {
  const { user } = useContext(AuthContext); // Access user from AuthContext
  const [metrics, setMetrics] = useState([]);
  const [metricState, setMetricState] = useState([]);
  const [loading, setLoading] = useState(true); // New loading state

  useEffect(() => {
    fetchMetrics();
  }, []);

  // Fetch metrics and their like counts from the server
  const fetchMetrics = async () => {
    setLoading(true); // Set loading to true when fetching
    try {
      const response = await api.get('/metrics/GetAllMetrics');
      console.log("defar", response.data.metrics);
      const data = response.data.metrics;

      // Initialize metric state with fetched data
      setMetrics(data);
      setMetricState(
        data.map((metric) => ({
          liked: metric.userLiked || false,
          likeCount: metric.likeCount || 0,
          showComment: false,
        }))
      );
    } catch (err) {
      console.error('Failed to fetch metrics', err.Message);
    } finally {
      setLoading(false); // Set loading to false once the data is fetched
    }
  };

  // Handle Like button functionality for each metric
  const handleLike = async (index, metricId) => {
    if (!user) {
      alert('Please log in to like this metric.');
      return;
    }

    const updatedState = [...metricState];
    const liked = !updatedState[index].liked;
console.log("Defar user",user.id, "Metric"+ metricId);
    try {
      const response = await api.post('/metrics/LikeMetric', {
        metricId,
        userId: user.id, // Send the logged-in user's ID
        liked,
      });

      updatedState[index].liked = liked;
      updatedState[index].likeCount = response.data.likeCount; // Update like count from response
      setMetricState(updatedState);
    } catch (err) {
      console.error('Failed to update like status', err);
    }
  };

  // Handle Comment button functionality for each metric
  const handleComment = (index) => {
    const updatedState = [...metricState];
    updatedState[index].showComment = !updatedState[index].showComment;
    setMetricState(updatedState);
  };

  // Handle Share button functionality for each metric
  const handleShare = (index) => {
    const shareUrl = window.location.href;
    const shareText = `Check out the stats for ${metrics[index].label}`;
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
      '_blank'
    );
  };

  return (
    <div className="flex flex-col min-h-full m-2 px-4 sm:px-4 lg:px-4">
      <h2 className="text-2xl font-bold m-4">Customer Experience</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 rounded border px-4 py-4">
        {loading ? (
          <div className="text-center text-xl">Loading metrics...</div> // Loading state
        ) : metrics.length === 0 ? (
          <div className="text-center text-xl">No metrics available.</div> // No data state
        ) : (
          metrics.map((metric, index) => (
            <div key={metric.metricId} className="bg-white rounded-lg shadow-lg flex flex-col h-full relative">
              <div className="flex-grow m-4 p-4">
                <h3 className="text-xl font-semibold m-2">{metric.label}</h3>
                <p className="text-2xl font-bold">{metric.current_value}</p>
                <p className={`text-sm ${metric.change_percent.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>
                  {metric.change_percent} {metric.previous_value ? ` (Previous: ${metric.previous_value})` : ''}
                </p>
              </div>
              {/* Footer with icons */}
              <div className="flex justify-between items-center bg-[#FD5F20] p-4 mt-4 rounded-b-lg space-x-4">
                {/* Like Button */}
                <button
                  className="group p-2 hover:text-blue-500"
                  onClick={() => handleLike(index, metric.metricId)}
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full">
                    <FontAwesomeIcon
                      icon={faHeart}
                      className={`text-lg ${metricState[index].liked ? 'text-red-500' : 'text-white'}`}
                    />
                  </span>
                  <span className="text-white text-sm">{metricState[index].likeCount} Likes</span>
                </button>

                {/* Comment Button */}
                <button className="group p-2 hover:text-blue-500" onClick={() => handleComment(index)}>
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full">
                    <FontAwesomeIcon icon={faComment} className="text-white text-lg" />
                  </span>
                </button>

                {/* Share Button */}
                <button className="group p-2 hover:text-blue-500" onClick={() => handleShare(index)}>
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full">
                    <FontAwesomeIcon icon={faShareAlt} className="text-white text-lg" />
                  </span>
                </button>
              </div>

              {/* Modal - Comment Section */}
              {metricState[index].showComment && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-white p-6 rounded-lg max-w-md w-full">
                    <h3 className="text-lg font-semibold mb-4">Write a Comment</h3>
                    <textarea
                      className="w-full h-24 p-2 border border-gray-300 rounded-md"
                      placeholder="Write a comment..."
                    ></textarea>
                    <div className="mt-4 flex justify-between">
                      <button
                        className="bg-[#FD5F20] text-white px-4 py-2 rounded-lg"
                        onClick={() => handleComment(index)}
                      >
                        Cancel
                      </button>
                      <button className="bg-[#FD5F20] text-white px-4 py-2 rounded-lg">
                        Post Comment
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default StatisticDashboard;

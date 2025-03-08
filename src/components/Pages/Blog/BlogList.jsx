import React from 'react';
import '../../../style.css'

const BlogPostList = ({ posts, loading }) => { // Destructure props correctly

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-lg text-gray-500">Loading...</div>
      </div>
    );
  }

  if (!posts || posts.length === 0) { // Check if posts exist
    return (
      <div className="flex justify-center items-center relative">
        <div className="text-lg text-gray-500">No blogs available</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
       <h2 className="text-4xl font-extrabold text-center mb-4 text-gray-800">
    Insights & Expertise
  </h2>
  <p className="text-lg text-center mb-8 text-gray-600">
    Explore our curated collection of blog posts designed to enhance your understanding of the latest trends and strategies in digital marketing. Dive into expert insights, practical tips, and in-depth analyses that empower you to make informed decisions and stay ahead in a rapidly evolving landscape.
  </p>
  <div className='devider  border border-t-[#FD5F20] mb-8'></div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-1 ">
        {posts.map((post) => (
          <div key={post.id} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl  border border-b-[#FD5F20] transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">{post.title}</h3>
            <div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: post.content }} />
            <hr className="my-4" />
            <p className="text-sm text-[#FD5F20]">
  Posted on: { new Date(post.created_at).toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false // Set to true for 12-hour format, false for 24-hour format
})}
</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPostList;

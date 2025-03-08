// BlogPost.jsx
import React from 'react';

const BlogPost = () => {
  return (
    <div className="container mx-auto my-2 px-4">
      {/* Blog Post Title */}
      <h1 className="text-4xl font-bold mb-4">My Awesome Blog Post</h1>

      {/* Blog Metadata */}
      <div className="text-gray-500 mb-6">
        <span>Posted on September 20, 2024</span>
      </div>

      {/* Blog Image */}
      <img
        src="https://via.placeholder.com/800x400"
        alt="Blog cover"
        className="w-full rounded-lg mb-8"
      />

      {/* Blog Content */}
      <div className="prose prose-lg max-w-none">
        {/* Introduction */}
        <p className="mb-4">
          Welcome to my blog post! Today, we're discussing some interesting
          topics and learning about how to create blog posts using React and
          Tailwind CSS.
        </p>

        {/* Unordered List */}
        <h2 className="text-2xl font-semibold mb-2">Key Points</h2>
        <ul className="list-disc list-inside mb-4">
          <li>React makes it easy to create dynamic UIs.</li>
          <li>Tailwind CSS provides utility classes for styling.</li>
          <li>Combining them results in clean and fast development.</li>
        </ul>

        {/* Ordered List */}
        <h2 className="text-2xl font-semibold mb-2">Steps to Create a Blog</h2>
        <ol className="list-decimal list-inside mb-4">
          <li>Set up a React project with Tailwind CSS.</li>
          <li>Create a blog component with HTML elements.</li>
          <li>Style the component using Tailwind's utility classes.</li>
        </ol>

        {/* Blog Links */}
        <h2 className="text-2xl font-semibold mb-2">Useful Resources</h2>
        <p className="mb-4">
          Check out the following links for more information:
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline ml-1"
          >
            React Documentation
          </a>{' '}
          and
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline ml-1"
          >
            Tailwind CSS Documentation
          </a>
          .
        </p>

        {/* Conclusion */}
        <p className="mb-4">
          Thanks for reading! We hope you enjoyed learning about building a blog
          using React and Tailwind CSS. Stay tuned for more tutorials.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;

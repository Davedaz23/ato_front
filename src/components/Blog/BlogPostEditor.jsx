import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import ImageResize from 'quill-image-resize-module-react';
import axios from 'axios';
import { api } from '../../api';

// Register the image resize module
const Quill = ReactQuill.Quill;
Quill.register('modules/imageResize', ImageResize);

const BlogPostEditor = ({ isOpen, onClose, onPostSuccess }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/blogs/PostBlog', {
        title,
        content,
      });
      onPostSuccess();
      alert('Blog post published successfully!');
      setTitle('');
      setContent('');
      onClose();



    } catch (error) {
      console.error('Error publishing post:', error);
      alert('Failed to publish post. Please try again.');
    }
  };

  // If modal is not open, don't render anything
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-auto">
  <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/2  relative mt-16">
    <h2 className="text-2xl font-bold mb-4 text-gray-200 bg-[#FD5F20] rounded-t-lg mt-4 p-4">Create a Blog Post</h2>
   <div className='mt-2 p-6'>


        <form onSubmit={handleSubmit} className='m-2'> 
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-2 mb-4 border border-[#FD5F20] rounded focus:border-blue-500 active:border-[#FD5F20]"
            />
          <ReactQuill
          
            theme="snow"
            value={content}
            onChange={setContent}
            placeholder="Write your content here..."
            modules={{
              toolbar: [
                [{ header: [1, 2, false] }], // Header options
                ['bold', 'italic', 'underline', 'strike'], // Basic text formatting
                [{ list: 'ordered' }, { list: 'bullet' }], // Ordered and bullet lists
                [{ script: 'sub' }, { script: 'super' }], // Subscript and superscript
                [{ color: [] }, { background: [] }], // Text and background color options
                [{ align: [] }], // Alignment options
                ['blockquote', 'code-block'], // Blockquote and code block
                ['image', 'video', 'clean'], // Image, video, and clean formatting
              ],
              imageResize: { modules: ['Resize', 'DisplaySize'] },
            }}
            className="mb-4 [#FD5F20]"
            style={{ height: '300px', maxHeight: '300px', border:{color:'[#FD5F20]' }}} // Specify a fixed height for the editor
          />
<div className=" flex divider" /> 
          <div className="flex justify-end mt-8 pt-8 ">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2 hover:bg-gray-400 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#FD5F20] text-white px-4 py-2 rounded hover:bg-[#E3551A] transition"
            >
              Publish Post
            </button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default BlogPostEditor;

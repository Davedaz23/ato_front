// src/pages/CreatePost.js
import React, { useState, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const { user } = useContext(AuthContext);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/posts/create', { title, content, imageUrl }, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    history.push('/');
  };

  if (!user) return <div>Please log in to create a post.</div>;

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl">Create Post</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          placeholder="Title" 
          className="border p-2 w-full mb-4" 
          required 
        />
        <textarea 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
          placeholder="Content" 
          className="border p-2 w-full mb-4" 
          required 
        />
        <input 
          type="text" 
          value={imageUrl} 
          onChange={(e) => setImageUrl(e.target.value)} 
          placeholder="Image URL" 
          className="border p-2 w-full mb-4" 
        />
        <button type="submit" className="bg-blue-500 text-white p-2">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;

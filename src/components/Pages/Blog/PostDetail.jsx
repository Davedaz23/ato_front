// src/pages/PostDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get(`/api/posts/${id}`);
      setPost(response.data);
    };
    fetchPost();
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <img src={post.imageUrl} alt={post.title} className="w-full h-auto" />
      <p>{post.content}</p>
    </div>
  );
};

export default PostDetail;

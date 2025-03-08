// // BlogPostList.jsx
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { convertFromRaw } from 'draft-js';

// const BlogPostList = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const response = await axios.get('https://backend.atocreative.et/api/blogs');
//       setPosts(response.data);
//     };

//     fetchPosts();
//   }, []);

//   return (
//     <div>
//       <h2>Blog Posts</h2>
//       {posts.map((post) => {
//         const contentState = convertFromRaw(JSON.parse(post.content));
//         return (
//           <div key={post.id}>
//             <h3>{post.title}</h3>
//             <div dangerouslySetInnerHTML={{ __html: contentState.getPlainText() }} />
//             <hr />
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default BlogPostList;

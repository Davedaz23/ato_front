// // src/components/Login.js
// import React, { useState, useContext } from 'react';
// // import AuthContext from './../Context/AuthContext.jsx';
// import {AuthContext} from '../Context/AuthContext';
// import { useNavigate } from 'react-router-dom';
// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { login } = useContext(AuthContext);
//   const history = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await login(email, password);
//     history('/');
//   };

//   return (
//     <div className="container mx-auto w-full min-h-screen">
//       <h1 className="text-2xl">Login</h1>
//       <form className='mt-20 pt-2 ' onSubmit={handleSubmit}>
//         <input 
//           type="email" 
//           value={email} 
//           onChange={(e) => setEmail(e.target.value)} 
//           placeholder="Email" 
//           className="border p-2 w-full mb-4" 
//           required 
//         />
//         <input 
//           type="password" 
//           value={password} 
//           onChange={(e) => setPassword(e.target.value)} 
//           placeholder="Password" 
//           className="border p-2 w-full mb-4" 
//           required 
//         />
//         <button type="submit" className="bg-blue-500 text-white p-2">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;

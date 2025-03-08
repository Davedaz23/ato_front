import axios from 'axios';

// Create an axios instance with a base URL
export const api = axios.create({
   baseURL: 'https://backend.atocreative.et/api/', // Replace with your actual base URL
//  baseURL: 'http://localhost:5000/api/', // Replace with your actual base URL
  timeout: 10000, // Optional: set a timeout for requests
});

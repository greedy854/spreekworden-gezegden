// src/axios.js
import axios from 'axios';

// Set up Axios with default configuration
axios.defaults.baseURL = 'http://127.0.0.1:8000/api';  // Laravel backend
axios.defaults.withCredentials = true;  // Ensure cookies are sent with requests

export default axios;

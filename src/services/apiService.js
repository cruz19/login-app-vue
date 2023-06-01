import axios from 'axios';

const apiService = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});

export default apiService;
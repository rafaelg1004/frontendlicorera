import axios from 'axios';
import { getCookie } from '@/utils/cookies';

let rawBaseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';
if (rawBaseURL && !rawBaseURL.endsWith('/api') && !rawBaseURL.endsWith('/api/')) {
  rawBaseURL = `${rawBaseURL.replace(/\/$/, '')}/api`;
}

const api = axios.create({
  baseURL: rawBaseURL,
});

// Interceptor para pegar el JWT en cada petición
api.interceptors.request.use((config) => {
  const token = getCookie('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;

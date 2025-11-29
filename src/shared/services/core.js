import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor - Jalan sebelum request dikirim
api.interceptors.request.use(
  (config) => {
    console.log('📤 Request:', config.method?.toUpperCase(), config.url);
    
    return config;
  },
  (error) => {
    console.error('❌ Request Error:', error);
    return Promise.reject(error);
  }
);

// Response Interceptor - Jalan setelah dapat response
api.interceptors.response.use(
  (response) => {
    console.log('📥 Response:', response.status, response.config.url);
    
    return response;
  },
  (error) => {
    // Handle error berdasarkan status code
    if (error.response) {
      const { status, data } = error.response;
      
      switch (status) {
        case 401:
          // Unauthorized - Token expired atau tidak valid
          console.error('❌ 401: Unauthorized - Token expired');
          if (typeof window !== 'undefined') {
            window.location.href = '/login';
          }
          break;
          
        case 403:
          // Forbidden - Tidak punya akses
          console.error('❌ 403: Forbidden - No access');
          break;
          
        case 404:
          // Not Found
          console.error('❌ 404: Resource not found');
          break;
          
        case 500:
          // Internal Server Error
          console.error('❌ 500: Server error');
          break;
          
        default:
          console.error(`❌ ${status}:`, data.message || 'Something went wrong');
      }
    } else if (error.request) {
      // Request dikirim tapi tidak ada response (network error)
      console.error('❌ Network Error: No response from server');
    } else {
      // Error lain
      console.error('❌ Error:', error.message);
    }
    
    return Promise.reject(error);
  }
);

export default api;
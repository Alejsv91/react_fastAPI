import axios, { type AxiosInstance } from 'axios';

const BASE_URL = 'http://localhost:8000';

const api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, 
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      console.error('Error de red o el servidor FastAPI está apagado.');
    }
    return Promise.reject(error);
  }
);

export default api;

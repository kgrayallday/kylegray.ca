import axios from 'axios';

const API_URL = import.meta.env.VITE_DB_HOST;
const API_TOKEN = import.meta.env.VITE_DB_KG_TOKEN;

console.log('using API URL:', API_URL);
console.log('using API TOKEN:', API_TOKEN);

const api = axios.create({
  baseURL: `${API_URL}/items/`,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
});

export default api;

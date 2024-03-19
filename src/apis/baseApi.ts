import { BASE_API_URL } from '../constants/index';
import axios from 'axios';

const api = axios.create({
  baseURL: BASE_API_URL,
});


export default api;

// src/services/api.js
import axios from 'axios';
import { useAuthStore } from '../stores/authStore';

const api = axios.create({
  baseURL: 'https://psychic-space-waffle-6wg5pjjrq6g2x49v-4000.app.github.dev/api/', // ajuste conforme seu backend
});

// Adiciona token no header automaticamente
api.interceptors.request.use(config => {
  const token = useAuthStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;

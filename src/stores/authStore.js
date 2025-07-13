// src/stores/authStore.js
import { create } from 'zustand';


export const useAuthStore = create(set => ({
  token: null,
  user: null,
  isLoggedIn: false,
  setToken: (token) => set({ token, isLoggedIn: !!token }),
  setUser: (user) => set({ user }),
  logout: () => set({ token: null, user: null, isLoggedIn: false }),
}));

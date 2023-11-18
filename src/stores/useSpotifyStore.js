import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useSpotifyStore = create(persist((set) => ({
  user: {},
  accessToken: null,
  setUser: (userData) => set(state => ({ user: userData })),
  setAccessToken: (token) => set(state => ({ accessToken: token })),
}), { name: 'spotify_store' }));

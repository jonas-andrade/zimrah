import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/zimrah.io/", // use este se estiver em https://usuario.github.io/zimrah-frontend/
})

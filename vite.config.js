import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/cardamom_village/',
  plugins: [react()],
  server: {
    host: true
  }
})


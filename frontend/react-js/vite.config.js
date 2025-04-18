import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 9000,
    proxy: {
      '/realtime-weather': 'http://backend:8080',
      '/forecast-weather': 'http://backend:8080',
    }
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    proxy: {
      '/api': {
        target: 'https://alexander-cloud-based-functions.azurewebsites.net',
        changeOrigin: true,
        secure: false
      }
    }
  }
});

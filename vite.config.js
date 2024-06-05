import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 80,
    strictPort: false,
    host: true,
    origin: "http://0.0.0.0:80",
    proxy: {
      '/api': 'http://localhost:3000',
    }
  },
})

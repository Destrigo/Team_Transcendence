import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    host: true,
    // HMR through Caddy HTTPS reverse proxy (https://localhost)
    hmr: {
      host: 'localhost',
      protocol: 'wss',
      clientPort: 443,
    },
  },
})

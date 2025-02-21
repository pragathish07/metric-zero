import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(),tailwindcss()],
  build: {

    outDir: '../backend/static',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'), 
        login: resolve(__dirname, 'login.html'),
       
      },
    },
  },
  server: {
    historyApiFallback: {
      rewrites: [
        // Serve login.html for /login exactly
        { from: /^\/login$/, to: '/login.html' },
        // For all other routes, fallback to index.html (your SPA)
        { from: /./, to: '/index.html' },
      ],
    },
  },
})

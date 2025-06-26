// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  server:{
     proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        //This means where /api is used then a target value will
        //automatic will be used for prefix
      },
     },
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})

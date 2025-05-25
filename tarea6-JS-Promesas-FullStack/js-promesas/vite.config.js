import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //Agregar alias @ para la carpeta src
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
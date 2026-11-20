import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Sitio de usuario de GitHub Pages (https://gab271.github.io) → base en la raíz
export default defineConfig({
  plugins: [react()],
  base: '/',
})

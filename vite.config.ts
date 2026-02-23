import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'

// ⚠️ Cambia 'repositorio' por el nombre real de tu repo
const repoName = '/iam/'

// https://vite.dev/config/
export default defineConfig({
  base: repoName,
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
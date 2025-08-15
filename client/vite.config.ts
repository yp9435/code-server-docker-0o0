import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      // proxy /ide to the Docker code-server (port 8080)
      '/ide/': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        ws: true,
        // code-server is rooted at '/', so strip the /ide prefix
        rewrite: (path) => path.replace(/^\/ide/, '/')
      }
    }
  },
  build: { outDir: 'dist' }
})

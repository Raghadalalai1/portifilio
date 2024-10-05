import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    base: "/portifilio/",
  
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        // Add other HTML files here...
      }
    }
  },
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      strict: false
    }
  }
})

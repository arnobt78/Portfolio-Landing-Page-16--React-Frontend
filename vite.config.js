import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/** Vite config: React plugin for JSX, production build output in dist/, no source maps. */
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})

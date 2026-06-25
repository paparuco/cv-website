import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base must match the GitHub Pages repo name so asset paths resolve.
// If you rename the repo (or use a user/org root page), update `base`.
export default defineConfig({
  plugins: [react()],
  base: '/cv-website/',
})

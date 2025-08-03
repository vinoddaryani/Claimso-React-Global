// The NEW, DEFINITIVE vite.config.js for our Web Application

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // The 'build' configuration is now much simpler.
  build: {
    // The output directory is 'dist', which is correct for Firebase Hosting.
    outDir: 'dist',

    // We no longer need complex rollupOptions. Vite's default behavior
    // using index.html as the entry point is exactly what we want.
  }
});
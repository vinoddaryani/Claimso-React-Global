// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [react(),  viteStaticCopy({ // <-- ADD THIS PLUGIN
      targets: [
        {
          src: 'success.html',
          dest: '.'
        },
        {
          src: 'cancel.html',
          dest: '.'
        }
      ]
    })
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'popup.html'),
        'content-v2': resolve(__dirname, 'src/content-v2.js'),
        'background': resolve(__dirname, 'src/background.js'),
      },
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      }
    },
    outDir: 'dist'
  }
});
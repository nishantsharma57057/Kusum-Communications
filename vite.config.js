import { defineConfig } from 'vite';
import { resolve } from 'node:path';
export default defineConfig({
  esbuild: { jsx: 'automatic' },
  build: {
    rollupOptions: {
      input: {
        home: resolve(import.meta.dirname, 'index.html'),
        about: resolve(import.meta.dirname, 'about/index.html'),
        services: resolve(import.meta.dirname, 'services/index.html'),
        gallery: resolve(import.meta.dirname, 'our-gallery/index.html'),
        story: resolve(import.meta.dirname, '2026/09/06/kusum-communications-story/index.html'),
        contact: resolve(import.meta.dirname, 'contact/index.html'),
      },
    },
  },
});

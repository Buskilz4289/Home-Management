import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    // Disable SW generation to avoid "Dynamic require of workbox-build" in ESM. Manifest only.
    VitePWA({
      disable: true,
      registerType: 'autoUpdate',
      manifest: {
        name: 'ניהול בית',
        short_name: 'ניהול בית',
        theme_color: '#2563eb',
        background_color: '#f1f5f9',
        display: 'standalone',
        start_url: './index.html',
      },
    }),
  ],
  // Required for GitHub Pages: https://buskilz4289.github.io/Home-Management/
  base: '/Home-Management/',
});

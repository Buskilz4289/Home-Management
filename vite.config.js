import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    // disable: true avoids "Dynamic require of workbox-build" in ESM. Use public/manifest.webmanifest for PWA metadata.
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
  base: '/Home-Management/',
});

// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      disable: true, // avoids "Dynamic require of workbox-build" in ESM
      registerType: 'autoUpdate',
      manifest: {
        name: 'ניהול בית',
        short_name: 'ניהול בית',
        theme_color: '#2563eb',
        background_color: '#f1f5f9',
        display: 'standalone',
        start_url: './index.html',
        icons: [
          { src: './favicon-192.png', sizes: '192x192', type: 'image/png' },
          { src: './favicon-512.png', sizes: '512x512', type: 'image/png' },
        ],
      },
    }),
  ],
  // Must be /RepoName/ for GitHub Pages: https://buskilz4289.github.io/Home-Management/
  base: '/Home-Management/',
})

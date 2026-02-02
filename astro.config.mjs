// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';

// Keystatic only in development
const isDev = import.meta.env?.DEV ?? process.env.NODE_ENV !== 'production';

// https://astro.build/config
export default defineConfig({
  site: 'https://saufex.eu',
  output: 'static',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
    react(),
    markdoc(),
  ],
  build: {
    assets: 'assets'
  }
});
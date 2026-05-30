// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';

// Keystatic admin (/keystatic) only in development. It injects on-demand
// (prerender: false) routes, so it is excluded from the static production
// build to keep the output adapter-free.
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
    ...(isDev ? [keystatic()] : []),
  ],
  build: {
    assets: 'assets'
  }
});
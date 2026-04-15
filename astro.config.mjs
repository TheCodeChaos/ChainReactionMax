// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

const base = process.env.PR_PREVIEW_BASE_URL || '/';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE || 'https://chainreactionmax.pages.dev',
  base,
  integrations: [sitemap()],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
  },
});

// @ts-check
import { defineConfig } from 'astro/config';
import path from 'path';

// https://astro.build/config
export default defineConfig({
  integrations: [],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@scss/variables.scss";`
        }
      }
    },
    resolve: {
      alias: {
        '@scss': path.resolve('./src/scss'),
      },
    },
  }
});

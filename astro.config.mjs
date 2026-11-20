import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  site: 'https://cataratasbrasil.com',
  i18n: {
    defaultLocale: 'pt',
    locales: ['zh', 'en', 'es', 'pt', 'ko'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://97.wjkcvpn.cfd',
  integrations: [tailwind(), sitemap()],
  compressHTML: true,
});

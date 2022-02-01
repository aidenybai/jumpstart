import { defineConfig } from 'vite';
import legacy from 'vite-plugin-legacy';
import markdown from 'vite-plugin-markdown';
import WindiCSS from 'vite-plugin-windicss';

export default defineConfig({
  plugins: [
    WindiCSS(),
    markdown(),
    legacy({
      targets: ['> 0.25%', 'last 2 versions', 'Firefox ESR', 'not dead'],
    }),
  ],
});

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';
import { viteSingleFile } from 'vite-plugin-singlefile';
import Components from 'unplugin-vue-components/vite';

export default defineConfig({
  plugins: [
    vue(),
    Components({
      dirs: ['src/components'],
      extensions: ['vue'],
    }),
    vuetify({ autoImport: true }),
    viteSingleFile()
  ],
});
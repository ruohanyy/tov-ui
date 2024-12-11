import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vue from '@vitejs/plugin-vue'
import tsxResolveTypes from 'vite-plugin-tsx-resolve-types'
import alias from './alias'

export default defineConfig({
  plugins: [
    vueJsx(),
    tsxResolveTypes(),
    vue(),
  ],
  resolve: {
    alias,
  },
  build: {
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'vue',
        },
      },
    },
    lib: {
      entry: 'src/index.ts',
      formats: ['umd'],
      fileName: () => 'tov-ui.js',
      name: 'tovUI',
    },
  },
})

import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import fs from 'fs-extra'
import alias from './alias'

export default defineConfig({
  build: {
    emptyOutDir: false,
    rollupOptions: {
      output: {
        assetFileNames: () => 'tov-ui.css',
      },
    },
    lib: {
      entry: 'src/style.ts',
      formats: ['es'],
      fileName: () => 'tov-ui-style.js',
    },
  },
  resolve: {
    alias,
  },
  plugins: [
    {
      name: 'remove:tov-ui-style.js',
      closeBundle() {
        const tovPath = fileURLToPath(new URL('./dist', import.meta.url))
        const styleFilePath = path.resolve(tovPath, 'tov-ui-style.js')
        fs.removeSync(styleFilePath)
      },
    },
  ],
})

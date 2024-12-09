import { defineConfig } from "vite";
import vueJsx from '@vitejs/plugin-vue-jsx'
import vue from '@vitejs/plugin-vue'
import tsxResolveTypes from 'vite-plugin-tsx-resolve-types'
import dts from 'vite-plugin-dts'

export default defineConfig({
    plugins: [
        vueJsx(),
        vue(),
        tsxResolveTypes(),
        dts({
            entryRoot: 'src',
            outDir: ['es', 'lib'],
            exclude: ['**/tests/**'],
        }),
    ],
    build: {
        rollupOptions: {
        external: ['@floating-ui/vue', 'vue', '@v-c/utils', 'lodash-es', '@tov-ui-study/utils', '@tov-ui-study/icons'],
            output: [
                {
                  preserveModules: true,
                  preserveModulesRoot: 'src',
                  entryFileNames: '[name].js',
                  format: 'esm',
                  dir: 'es',
                },
                {
                  preserveModules: true,
                  preserveModulesRoot: 'src',
                  entryFileNames: '[name].js',
                  exports: 'named',
                  format: 'cjs',
                  dir: 'lib',
                },
            ],
        },
        lib: {
            entry: 'src/index.ts'
        }
    }
})
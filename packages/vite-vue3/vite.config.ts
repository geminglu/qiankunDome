import { fileURLToPath, URL } from 'node:url'
import qiankun from 'vite-plugin-qiankun'

import { defineConfig, UserConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'
import { name } from './package.json'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const { VITE_APP_ORIGIN, VITE_APP_PORD } = loadEnv(mode, __dirname)

  return {
    plugins: [vue(), vueJsx(), VueDevTools(), qiankun(name, { useDevMode: true })],
    server: {
      port: VITE_APP_PORD as unknown as number,
      origin: VITE_APP_ORIGIN
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
}) as UserConfig

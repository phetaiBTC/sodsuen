import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss(),],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // css: {
  //   preprocessorOptions: {
  //     less: {
  //       modifyVars: {
  //         'primary-color': '#A86523',
  //         'link-color': '#A86523',
  //         'text-color': '#A86523',
  //       },
  //       javascriptEnabled: true,
  //     },
  //   },
  // },
})

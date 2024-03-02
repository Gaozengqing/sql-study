import { fileURLToPath, URL } from 'node:url'

import { defineConfig, optimizeDeps } from 'vite'
import ElementPlus from 'unplugin-element-plus/vite'
import monacoEditorPlugin from "vite-plugin-monaco-editor"


import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ElementPlus(),
    // monacoEditorPlugin({ languages: ['javascript', 'typescript', 'html', 'css', 'json','java','sql','groovy','shell','python']})
    monacoEditorPlugin({ languages: ['sql'] }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // 解决路径
  assetsDir: 'static',
    parallel: false,
    publicPath: './',
})



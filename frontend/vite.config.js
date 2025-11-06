import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // Configuración para SSG
  build: {
    rollupOptions: {
      input: 'src/main.js',
    },
  },
  // CRÍTICO: Configuración SSR para vite-ssg
  // ssr: {
  //   // No externalizar estas dependencias
  //   noExternal: ['@formkit/vue', '@formkit/themes', '@formkit/i18n', 'vue-i18n'],
  //   // Si el error persiste, también agrega esto:
  //   external: ['parse5'],
  // },
  // Optimización de dependencias
  optimizeDeps: {
    include: ['@formkit/vue', '@formkit/themes', '@formkit/i18n', 'vue-i18n'],
  },
})

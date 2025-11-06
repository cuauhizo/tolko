import { ViteSSG } from 'vite-ssg'
import { createHead } from '@vueuse/head'

import App from './App.vue'
import routerOptions from './router'

// Estilos globales
import './assets/main.css'
import 'aos/dist/aos.css'

// --- FormKit ---
import { plugin, defaultConfig } from '@formkit/vue'
import formKitConfig from '../formkit.config.js'

// --- i18n ---
import { createI18n } from 'vue-i18n'
import { messages } from '@/lang/messages.js'

// --- Formato de números ---
import VueNumberFormat from 'vue-number-format'

// --- Configura i18n ---
const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages,
  legacy: false,
})

// --- SEO (head manager) ---
const head = createHead()

// --- Crea la App con ViteSSG ---
export const createApp = ViteSSG(App, routerOptions, ({ app, router, routes, isClient }) => {
  // Plugins globales
  app.use(i18n)
  app.use(head)
  app.use(VueNumberFormat, { prefix: '$ ', decimal: '.', thousand: ',' })

  // FormKit solo en cliente (previene errores SSR)
  if (isClient) {
    app.use(plugin, defaultConfig(formKitConfig))

    // Inicializar AOS solo en cliente
    import('aos').then(({ default: AOS }) => {
      AOS.init()
    })
  }
})

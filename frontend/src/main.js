import { ViteSSG } from 'vite-ssg'
import { createHead } from '@vueuse/head'

import App from './App.vue'
// ¡CORREGIDO! Importa las opciones del router
import routerOptions from './router'

// Importa tus estilos y configuraciones
import './assets/main.css'
import 'aos/dist/aos.css'
// import { plugin, defaultConfig } from '@formkit/vue'
import { plugin } from '@formkit/vue'
import formKitConfig from '../formkit.config.js'
import { createI18n } from 'vue-i18n'
import VueNumberFormat from 'vue-number-format'

// ¡CORREGIDO! Importa el default export de messages
import { messages } from '@/lang/messages.js'

// Configura i18n
const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages,
  legacy: false,
})

// Crea la instancia de @vueuse/head
const head = createHead()

// Configura ViteSSG
export const createApp = ViteSSG(
  App,
  // ¡CORREGIDO! Pasa las opciones del router
  routerOptions,
  ({ app, router, routes, isClient }) => {
    // Instala todos tus plugins de Vue aquí
    // app.use(router) // <-- ¡ELIMINA ESTA LÍNEA!
    app.use(i18n)
    // app.use(head)
    // app.use(plugin, defaultConfig)
    app.use(plugin, formKitConfig)
    app.use(VueNumberFormat, { prefix: '$ ', decimal: '.', thousand: ',' })

    if (isClient) {
      import('aos').then(AOS => {
        AOS.init()
      })
    }
  }
)

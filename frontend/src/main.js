import { ViteSSG } from 'vite-ssg'
import { createHead } from '@vueuse/head'

import App from './App.vue'
import router from './router'
import AOS from 'aos'
// Importa tus estilos y configuraciones
import './assets/main.css'
import 'aos/dist/aos.css'
import { plugin, defaultConfig } from '@formkit/vue'
import { createI18n } from 'vue-i18n'
import VueNumberFormat from 'vue-number-format'
import { messages } from '@/lang/messages.js'

// Configura i18n
const i18n = createI18n({
  legacy: false,
  locale: 'es',
  fallbackLocale: 'es',
  messages,
})

// Crea la instancia de @vueuse/head
const head = createHead()

// Configura ViteSSG
export const createApp = ViteSSG(
  // El componente raíz de la app
  App,
  // Opciones del router
  {
    routes: router.options.routes, // Pasamos las rutas del router
    // Puedes configurar la base de la URL si es necesario
    // base: import.meta.env.BASE_URL,
  },
  // Función de configuración (se ejecuta en ambos lados, cliente y build)
  ({ app, router, routes, isClient }) => {
    // Instala todos tus plugins de Vue aquí
    app.use(router)
    app.use(i18n)
    app.use(head)
    app.use(plugin, defaultConfig)
    app.use(VueNumberFormat, { prefix: '$ ', decimal: '.', thousand: ',' })

    // Inicializa AOS solo en el lado del cliente
    if (isClient) {
      import('aos').then(AOS => {
        AOS.init()
      })
    }
  }
)

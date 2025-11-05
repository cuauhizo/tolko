// Importa tus vistas principales.
// Podrías necesitar refactorizar App.vue
// para que sea un layout y tener una vista "Home.vue"
// import { createWebHistory } from 'vue-router' // ¡Importa createMemoryHistory!
// import HomeView from '../views/HomeView.vue'

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: HomeView,
//   },
//   // Ruta comodín para 404
//   {
//     path: '/:pathMatch(.*)*',
//     name: 'NotFound',
//     component: () => import('@/views/NotFound.vue'),
//   },
//   // Si tuvieras más páginas, las añades aquí
//   // { path: '/nosotros', name: 'Nosotros', component: () => import('../views/Nosotros.vue') }
// ]

// export default {
//   history: createWebHistory(),
//   routes,
// }

// ======================================================

import { createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
]

// ¡LA SOLUCIÓN! Exporta las OPCIONES, no la instancia.
export default {
  history: createWebHistory(),
  routes,
}

// Importa tus vistas principales.
// Podrías necesitar refactorizar App.vue
// para que sea un layout y tener una vista "Home.vue"
import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router' // ¡Importa createMemoryHistory!

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
  },
  // Ruta comodín para 404
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
  },
  // Si tuvieras más páginas, las añades aquí
  // { path: '/nosotros', name: 'Nosotros', component: () => import('../views/Nosotros.vue') }
]

const router = createRouter({
  history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
  routes,
})

export default router

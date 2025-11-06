import { createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
  },
]

// ¡LA CORRECCIÓN CLAVE! Exporta solo el objeto de opciones
export default {
  history: createWebHistory(),
  routes,
}

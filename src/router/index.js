import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '/',
        name: 'frontpage',
        component: () => import('../views/FrontPageView.vue')
      },
      {
        path: 'attractions',
        name: 'attractions',
        component: () => import('../views/AttractionsPageView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

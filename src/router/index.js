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
      }, {
        path: 'attractions',
        name: 'attractions',
        component: () => import('../views/AttractionsPageView.vue')
      }, {
        path: 'attractions/:attractionId',
        name: 'attraction',
        component: () => import('../views/AttractionInfoView.vue')
      }, {
        path: 'activities',
        name: 'activities',
        component: () => import('../views/ActivitiesPageView.vue')
      }, {
        path: 'restaurants',
        name: 'restaurants',
        component: () => import('../views/RestaurantsPageView.vue')
      }, {
        path: 'hotels',
        name: 'hotels',
        component: () => import('../views/HotelsPageView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

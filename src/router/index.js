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
        component: () => import('../views/AttractionsPageView.vue'),
        children: [
          {
            path: 'search/:searchKeyword',
            name: 'attractionsSearch',
            component: () => import('../views/AttractionsPageView.vue')
          }
        ]
      }, {
        path: 'attractions/:attractionId',
        name: 'attractionInfo',
        component: () => import('../views/info/AttractionInfoView.vue')
      }, {
        path: 'activities',
        name: 'activities',
        component: () => import('../views/ActivitiesPageView.vue'),
        children: [
          {
            path: 'search/:searchKeyword',
            name: 'activitiesSearch',
            component: () => import('../views/ActivitiesPageView.vue')
          }
        ]
      }, {
        path: 'activities/:activityId',
        name: 'activityInfo',
        component: () => import('../views/info/ActivityInfoView.vue')
      }, {
        path: 'restaurants',
        name: 'restaurants',
        component: () => import('../views/RestaurantsPageView.vue'),
        children: [
          {
            path: 'search/:searchKeyword',
            name: 'restaurantsSearch',
            component: () => import('../views/RestaurantsPageView.vue')
          }
        ]
      }, {
        path: 'restaurants/:restaurantId',
        name: 'restaurantInfo',
        component: () => import('../views/info/RestaurantInfoView.vue')
      }, {
        path: 'hotels',
        name: 'hotels',
        component: () => import('../views/HotelsPageView.vue'),
        children: [
          {
            path: 'search/:searchKeyword',
            name: 'hotelsSearch',
            component: () => import('../views/HotelsPageView.vue')
          }
        ]
      }, {
        path: 'hotels/:hotelId',
        name: 'hotelInfo',
        component: () => import('../views/info/HotelInfoView.vue')
      }, {
        path: 'city/:cityId',
        name: 'city',
        component: () => import('../views/city/CityPageView.vue'),
        children: [
          {
            path: 'search/:searchKeyword',
            name: 'searchResult',
            component: () => import('../views/city/CityPageView.vue')
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

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
        component: () => import('../views/category/AttractionsPageView.vue'),
        children: [
          {
            path: 'search/:searchKeyword',
            name: 'attractionsSearch',
            component: () => import('../views/category/AttractionsPageView.vue')
          }, {
            path: 'search/:searchKeyword',
            name: 'frontpageSearch',
            component: () => import('../views/category/AttractionsPageView.vue')
          }
        ]
      }, {
        path: 'attractions/:attractionId',
        name: 'attractionInfo',
        component: () => import('../views/info/AttractionInfoView.vue')
      }, {
        path: 'activities',
        name: 'activities',
        component: () => import('../views/category/ActivitiesPageView.vue'),
        children: [
          {
            path: 'search/:searchKeyword',
            name: 'activitiesSearch',
            component: () => import('../views/category/ActivitiesPageView.vue')
          }
        ]
      }, {
        path: 'activities/:activityId',
        name: 'activityInfo',
        component: () => import('../views/info/ActivityInfoView.vue')
      }, {
        path: 'restaurants',
        name: 'restaurants',
        component: () => import('../views/category/RestaurantsPageView.vue'),
        children: [
          {
            path: 'search/:searchKeyword',
            name: 'restaurantsSearch',
            component: () => import('../views/category/RestaurantsPageView.vue')
          }
        ]
      }, {
        path: 'restaurants/:restaurantId',
        name: 'restaurantInfo',
        component: () => import('../views/info/RestaurantInfoView.vue')
      }, {
        path: 'hotels',
        name: 'hotels',
        component: () => import('../views/category/HotelsPageView.vue'),
        children: [
          {
            path: 'search/:searchKeyword',
            name: 'hotelsSearch',
            component: () => import('../views/category/HotelsPageView.vue')
          }
        ]
      }, {
        path: 'hotels/:hotelId',
        name: 'hotelInfo',
        component: () => import('../views/info/HotelInfoView.vue')
      }, {
        path: 'city/:cityId/attractions',
        name: 'attractionsOfCity',
        component: () => import('../views/city/CityAttractionsView.vue'),
        children: [
          {
            path: 'search/:searchKeyword',
            name: 'attractionsSearchOfCity',
            component: () => import('../views/city/CityAttractionsView.vue')
          }
        ]
      }, {
        path: 'city/:cityId/activities',
        name: 'activitiesOfCity',
        component: () => import('../views/city/CityActivitiesView.vue'),
        children: [
          {
            path: 'search/:searchKeyword',
            name: 'activitiesSearchOfCity',
            component: () => import('../views/city/CityActivitiesView.vue')
          }
        ]
      }, {
        path: 'city/:cityId/restaurants',
        name: 'restaurantsOfCity',
        component: () => import('../views/city/CityRestaurantsView.vue'),
        children: [
          {
            path: 'search/:searchKeyword',
            name: 'restaurantsSearchOfCity',
            component: () => import('../views/city/CityRestaurantsView.vue')
          }
        ]
      }, {
        path: 'city/:cityId/hotels',
        name: 'hotelsOfCity',
        component: () => import('../views/city/CityHotelsView.vue'),
        children: [
          {
            path: 'search/:searchKeyword',
            name: 'hotelsSearchOfCity',
            component: () => import('../views/city/CityHotelsView.vue')
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

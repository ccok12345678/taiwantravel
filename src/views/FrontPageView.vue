<template lang="pug">
Attractions(
  :attractions="attractions"
  :location="location")

Activities(:activities="activities")

Restaurants(:restaurants="restaurants")

Hotels(:hotels="hotels")

VueLoading(v-if="isLoading")
</template>

<script>
import { reactive, ref } from 'vue'
import { round } from 'lodash'
import getData from '@/methods/getData'
import Attractions from '@/components/frontpage/FrontPageAttractions.vue'
import Activities from '@/components/frontpage/FrontPageActivities.vue'
import Restaurants from '@/components/frontpage/FrontPageRestaurants.vue'
import Hotels from '@/components/frontpage/FrontPageHotels.vue'

export default {
  components: {
    Attractions,
    Activities,
    Restaurants,
    Hotels
  },
  setup () {
    const attractions = reactive({ list: [] })
    const activities = reactive({ list: [] })
    const restaurants = reactive({ list: [] })
    const hotels = reactive({ list: [] })

    const location = reactive({
      lat: '',
      lon: ''
    })

    const isLoading = ref(true)

    try {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const latitude = await round(position.coords.latitude, 9)
        const longitude = await round(position.coords.longitude, 10)

        location.lat = latitude
        location.lon = longitude
        console.log(location)

        const attractionApi = `v2/Tourism/ScenicSpot?%24top=3&%24spatialFilter=nearby(${latitude}%2C%20${longitude}%2C%205000)&%24format=JSON`
        attractions.list = await getData(attractionApi)

        const activitiesApi = `v2/Tourism/Activity?%24top=3&%24spatialFilter=nearby(${latitude}%2C%20${longitude}%2C%2020000)&%24format=JSON`
        activities.list = await getData(activitiesApi)

        const tastyApi = `v2/Tourism/Restaurant?%24top=3&%24spatialFilter=nearby(${latitude}%2C%20${longitude}%2C%203000)&%24format=JSON`
        restaurants.list = await getData(tastyApi)

        const hotelsApi = `v2/Tourism/Hotel?%24top=3&%24spatialFilter=nearby(${latitude}%2C%20${longitude}%2C%205000)&%24format=JSON`
        hotels.list = await getData(hotelsApi)

        isLoading.value = false
      }, async () => {
        const attractionApi = 'v2/Tourism/ScenicSpot?%24top=3&%24format=JSON'
        attractions.list = await getData(attractionApi)

        const activitiesApi = 'v2/Tourism/Activity?%24top=3&%24format=JSON'
        activities.list = await getData(activitiesApi)

        const tastyApi = 'v2/Tourism/Restaurant?%24top=3&%24format=JSON'
        restaurants.list = await getData(tastyApi)

        const hotelsApi = 'v2/Tourism/Hotel?%24top=3&%24format=JSON'
        hotels.list = await getData(hotelsApi)

        isLoading.value = false
      })
    } catch (error) {
      console.log('location error:', error)
    }

    return {
      attractions,
      activities,
      restaurants,
      hotels,
      location,
      isLoading
    }
  }
}
</script>

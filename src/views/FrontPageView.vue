<template lang="pug">
Attractions(
  :attractions="attractions"
  :location="location")

Activities(:activities="activities")

Tasty(:tastys="tastys")

Hotels(:hotels="hotels")

VueElementLoading(is-full-screen
  :active="isLoading"
  spinner="line-down"
  size="50"
  duration="0.8"
  color="#3FB195"
  background-color="rgba(50, 50, 50, .8)"
  text="載入中...")
</template>

<script>
import { reactive, ref } from 'vue'
import { round } from 'lodash'
import getData from '@/methods/getData'
import Attractions from '@/components/frontpage/FrontPageAttractions.vue'
import Activities from '@/components/frontpage/FrontPageActivities.vue'
import Tasty from '@/components/frontpage/FrontPageTasty.vue'
import Hotels from '@/components/frontpage/FrontPageHotels.vue'
import VueElementLoading from 'vue-element-loading'

export default {
  components: {
    Attractions,
    Activities,
    Tasty,
    Hotels,
    VueElementLoading
  },
  setup () {
    const attractions = reactive({ list: [] })
    const activities = reactive({ list: [] })
    const tastys = reactive({ list: [] })
    const hotels = reactive({ list: [] })

    const location = reactive({
      lat: '',
      lon: ''
    })

    const isLoading = ref(false)

    try {
      isLoading.value = true

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
        tastys.list = await getData(tastyApi)

        const hotelsApi = `v2/Tourism/Hotel?%24top=3&%24spatialFilter=nearby(${latitude}%2C%20${longitude}%2C%205000)&%24format=JSON`
        hotels.list = await getData(hotelsApi)

        isLoading.value = false
      }, async () => {
        const attractionApi = 'v2/Tourism/ScenicSpot?%24top=3&%24format=JSON'
        attractions.list = await getData(attractionApi)

        const activitiesApi = 'v2/Tourism/Activity?%24top=3&%24format=JSON'
        activities.list = await getData(activitiesApi)

        const tastyApi = 'v2/Tourism/Restaurant?%24top=3&%24format=JSON'
        tastys.list = await getData(tastyApi)

        const hotelsApi = 'v2/Tourism/Hotel?%24top=3&%24format=JSON'
        hotels.list = await getData(hotelsApi)

        isLoading.value = false
      })
    } catch (error) {
      isLoading.value = false
      console.log('location error:', error)
    }

    return {
      attractions,
      activities,
      tastys,
      hotels,
      location,
      isLoading
    }
  }
}
</script>

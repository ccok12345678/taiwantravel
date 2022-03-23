<template lang="pug">
.min-vh-100.d-flex.flex-column

  NavBar

  .container-fluid.p-4
    Banner(v-if="$route.name === 'frontpage'")

    router-view

  Footer.mt-auto
</template>

<script>
import { reactive, provide } from 'vue'
import { round } from 'lodash'
import Banner from '@/components/frontpage/FrontPageBanner.vue'
import Footer from '@/components/frontpage/FrontPageFooter.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'HomeView',
  components: {
    Banner,
    Footer,
    NavBar
  },
  setup () {
    const userLocation = reactive({ lat: null, lon: null })

    if ('geolocation' in navigator) {
      try {
        navigator.geolocation.getCurrentPosition(async (position) => {
          userLocation.lat = await round(position.coords.latitude, 9)
          userLocation.lon = await round(position.coords.longitude, 10)
        }, () => {
          userLocation.lat = null
          userLocation.lon = null
        })
      } catch (error) {
        console.log('location error:', error)
      }
    } else {
      userLocation.lat = null
      userLocation.lon = null
    }

    provide('userLocation', userLocation)
  }
}

</script>

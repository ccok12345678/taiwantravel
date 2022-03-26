<template lang="pug">
h2 詳細資訊
div {{ tempHotel }}
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import getData from '@/methods/getData'

export default {
  setup (props) {
    const route = useRoute()
    const { hotelId } = route.params
    console.log(hotelId)

    const tempHotel = ref({})

    const api = 'v2/Tourism/Hotel?%24format=JSON'

    onMounted(async () => {
      try {
        const hotelList = await getData(api)
        tempHotel.value = hotelList
          .filter(hotel => hotel.HotelID === hotelId)
      } catch (error) {
        console.log('fetch error', error)
      }
    })

    return {
      tempHotel
    }
  }
}
</script>

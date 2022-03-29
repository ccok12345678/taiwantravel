<template lang="pug">
main.text-wrap
  InfoPageNavbar(
    v-if="!!tempHotel.HotelName"
    :title="tempHotel.HotelName"
    :backPath="'/hotels'"
  )

  InfoBannerPic(
    v-if="tempHotel.Picture"
    :picture="tempHotel.Picture"
  )

  InfoBasic(
    :phone="tempHotel.Phone"
    :location="tempHotel.Address"
    :openTime="tempHotel.OpenTime"
  )

  InfoIntroduction(
    :description="tempHotel.Description"
    :title="'住宿'"
  )

  InfoTravel(
    :position="tempHotel.Position"
    :travelInfo="tempHotel.TravelInfo"
  )

  MoreHotels(
    :nearby="nearby"
    :city="tempHotel.City"
  )

VueLoading(v-if="isLoading")
</template>

<script>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import getData from '@/methods/getData'
import InfoPageNavbar from '@/components/info/InfoPageNavbar.vue'
import InfoBannerPic from '@/components/info/InfoBannerPic.vue'
import InfoBasic from '@/components/info/InfoBasic.vue'
import InfoIntroduction from '@/components/info/InfoIntroduction.vue'
import InfoTravel from '@/components/info/InfoTravel.vue'
import MoreHotels from '@/components/info/MoreHotels.vue'
import VueLoading from '@/components/VueLoading.vue'

export default {
  components: {
    InfoPageNavbar,
    InfoBannerPic,
    InfoBasic,
    InfoIntroduction,
    InfoTravel,
    MoreHotels,
    VueLoading
  },
  setup (props) {
    const route = useRoute()
    const { hotelId } = route.params

    const tempHotel = ref({})
    const nearby = ref([])
    const isLoading = ref(true)

    const api = 'v2/Tourism/Hotel?%24format=JSON'

    onMounted(async () => {
      try {
        const hotelList = await getData(api)
        tempHotel.value = hotelList
          .filter(hotel => hotel.HotelID === hotelId)[0]

        const { PositionLon, PositionLat } = tempHotel.value.Position
        const nearbyApi = `v2/Tourism/Hotel?%24select=HotelID%2CHotelName%2CPicture%2CPhone%2CAddress&%24top=7&%24spatialFilter=nearby(${PositionLat}%2C%20${PositionLon}%2C%2010000)&%24format=JSON`
        nearby.value = await getData(nearbyApi)

        isLoading.value = false
      } catch (error) {
        console.log('fetch error', error)
      }
    })

    watch(() => route.params.hotelId, async (newId) => {
      isLoading.value = true
      try {
        const hotelList = await getData(api)
        tempHotel.value = hotelList
          .filter(hotel => hotel.HotelID === newId)[0]

        const { PositionLon, PositionLat } = tempHotel.value.Position
        const nearbyApi = `v2/Tourism/Hotel?%24select=HotelID%2CHotelName%2CPicture%2CPhone%2CAddress&%24top=7&%24spatialFilter=nearby(${PositionLat}%2C%20${PositionLon}%2C%2010000)&%24format=JSON`
        nearby.value = await getData(nearbyApi)

        isLoading.value = false
      } catch (error) {
        console.log('fetch error', error)
      }
    }, { deep: true })

    return {
      tempHotel,
      nearby,
      isLoading
    }
  }
}
</script>

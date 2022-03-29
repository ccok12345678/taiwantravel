<template lang="pug">
main.text-wrap
  InfoPageNavbar(
    v-if="!!tempRestaurant.RestaurantName"
    :title="tempRestaurant.RestaurantName"
    :backPath="'/restaurants'"
  )

  InfoBannerPic(
    v-if="tempRestaurant.Picture"
    :picture="tempRestaurant.Picture"
  )

  InfoBasic(
    :phone="tempRestaurant.Phone"
    :location="tempRestaurant.Address"
    :openTime="tempRestaurant.OpenTime"
  )

  InfoIntroduction(
    :description="tempRestaurant.Description"
    :title="'美食'"
  )

  InfoTravel(
    :position="tempRestaurant.Position"
  )

  MoreRestaurants(:nearby="nearby")

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
import MoreRestaurants from '@/components/info/MoreRestaurants.vue'
import VueLoading from '@/components/VueLoading.vue'

export default {
  components: {
    InfoPageNavbar,
    InfoBannerPic,
    InfoBasic,
    InfoIntroduction,
    InfoTravel,
    MoreRestaurants,
    VueLoading
  },
  setup (props) {
    const route = useRoute()
    const { restaurantId } = route.params
    console.log(restaurantId)

    const tempRestaurant = ref({})
    const nearby = ref([])
    const isLoading = ref(true)

    const api = 'v2/Tourism/Restaurant?%24format=JSON'

    onMounted(async () => {
      try {
        const restaurantList = await getData(api)
        tempRestaurant.value = restaurantList
          .filter(restaurant => restaurant.RestaurantID === restaurantId)[0]

        const { PositionLon, PositionLat } = tempRestaurant.value.Position
        const nearbyApi = `v2/Tourism/Restaurant?%24select=RestaurantID%2CRestaurantName%2CPicture%2COpenTime%2CAddress&%24top=10&%24spatialFilter=nearby(${PositionLat}%2C%20${PositionLon}%2C%207000)&%24format=JSON`
        nearby.value = await getData(nearbyApi)

        isLoading.value = false
      } catch (error) {
        console.log('fetch error', error)
      }
    })

    watch(() => route.params.restaurantId, async (newId) => {
      isLoading.value = true
      try {
        const RestaurantsList = await getData(api)
        tempRestaurant.value = RestaurantsList
          .filter(restaurant => restaurant.RestaurantID === newId)[0]

        const { PositionLon, PositionLat } = tempRestaurant.value.Position
        const nearbyApi = `v2/Tourism/Restaurant?%24select=RestaurantID%2CRestaurantName%2CPicture%2COpenTime%2CAddress&%24top=10&%24spatialFilter=nearby(${PositionLat}%2C%20${PositionLon}%2C%207000)&%24format=JSON`
        nearby.value = await getData(nearbyApi)

        isLoading.value = false
      } catch (error) {
        console.log('fetch error', error)
      }
    }, { deep: true })

    return {
      tempRestaurant,
      nearby,
      isLoading
    }
  }
}
</script>

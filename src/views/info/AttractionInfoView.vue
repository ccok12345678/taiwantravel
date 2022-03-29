<template lang="pug">
main.text-wrap
  InfoPageNavbar(
    v-if="!!tempAttraction.ScenicSpotName"
    :title="tempAttraction.ScenicSpotName"
    :backPath="'/attractions'"
  )

  InfoBannerPic(
    v-if="tempAttraction.Picture"
    :picture="tempAttraction.Picture"
  )

  InfoBasic(
    :phone="tempAttraction.Phone"
    :location="tempAttraction.Address"
    :openTime="tempAttraction.OpenTime"
  )

  InfoIntroduction(
    :description="tempAttraction.DescriptionDetail"
    :title="'景點'"
  )

  InfoTravel(
    :position="tempAttraction.Position"
    :travelInfo="tempAttraction.TravelInfo"
  )

  MoreAttractions(
    :nearby="nearby"
    :city="tempAttraction.City"
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
import MoreAttractions from '@/components/info/MoreAttractions.vue'
import VueLoading from '@/components/VueLoading.vue'

export default {
  components: {
    InfoPageNavbar,
    InfoBannerPic,
    InfoBasic,
    InfoIntroduction,
    InfoTravel,
    MoreAttractions,
    VueLoading
  },
  setup (props) {
    const route = useRoute()
    const { attractionId } = route.params

    const tempAttraction = ref({})
    const nearby = ref([])
    const isLoading = ref(true)

    const api = 'v2/Tourism/ScenicSpot?%24format=JSON'

    onMounted(async () => {
      try {
        const attractionList = await getData(api)
        tempAttraction.value = attractionList
          .filter(attraction => attraction.ScenicSpotID === attractionId)[0]

        const { PositionLon, PositionLat } = tempAttraction.value.Position
        const nearbyApi = `v2/Tourism/ScenicSpot?%24select=ScenicSpotName%2CPicture%2CCity%2COpenTime%2CScenicSpotID&%24top=5&%24spatialFilter=nearby(${PositionLat}%2C%20${PositionLon}%2C%205000)&%24format=JSON`
        nearby.value = await getData(nearbyApi)

        isLoading.value = false
      } catch (error) {
        console.log('fetch error', error)
      }
    })

    watch(() => route.params.attractionId, async (newId) => {
      isLoading.value = true
      try {
        const attractionList = await getData(api)
        tempAttraction.value = attractionList
          .filter(attraction => attraction.ScenicSpotID === newId)[0]

        const { PositionLon, PositionLat } = tempAttraction.value.Position
        const nearbyApi = `v2/Tourism/ScenicSpot?%24select=ScenicSpotName%2CPicture%2CCity%2COpenTime%2CScenicSpotID&%24top=5&%24spatialFilter=nearby(${PositionLat}%2C%20${PositionLon}%2C%205000)&%24format=JSON`
        nearby.value = await getData(nearbyApi)

        isLoading.value = false
      } catch (error) {
        console.log('fetch error', error)
      }
    }, { deep: true })

    return {
      tempAttraction,
      nearby,
      isLoading
    }
  }
}
</script>

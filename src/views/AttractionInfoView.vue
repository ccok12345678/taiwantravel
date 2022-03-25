<template lang="pug">
.text-wrap(v-if="!!tempAttraction.ScenicSpotName")
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
  )

  InfoTravel(
    :position="tempAttraction.Position"
    :travelInfo="tempAttraction.TravelInfo"
  )

  InfoMoreRelates(
    :nearby="nearby"
    :city="tempAttraction.City"
  )

VueLoading(v-if="isLoading")
</template>

<script>
import { ref, watchEffect, watch } from 'vue'
import { useRoute } from 'vue-router'
import getData from '@/methods/getData'
import InfoPageNavbar from '@/components/info/InfoPageNavbar.vue'
import InfoBannerPic from '@/components/info/InfoBannerPic.vue'
import InfoBasic from '@/components/info/InfoBasic.vue'
import InfoIntroduction from '@/components/info/InfoIntroduction.vue'
import InfoTravel from '@/components/info/InfoTravel.vue'
import InfoMoreRelates from '@/components/info/InfoMoreRelates.vue'
import VueLoading from '@/components/VueLoading.vue'

export default {
  components: {
    InfoPageNavbar,
    InfoBannerPic,
    InfoBasic,
    InfoIntroduction,
    InfoTravel,
    InfoMoreRelates,
    VueLoading
  },
  setup (props) {
    const route = useRoute()
    const { attractionId } = route.params

    const tempAttraction = ref({})
    const isLoading = ref(true)

    const api = 'v2/Tourism/ScenicSpot?%24format=JSON'

    watchEffect(async () => {
      try {
        const attractionList = await getData(api)
        tempAttraction.value = attractionList
          .filter(attraction => attraction.ScenicSpotID === attractionId)[0]
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
        isLoading.value = false
      } catch (error) {
        console.log('fetch error', error)
      }
    }, { deep: true })

    const nearby = ref([])

    watch(tempAttraction, async (attraction) => {
      const { PositionLon, PositionLat } = attraction.Position
      const api = `v2/Tourism/ScenicSpot?%24select=ScenicSpotName%2CPicture%2CCity%2COpenTime%2CScenicSpotID&%24top=5&%24spatialFilter=nearby(${PositionLat}%2C%20${PositionLon}%2C%205000)&%24format=JSON`
      try {
        nearby.value = await getData(api)
      } catch (error) {
        console.log('fetch error:', error)
      }
    })

    return {
      tempAttraction,
      nearby,
      isLoading
    }
  }
}
</script>

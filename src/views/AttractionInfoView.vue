<template lang="pug">
.text-wrap
  InfoPageNavbar(
    :title="tempAttraction.ScenicSpotName"
    :backPath="'/attractions'")

  InfoBannerPic(
    v-if="tempAttraction.Picture"
    :picture="tempAttraction.Picture")

  InfoBasic(
    :phone="tempAttraction.Phone"
    :location="tempAttraction.Address"
    :openTime="tempAttraction.OpenTime")

  InfoIntroduction(:description="tempAttraction.DescriptionDetail")

  InfoTravel(:position="tempAttraction.Position")
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import getData from '@/methods/getData'
import InfoPageNavbar from '@/components/info/InfoPageNavbar.vue'
import InfoBannerPic from '@/components/info/InfoBannerPic.vue'
import InfoBasic from '@/components/info/InfoBasic.vue'
import InfoIntroduction from '@/components/info/InfoIntroduction.vue'
import InfoTravel from '@/components/info/InfoTravel.vue'

export default {
  components: {
    InfoPageNavbar,
    InfoBannerPic,
    InfoBasic,
    InfoIntroduction,
    InfoTravel
  },
  setup (props) {
    const route = useRoute()
    const { attractionId } = route.params
    console.log(attractionId)

    const tempAttraction = ref({})

    const api = 'v2/Tourism/ScenicSpot?%24format=JSON'

    onMounted(async () => {
      try {
        const attractionList = await getData(api)
        tempAttraction.value = attractionList
          .filter(attraction => attraction.ScenicSpotID === attractionId)[0]
        console.log('attraction:', tempAttraction.value)
      } catch (error) {
        console.log('fetch error', error)
      }
    })

    return {
      tempAttraction
    }
  }
}
</script>

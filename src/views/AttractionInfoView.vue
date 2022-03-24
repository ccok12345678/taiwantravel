<template lang="pug">
InfoPageNavbar(
  :title="tempAttraction.ScenicSpotName"
  :backPath="'/attractions'")

</template>

<script>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import getData from '@/methods/getData'
import InfoPageNavbar from '@/components/InfoPageNavbar.vue'

export default {
  components: {
    InfoPageNavbar
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
        console.log(tempAttraction.value)
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

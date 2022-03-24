<template lang="pug">
h2 詳細資訊
div {{ tempAttraction }}
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import getData from '@/methods/getData'

export default {
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
          .filter(attraction => attraction.ScenicSpotID === attractionId)
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

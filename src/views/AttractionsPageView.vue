<template lang="pug">
h2.mb-3.mb-md-4 熱門景點

SortBar.mb-3.mb-md-4

.row.gy-2.gy-md-4
  .col-12.col-sm-6.col-md-4(
    v-for="attraction in attractionList" :key="attraction.ScenicSpotID"  )
    Card.w-100(:attraction="attraction")

</template>

<script>
import { inject, ref, onMounted } from 'vue'
import getData from '@/methods/getData'
import SortBar from '@/components/SortBar.vue'
import Card from '@/components/cards/AttractionCard.vue'
import VueElementLoading from 'vue-element-loading'

export default {
  components: {
    SortBar,
    Card,
    VueElementLoading
  },
  setup () {
    const attractionList = ref([])
    const isLoading = ref(true)
    const { lat, lon } = inject('userLocation')
    console.log('attractions:', lat, lon)

    const url = lat
      ? `v2/Tourism/ScenicSpot?%24select=ScenicSpotName%2CPicture%2CCity%2COpenTime%2CScenicSpotID&%24top=100&%24spatialFilter=nearby(${lat}%2C%20${lon}%2C%2020000)&%24format=JSON`
      : 'v2/Tourism/ScenicSpot?%24select=ScenicSpotName%2CPicture%2CCity%2COpenTime%2CScenicSpotID&%24top=100&%24format=JSON'

    onMounted(async () => {
      try {
        attractionList.value = await getData(url)
        isLoading.value = false
      } catch (error) {
        console.log('fetch error', error)
        isLoading.value = false
      }
      console.log(attractionList.value)
    })

    return {
      attractionList,
      isLoading
    }
  }
}
</script>

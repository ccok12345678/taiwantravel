<template lang="pug">
h3.mb-3.mb-md-4 熱門景點

SortBar.mb-3.mb-md-4

.row.gy-2.gy-md-4
  .col-12.col-sm-6.col-md-4(
    v-for="attraction in pagination.pageData" :key="attraction.ScenicSpotID"  )
    Card.w-100(:attraction="attraction")

nav.d-flex.justify-content-center
  Paginate(
    :page-count="pagination.pageTotal"
    :click-handler="changePage"
    )

VueLoading(v-if="isLoading")
</template>

<script>
import { inject, ref, onMounted } from 'vue'
import getData from '@/methods/getData'
import handleChangePage from '@/methods/handleChangePage'
import SortBar from '@/components/SortBar.vue'
import Card from '@/components/cards/AttractionCard.vue'
import VueLoading from '@/components/VueLoading.vue'
import Paginate from 'vuejs-paginate-next'

export default {
  components: {
    SortBar,
    Card,
    Paginate,
    VueLoading
  },
  setup () {
    const attractionList = ref([])
    const pagination = ref({})
    const isLoading = ref(true)

    const { lat, lon } = inject('userLocation')

    const url = lat
      ? `v2/Tourism/ScenicSpot?%24select=ScenicSpotName%2CPicture%2CCity%2COpenTime%2CScenicSpotID&%24top=100&%24spatialFilter=nearby(${lat}%2C%20${lon}%2C%2020000)&%24format=JSON`
      : 'v2/Tourism/ScenicSpot?%24select=ScenicSpotName%2CPicture%2CCity%2COpenTime%2CScenicSpotID&%24top=100&%24format=JSON'

    onMounted(async () => {
      try {
        attractionList.value = await getData(url)
        pagination.value = handleChangePage(attractionList.value)
        isLoading.value = false
      } catch (error) {
        console.log('fetch error', error)
        isLoading.value = false
      }
      console.log(attractionList.value)
    })

    function changePage (nowPage) {
      console.log(nowPage)
      pagination.value = handleChangePage(attractionList.value, nowPage)
    }

    return {
      isLoading,
      pagination,
      changePage
    }
  }
}
</script>

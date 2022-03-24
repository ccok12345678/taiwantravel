<template lang="pug">
h2.mb-3.mb-md-4 觀光活動

SortBar.mb-3.mb-md-4

.row.gy-2.gy-md-4
  .col-12.col-sm-6.col-md-4(
    v-for="activity in pagination.pageData" :key="activity.ScenicSpotID"  )
    Card.w-100(:activity="activity")

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
import Card from '@/components/cards/ActivityCard.vue'
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
    const activityList = ref([])
    const pagination = ref({})
    const isLoading = ref(true)

    const { lat, lon } = inject('userLocation')

    const url = lat
      ? `v2/Tourism/Activity?%24select=ActivityID%2CActivityName%2CPicture%2CLocation&%24top=100&%24spatialFilter=nearby(${lat}%2C%20${lon}%2C%2025000)&%24format=JSON`
      : 'v2/Tourism/Activity?%24select=ActivityID%2CActivityName%2CPicture%2CLocation&%24top=100&%24format=JSON'

    onMounted(async () => {
      try {
        activityList.value = await getData(url)
        pagination.value = handleChangePage(activityList.value)
        isLoading.value = false
      } catch (error) {
        console.log('fetch error', error)
        isLoading.value = false
      }
      console.log(activityList.value)
    })

    function changePage (nowPage) {
      pagination.value = handleChangePage(activityList.value, nowPage)
    }

    return {
      isLoading,
      pagination,
      changePage
    }
  }
}
</script>

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
import { ref, watchEffect, watch } from 'vue'
import { useRoute } from 'vue-router'
import getData from '@/methods/getData'
import handleChangePage from '@/methods/handleChangePage'
import SortBar from '@/components/SortBar.vue'
import Card from '@/components/cards/AttractionCard.vue'
import VueLoading from '@/components/VueLoading.vue'
import Paginate from 'vuejs-paginate-next'
import { attractionFilter } from '@/methods/keywordFilters'

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

    const url = 'v2/Tourism/ScenicSpot?%24select=ScenicSpotName%2CPicture%2CCity%2COpenTime%2CScenicSpotID&%24format=JSON'

    const route = useRoute()
    const keyword = route.params.searchKeyword

    watchEffect(async () => {
      try {
        attractionList.value = await getData(url)
        pagination.value = handleChangePage(
          attractionFilter(keyword, attractionList.value)
        )
        isLoading.value = false
      } catch (error) {
        console.log('fetch error', error)
        isLoading.value = false
      }
      console.log(attractionList.value)
    })

    watch(() => route.params.searchKeyword, (newKeyword) => {
      pagination.value = handleChangePage(
        attractionFilter(newKeyword, attractionList.value)
      )
    })

    function changePage (nowPage) {
      window.scrollTo(0, 0)
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

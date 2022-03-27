<template lang="pug">
h3.mb-3.mb-md-4 住宿推薦

SortBar.mb-3.mb-md-4

.row.gy-2.gy-md-4
  .col-12.col-sm-6.col-md-4(
    v-for="hotel in pagination.pageData" :key="hotel.ScenicSpotID"  )
    Card.w-100(:hotel="hotel")

nav.d-flex.justify-content-center
  Paginate(
    :page-count="pagination.pageTotal"
    :click-handler="changePage"
    )

VueLoading(v-if="isLoading")
</template>

<script>
import { ref, watch, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { hotelFilter } from '@/methods/keywordFilters'
import getData from '@/methods/getData'
import handleChangePage from '@/methods/handleChangePage'
import SortBar from '@/components/SortBar.vue'
import Card from '@/components/cards/HotelCard.vue'
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
    const hotelList = ref([])
    const pagination = ref({})
    const isLoading = ref(true)

    const api = 'v2/Tourism/Hotel?format=JSON'

    const route = useRoute()
    const keyword = route.params.searchKeyword

    watchEffect(async () => {
      try {
        hotelList.value = await getData(api)
        pagination.value = handleChangePage(
          hotelFilter(keyword, hotelList.value)
        )
        isLoading.value = false
      } catch (error) {
        console.log('fetch error', error)
      }
    })

    watch(() => route.params.searchKeyword, (newKeyword) => {
      pagination.value = handleChangePage(
        hotelFilter(newKeyword, hotelList.value)
      )
    })

    function changePage (newPage) {
      window.scrollTo(0, 0)
      pagination.value = handleChangePage(
        hotelFilter(keyword, hotelList.value),
        newPage
      )
    }

    return {
      isLoading,
      pagination,
      changePage
    }
  }
}
</script>

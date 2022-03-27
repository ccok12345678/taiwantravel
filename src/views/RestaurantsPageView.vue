<template lang="pug">
h3.mb-3.mb-md-4 美食品嚐

SortBar.mb-3.mb-md-4

.row.gy-2.gy-md-4
  .col-12.col-sm-6.col-md-4(
    v-for="restaurant in pagination.pageData" :key="restaurant.ScenicSpotID"  )
    Card.w-100(:restaurant="restaurant")

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
import { restaurantFilter } from '@/methods/keywordFilters'
import getData from '@/methods/getData'
import handleChangePage from '@/methods/handleChangePage'
import SortBar from '@/components/SortBar.vue'
import Card from '@/components/cards/RestaurantCard.vue'
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
    const restaurantList = ref([])
    const pagination = ref({})
    const isLoading = ref(true)

    const api = 'v2/Tourism/Restaurant?%24format=JSON'

    const route = useRoute()
    const keyword = route.params.searchKeyword

    watchEffect(async () => {
      try {
        restaurantList.value = await getData(api)
        pagination.value = handleChangePage(
          restaurantFilter(keyword, restaurantList.value)
        )
        isLoading.value = false
      } catch (error) {
        console.log('fetch error', error)
        isLoading.value = false
      }
    })

    watch(() => route.params.searchKeyword, (newKeyword) => {
      pagination.value = handleChangePage(
        restaurantFilter(newKeyword, restaurantList.value),
        1
      )
    })

    function changePage (newPage) {
      window.scrollTo(0, 0)
      pagination.value = handleChangePage(
        restaurantFilter(keyword, restaurantList.value),
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

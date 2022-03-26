<template lang="pug">
h3.mb-3.mb-md-4 {{ cityName.name }}

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
import cities from '@/data/cities'

export default {
  components: {
    SortBar,
    Card,
    Paginate,
    VueLoading
  },
  setup () {
    const route = useRoute()
    const cityId = route.params.cityId

    const attractionList = ref([])
    const pagination = ref({})

    const cityName = ref('')

    const isLoading = ref(true)

    const api = `v2/Tourism/ScenicSpot/${cityId}?%24format=JSON`

    watchEffect(async () => {
      cityName.value = cities.filter(city => city.english === cityId)[0]
      try {
        attractionList.value = await getData(api)
        pagination.value = handleChangePage(attractionList.value)
        isLoading.value = false
      } catch (error) {
        console.log('fetch error', error)
      }
      console.log(attractionList.value)
    })

    watch(() => route.params.cityId, async (newCity) => {
      isLoading.value = true
      cityName.value = cities.filter(city => city.english === newCity)[0]
      try {
        const api = `v2/Tourism/ScenicSpot/${newCity}?%24format=JSON`
        attractionList.value = await getData(api)
        pagination.value = handleChangePage(attractionList.value)
        isLoading.value = false
      } catch (error) {
        console.log('fetch error', error)
        isLoading.value = false
      }
      console.log(attractionList.value)
    })

    function changePage (nowPage) {
      window.scrollTo(0, 0)
      pagination.value = handleChangePage(attractionList.value, nowPage)
    }

    return {
      cityName,
      isLoading,
      pagination,
      changePage
    }
  }
}
</script>

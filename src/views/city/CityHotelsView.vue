<template lang="pug">
h3.mb-3.mb-md-4 {{ cityName.name }}：住宿推薦

SortBar.mb-3.mb-md-4

.row.gy-2.gy-md-4
  .col-12.col-sm-6.col-md-4(
    v-for="hotel in pagination.pageData" :key="hotel.HotelID"  )
    Card.w-100(:hotel="hotel")

NoResultMessage.my-2.my-md-4(
  v-if="('pageData' in pagination) && !pagination.pageData.length"
)

nav.d-flex.justify-content-center
  Paginate(
    :page-count="pagination.pageTotal"
    :click-handler="changePage"
    )

VueLoading(v-if="isLoading")
</template>

<script>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import getData from '@/methods/getData'
import handleChangePage from '@/methods/handleChangePage'
import SortBar from '@/components/SortBar.vue'
import Card from '@/components/cards/HotelCard.vue'
import Paginate from 'vuejs-paginate-next'
import cities from '@/data/cities'
import emitter from '@/methods/emitter'
import { hotelFilter } from '@/methods/keywordFilters'
import { useMeta } from 'vue-meta'

export default {
  components: {
    SortBar,
    Card,
    Paginate
  },
  setup () {
    const route = useRoute()
    const { cityId, searchKeyword } = route.params

    const hotelList = ref([])
    const pagination = ref({})

    const cityName = ref('')

    const isLoading = ref(true)

    const api = `v2/Tourism/Hotel/${cityId}?%24format=JSON`

    onMounted(async () => {
      cityName.value = cities.filter(city => city.english === cityId)[0]
      try {
        hotelList.value = await getData(api)
        pagination.value = handleChangePage(
          hotelFilter(searchKeyword, hotelList.value)
        )
        isLoading.value = false
      } catch (error) {
        console.log('fetch error', error)
      }
      emitter.emit('emit-cityName', cityName.value.english)
    })

    watch(() => route.params.cityId, async (newCity) => {
      isLoading.value = true
      cityName.value = cities.filter(city => city.english === newCity)[0]
      try {
        const api = `v2/Tourism/Hotel/${
          (newCity === 'all') ? '' : newCity
        }?%24format=JSON`
        hotelList.value = await getData(api)
        pagination.value = handleChangePage(
          hotelFilter(route.params.searchKeyword, hotelList.value)
        )
        isLoading.value = false
      } catch (error) {
        console.log('fetch error', error)
      }
      emitter.emit('emit-cityName', newCity)
    })

    function changePage (newPage) {
      window.scrollTo(0, 0)
      pagination.value = handleChangePage(
        hotelFilter(route.params.searchKeyword, hotelList.value),
        newPage
      )
    }

    // search
    watch(() => route.params.searchKeyword, (keyword) => {
      pagination.value = handleChangePage(
        hotelFilter(keyword, hotelList.value)
      )
    })

    useMeta({
      title: '地區住宿'
    })

    return {
      cityName,
      isLoading,
      pagination,
      changePage
    }
  }
}
</script>

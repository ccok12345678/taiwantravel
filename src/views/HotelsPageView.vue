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
import { inject, ref, onMounted } from 'vue'
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

    const { lat, lon } = inject('userLocation')

    const url = lat
      ? `v2/Tourism/Hotel?%24select=HotelID%2CHotelName%2CPicture%2CPhone%2CAddress&%24top=100&%24spatialFilter=nearby(${lat}%2C%20${lon}%2C%2010000)&%24format=JSON`
      : 'v2/Tourism/Hotel?%24select=HotelID%2CHotelName%2CPicture%2CPhone%2CAddress&%24top=100&%24format=JSON'

    onMounted(async () => {
      try {
        hotelList.value = await getData(url)
        pagination.value = handleChangePage(hotelList.value)
        isLoading.value = false
      } catch (error) {
        console.log('fetch error', error)
        isLoading.value = false
      }
      console.log(hotelList.value)
    })

    function changePage (nowPage) {
      pagination.value = handleChangePage(hotelList.value, nowPage)
    }

    return {
      isLoading,
      pagination,
      changePage
    }
  }
}
</script>

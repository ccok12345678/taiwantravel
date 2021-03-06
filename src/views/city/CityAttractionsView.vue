<template lang="pug">
h3.mb-3.mb-md-4 {{ cityName.name }}：觀光景點

SortBar.mb-3.mb-md-4

.row.gy-2.gy-md-4
  .col-12.col-sm-6.col-md-4(
    v-for="attraction in pagination.pageData" :key="attraction.ScenicSpotID"  )
    Card.w-100(:attraction="attraction")

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
import Card from '@/components/cards/AttractionCard.vue'
import Paginate from 'vuejs-paginate-next'
import cities from '@/data/cities'
import emitter from '@/methods/emitter'
import { attractionFilter } from '@/methods/keywordFilters'
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

    const attractionList = ref([])
    const pagination = ref({})

    const cityName = ref('')

    const isLoading = ref(true)

    const api = `v2/Tourism/ScenicSpot/${
      (cityId === 'all') ? '' : cityId
    }?%24format=JSON`

    onMounted(async () => {
      cityName.value = cities.filter(city => city.english === cityId)[0]
      try {
        attractionList.value = await getData(api)
        pagination.value = handleChangePage(
          attractionFilter(searchKeyword, attractionList.value)
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
        const api = `v2/Tourism/ScenicSpot/${
          (newCity === 'all') ? '' : newCity
        }?%24format=JSON`
        attractionList.value = await getData(api)
        pagination.value = handleChangePage(
          attractionFilter(route.params.searchKeyword, attractionList.value)
        )
        isLoading.value = false
      } catch (error) {
        console.log('fetch error', error)
        isLoading.value = false
      }
      emitter.emit('emit-cityName', newCity)
    })

    function changePage (newPage) {
      window.scrollTo(0, 0)
      pagination.value = handleChangePage(
        attractionFilter(route.params.searchKeyword, attractionList.value),
        newPage
      )
    }

    // search
    watch(() => route.params.searchKeyword, (keyword) => {
      pagination.value = handleChangePage(
        attractionFilter(keyword, attractionList.value)
      )
    })

    useMeta({
      title: '地區觀光景點'
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

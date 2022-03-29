<template lang="pug">
h3.mb-3.mb-md-4 觀光活動

SortBar.mb-3.mb-md-4

.row.gy-2.gy-md-4
  .col-12.col-sm-6.col-md-4(
    v-for="activity in pagination.pageData" :key="activity.ScenicSpotID"  )
    Card.w-100(:activity="activity")

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
import { activityFilter } from '@/methods/keywordFilters'
import getData from '@/methods/getData'
import handleChangePage from '@/methods/handleChangePage'
import SortBar from '@/components/SortBar.vue'
import Card from '@/components/cards/ActivityCard.vue'
import Paginate from 'vuejs-paginate-next'

export default {
  components: {
    SortBar,
    Card,
    Paginate
  },
  setup () {
    const activityList = ref([])
    const pagination = ref({})
    const isLoading = ref(true)

    const api = 'v2/Tourism/Activity?%24format=JSON'

    const route = useRoute()
    const keyword = route.params.searchKeyword

    onMounted(async () => {
      try {
        activityList.value = await getData(api)
        pagination.value = handleChangePage(
          activityFilter(keyword, activityList.value)
        )
        isLoading.value = false
      } catch (error) {
        console.log('fetch error', error)
      }
    })

    watch(() => route.params.searchKeyword, (newKeyword) => {
      pagination.value = handleChangePage(
        activityFilter(newKeyword, activityList.value)
      )
    })

    function changePage (newPage) {
      window.scrollTo(0, 0)
      pagination.value = handleChangePage(
        activityFilter(keyword, activityList.value),
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

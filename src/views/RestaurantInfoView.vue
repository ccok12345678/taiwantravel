<template lang="pug">
h2 詳細資訊
div {{ tempRestaurant }}
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import getData from '@/methods/getData'

export default {
  setup (props) {
    const route = useRoute()
    const { restaurantId } = route.params
    console.log(restaurantId)

    const tempRestaurant = ref({})

    const api = 'v2/Tourism/Restaurant?%24format=JSON'

    onMounted(async () => {
      try {
        const restaurantList = await getData(api)
        tempRestaurant.value = restaurantList
          .filter(restaurant => restaurant.RestaurantID === restaurantId)
      } catch (error) {
        console.log('fetch error', error)
      }
    })

    return {
      tempRestaurant
    }
  }
}
</script>

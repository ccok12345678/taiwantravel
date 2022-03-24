<template lang="pug">
h2 詳細資訊
div {{ tempActivity }}
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import getData from '@/methods/getData'

export default {
  setup (props) {
    const route = useRoute()
    const { activityId } = route.params
    console.log(activityId)

    const tempActivity = ref({})

    const api = 'v2/Tourism/Activity?%24format=JSON'

    onMounted(async () => {
      try {
        const activityList = await getData(api)
        tempActivity.value = activityList
          .filter(activity => activity.ActivityID === activityId)
      } catch (error) {
        console.log('fetch error', error)
      }
    })

    return {
      tempActivity
    }
  }
}
</script>

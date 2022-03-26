<template lang="pug">
main.text-wrap
  InfoPageNavbar(
    v-if="!!tempActivity.ActivityName"
    :title="tempActivity.ActivityName"
    :backPath="'/activities'"
  )

  InfoBannerPic(
    v-if="tempActivity.Picture"
    :picture="tempActivity.Picture"
  )

  InfoBasic(
    :phone="tempActivity.Phone"
    :location="tempActivity.Address"
    :openTime="duration"
  )

  InfoIntroduction(
    :description="tempActivity.Description"
    :title="'活動'"
  )

  InfoTravel(
    :position="tempActivity.Position"
  )

  MoreActivities(
    :nearby="nearby"
    :city="tempActivity.City"
  )

  VueLoading(v-if="isLoading")
</template>

<script>
import { ref, watchEffect, watch } from 'vue'
import { useRoute } from 'vue-router'
import getData from '@/methods/getData'
import InfoPageNavbar from '@/components/info/InfoPageNavbar.vue'
import InfoBannerPic from '@/components/info/InfoBannerPic.vue'
import InfoBasic from '@/components/info/InfoBasic.vue'
import InfoIntroduction from '@/components/info/InfoIntroduction.vue'
import InfoTravel from '@/components/info/InfoTravel.vue'
import MoreActivities from '@/components/info/MoreActivities.vue'
import VueLoading from '@/components/VueLoading.vue'

export default {
  components: {
    InfoPageNavbar,
    InfoBannerPic,
    InfoBasic,
    InfoIntroduction,
    InfoTravel,
    MoreActivities,
    VueLoading
  },
  setup (props) {
    const route = useRoute()
    const { activityId } = route.params

    const tempActivity = ref({})
    const duration = ref('')

    const isLoading = ref(true)

    const api = 'v2/Tourism/Activity?%24format=JSON'

    watchEffect(async () => {
      try {
        const activityList = await getData(api)
        tempActivity.value = activityList
          .filter(activity => activity.ActivityID === activityId)[0]

        const { StartTime, EndTime } = tempActivity.value
        const start = new Date(StartTime)
          .toLocaleString()
          .replace('上午12:00:00', '')
        const end = new Date(EndTime)
          .toLocaleString()
          .replace('上午12:00:00', '')
        duration.value = `${start} ~ ${end}`

        isLoading.value = false
      } catch (error) {
        console.log('fetch error', error)
      }
    })

    watch(() => route.params.activityId, async (newId) => {
      isLoading.value = true
      try {
        const activitiesList = await getData(api)
        tempActivity.value = activitiesList
          .filter(activity => activity.ActivityID === newId)[0]

        const { StartTime, EndTime } = tempActivity.value
        const start = new Date(StartTime)
          .toLocaleString()
          .replace('上午12:00:00', '')
        const end = new Date(EndTime)
          .toLocaleString()
          .replace('上午12:00:00', '')
        duration.value = `${start} ~ ${end}`

        isLoading.value = false
      } catch (error) {
        console.log('fetch error', error)
      }
    }, { deep: true })

    const nearby = ref([])

    watch(tempActivity, async (activity) => {
      const { PositionLon, PositionLat } = activity.Position
      const api = `v2/Tourism/Activity?%24select=ActivityID%2CActivityName%2CPicture%2CLocation&%24top=5&%24spatialFilter=nearby(${PositionLat}%2C%20${PositionLon}%2C%2010000)&%24format=JSON`
      try {
        nearby.value = await getData(api)
      } catch (error) {
        console.log('fetch error:', error)
      }
    })

    return {
      tempActivity,
      duration,
      nearby,
      isLoading
    }
  }
}
</script>

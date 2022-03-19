<template lang="pug">
Attractions

Activities

Tasty

Hotels

</template>

<script>
import Attractions from '@/components/FrontPageAttractions.vue'
import Activities from '@/components/FrontPageActivities.vue'
import Tasty from '@/components/FrontPageTasty.vue'
import Hotels from '@/components/FrontPageHotels.vue'

export default {
  components: {
    Attractions,
    Activities,
    Tasty,
    Hotels
  }
}
</script>

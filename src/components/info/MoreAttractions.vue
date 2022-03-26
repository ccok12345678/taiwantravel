<template lang="pug">
section.mt-3
  h6.text-primary.mb-3 {{ city }}更多景點

  ul.overflow-auto.d-flex.text-nowrap.pb-2
    li.me-4(v-for="attraction in nearby" :key="attraction.ScenicSpotID")
      Card.card(:attraction="attraction")

</template>

<script>
import Card from '@/components/cards/AttractionCard.vue'

export default {
  components: {
    Card
  },
  props: {
    nearby: {
      type: Array,
      default: () => []
    },
    city: {
      type: String,
      default: () => ''
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  margin-bottom: 80px;
}

.card {
  width: 330px;

  @media (max-width: 767px) {
    width: 253xp
  }
}
</style>

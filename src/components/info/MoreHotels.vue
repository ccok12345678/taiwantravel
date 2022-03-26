<template lang="pug">
section.mt-3
  h6.text-primary.mb-3 {{ city }}更多住宿

  ul.overflow-auto.d-flex.text-nowrap.pb-2
    li.me-4(v-for="hotel in nearby" :key="hotel.HotelID")
      Card.card(:hotel="hotel")

</template>

<script>
import Card from '@/components/cards/HotelCard.vue'

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

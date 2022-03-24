<template lang="pug">
section
  Title(:header="{title:'住宿推薦', path:'hotels'}")

  .d-flex.flex-column.flex-sm-row.flex-wrap.justify-content-sm-around.align-items-center

    template(v-for="hotel in list" :key="hotel.HotelID")
      Card(:hotel="hotel")

    router-link.text-primary.text-no-responsive.d-block.d-sm-none(
      to="/hotels")
      | 更多住宿推薦
</template>

<script>
import { toRefs } from 'vue'
import Title from '@/components/frontpage/FrontPageTitle.vue'
import Card from '@/components/cards/HotelCard.vue'

export default {
  components: {
    Title,
    Card
  },
  props: {
    hotels: {
      type: Array,
      default: () => []
    }
  },
  setup (props) {
    const { list } = toRefs(props.hotels)

    return {
      list
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  margin-bottom: 40px;
}
</style>

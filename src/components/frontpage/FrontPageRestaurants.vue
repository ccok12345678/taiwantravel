<template lang="pug">
section
  Title(:header="{title:'美食品嚐', path:'restaurants'}")

  .d-flex.flex-column.flex-sm-row.flex-wrap.justify-content-sm-around.align-items-center

    template(v-for="restaurant in list" :key="restaurant.RestaurantID")
      Card(:restaurant="restaurant")

    router-link.text-primary.text-no-responsive.d-block.d-sm-none(
      to="/restaurants")
      | 更多美食品嚐
</template>

<script>
import { toRefs } from 'vue'
import Title from '@/components/frontpage/FrontPageTitle.vue'
import Card from '@/components/cards/RestaurantCard.vue'

export default {
  components: {
    Title,
    Card
  },
  props: {
    restaurants: {
      type: Array,
      default: () => []
    },
    location: {
      type: Object,
      default: () => {}
    }
  },
  setup (props) {
    const { list } = toRefs(props.restaurants)

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

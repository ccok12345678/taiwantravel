<template lang="pug">
section
  Title(
    :header="{title:'熱門景點', path:'attractions' }"
    :userLocation="userLocation")

  .d-flex.flex-column.flex-sm-row.flex-wrap.justify-content-sm-around.align-items-center

    template(v-for="attraction in list" :key="attraction.ScenicSpotID")
      Card(:attraction="attraction")

    router-link.text-primary.text-no-responsive.d-block.d-sm-none(
      to="/attractions")
      | 更多熱門景點
</template>

<script>
import { toRefs } from 'vue'
import Title from '@/components/frontpage/FrontPageTitle.vue'
import Card from '@/components/cards/AttractionCard.vue'

export default {
  components: {
    Title,
    Card
  },
  props: {
    attractions: {
      type: Array,
      default: () => []
    },
    userLocation: {
      type: Object,
      default: () => {}
    }
  },
  setup (props) {
    const { list } = toRefs(props.attractions)

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

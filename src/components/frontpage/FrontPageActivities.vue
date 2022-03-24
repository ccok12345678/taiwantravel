<template lang="pug">
section
  Title(:header="{title:'觀光活動', path:'activities'}")

  .d-flex.flex-column.flex-sm-row.flex-wrap.justify-content-sm-around.align-items-center

    template(v-for="activity in list" :key="activity.ActivityID")
      Card(:activity="activity")

    router-link.text-primary.text-no-responsive.d-block.d-sm-none(
      to="/activities")
      | 更多觀光活動
</template>

<script>
import { toRefs } from 'vue'
import Title from '@/components/frontpage/FrontPageTitle.vue'
import Card from '@/components/cards/ActivityCard.vue'

export default {
  components: {
    Title,
    Card
  },
  props: {
    activities: {
      type: Array,
      default: () => []
    }
  },
  setup (props) {
    const { list } = toRefs(props.activities)

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

<template lang="pug">
section
  Title(:header="{title:'美食品嚐', url:'activities'}")

  .d-flex.flex-column.flex-sm-row.flex-wrap.justify-content-sm-around.align-items-center
    Card
    Card
    Card

    router-link.text-primary.text-no-responsive.d-block.d-sm-none(
      to="/attraction")
      | 更多美食品嚐
</template>

<script>
import Title from '@/components/FrontPageTitle.vue'
import Card from '@/components/TastyCard.vue'

export default {
  components: {
    Title,
    Card
  }
}
</script>

<style lang="scss" scoped>
section {
  margin-bottom: 40px;
}
</style>

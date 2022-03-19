<template lang="pug">
section
  Title(:header="{title:'觀光活動', url:'activities'}")

  .d-flex.flex-column.flex-sm-row.flex-wrap.justify-content-sm-around.align-items-center
    Card
    Card
    Card

    router-link.text-primary.text-no-responsive.d-block.d-sm-none(
      to="/attraction")
      | 更多觀光活動
</template>

<script>
import Title from '@/components/FrontPageTitle.vue'
import Card from '@/components/ActivityCard.vue'

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

<template lang="pug">
.row.g-0
  .col.col-lg-9.order-1
    router-view
  .col-3.order-0.d-none.d-lg-block
    SideMenu
</template>

<script>
import SideMenu from '@/components/SideMenu.vue'

export default {
  components: {
    SideMenu
  }
}
</script>

<style lang="scss">
@import "assets/scss/all.scss";
</style>

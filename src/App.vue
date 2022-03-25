<template lang="pug">
.row.g-0
  .col.col-lg-9.order-1
    router-view
  .col-3.order-0.d-none.d-lg-block
    SideMenu
</template>

<script>
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import SideMenu from '@/components/menu/SideMenu.vue'

export default {
  components: {
    SideMenu
  },
  setup (props) {
    const route = useRoute()
    watch(() => route.path, () => {
      window.scrollTo(0, 0)
    })
  }
}
</script>

<style lang="scss">
@import "assets/scss/all.scss";
</style>

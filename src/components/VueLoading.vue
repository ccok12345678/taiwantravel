<template lang="pug">
VueElementLoading(is-full-screen
  :active="true"
  spinner="line-down"
  size="50"
  duration="0.8"
  color="#3FB195"
  background-color="rgba(50, 50, 50, .8)"
  text="載入中...")
</template>

<script>
import VueElementLoading from 'vue-element-loading'
export default {
  components: {
    VueElementLoading
  }
}
</script>

<style lang="scss" scoped>
.velmld-overlay[data-v-2964abc9] {
  z-index: 100;
}
</style>

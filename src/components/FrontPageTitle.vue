<template lang="pug">
header.d-flex.justify-content-between.align-items-center
  .hstack.mb-3
    img(src="@/assets/icons/location_icon_purple.svg" alt="location icon")
    h3 {{ header.title }}

  router-link.text-primary.text-no-responsive.d-none.d-sm-block(
    :to="`/${header.url}`")
    | 更多{{ header.title }}

</template>

<script>
export default {
  props: {
    header: {
      type: Object,
      default: () => ({
        title: '探索台灣',
        url: '/'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
h3 {
  margin-left: 12px;
}
</style>

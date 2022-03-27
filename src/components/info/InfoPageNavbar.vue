<template lang="pug">
nav.d-flex.justify-content-between.align-items-center

  .d-flex.align-items-center
    btn.btn.p-2(
      type="button"
      title="回上頁"
      @click="handleClick"
    )
      img(src="@/assets/icons/arrow_left_icon.svg")
    h3 {{ title }}

  .d-flex.pe-1
    button.btn.p-1(type="button" title="列印本頁")
      img(src="@/assets/icons/print_icon.svg" alt="print")
    button.btn.p-1(type="button" title="分享本頁連結")
      img(src="@/assets/icons/share_icon.svg" alt="share")
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: () => ''
    },
    backPath: {
      type: String,
      default: () => ''
    }
  },
  setup (props) {
    function handleClick () { history.back() }

    return {
      handleClick
    }
  }
}
</script>

<style lang="scss" scoped>
h3 {
  margin-left: 15.35px;
}
</style>

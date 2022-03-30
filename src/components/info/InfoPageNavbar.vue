<template lang="pug">
nav.d-flex.justify-content-between.align-items-center

  .d-flex.align-items-center
    btn.btn.p-2(
      type="button"
      title="回上頁"
      @click="goBack"
    )
      img(src="@/assets/icons/arrow_left_icon.svg")

    h3 {{ title }}

  .d-flex.pe-1
    button.btn.p-1(
      type="button"
      title="列印本頁"
      @click="print"
    )
      img(src="@/assets/icons/print_icon.svg" alt="print")

    button.btn.p-1(
      type="button"
      title="複製本頁連結"
      @click="copyUrl"
    )
      img(src="@/assets/icons/share_icon.svg" alt="copy url")
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: () => ''
    }
  },
  setup (props) {
    const goBack = () => history.back()

    const print = () => window.print()

    const copyUrl = () =>
      navigator.clipboard.writeText(location.href)

    return {
      goBack,
      print,
      copyUrl
    }
  }
}
</script>

<style lang="scss" scoped>
h3 {
  margin-left: 15.35px;
}
</style>

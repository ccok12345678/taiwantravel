<template lang="pug">
button.btn.d-flex.flex-column.align-items-center(
  type="button" :title="button.title")
  img(:src="button.src" width="65" :alt="`分類為${button.title}`")
  span {{ button.title }}

</template>

<script>
export default {
  props: {
    button: {
      type: Object,
      default: () => ({ title: '探索台灣', src: 'https://i.ibb.co/125cfL1/illustration-sm.png' })
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  &:focus , &:hover {
    border: 1px solid #3FB195;
  }
}

span {
  font-size: 16px;
}
</style>

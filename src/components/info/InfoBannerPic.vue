<template lang="pug">
section.text-center
  .rounded.overflow-hidden
    img.object-cover.w-100(v-if="!!picture.PictureUrl1"
      :src="picture.PictureUrl1"
      :alt="picture.PictureDescription1")

    img.object-cover.w-100(v-else
    src="@/assets/images/illustration.png"
    alt="該資料沒有圖片"
    title="該資料沒有圖片"
    height="163")
</template>

<script>
export default {
  props: ['picture']
}
</script>

<style lang="scss" scoped>
img {
  height: 364px;

  @media (max-width: 567px) {
    height: 160px;
  }
}
section {
  margin-top: 20px;

@media (max-width: 567px) {
    margin-top: 18px;
  }
}
</style>

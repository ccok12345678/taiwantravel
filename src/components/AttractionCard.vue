<template lang="pug">
router-link.rounded.overflow-hidden.bg-white.shadow.d-block(
  :to="attraction.path"
  :title="`察看${attraction.title}`")

  img.object-cover.w-100(
    :src="attraction.image"
    :alt="`${attraction.title}照片`")

  .px-3.py-2
    h4.text-dark {{ attraction.title }}

    .hstack
      .location.me-3 {{ attraction.location }}
      .open-time {{ attraction.open }}
</template>

<script>
export default {
  props: {
    attraction: {
      type: Object,
      default: () => ({
        title: '熱門景點',
        image: 'https://i.ibb.co/125cfL1/illustration-sm.png',
        location: '景點位置',
        open: '開放時間',
        path: '/'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  width: 30%;

  @media (max-width: 767.98px) {
    margin-bottom: 24px;
    width: 45%;
  }
  @media (max-width: 576px) {
    width: 90%;
  }
}
h4 {
  margin-bottom: 10px;
}
</style>

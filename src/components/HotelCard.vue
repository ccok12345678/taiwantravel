<template lang="pug">
router-link.rounded.overflow-hidden.bg-white.shadow.d-block.position-relative(
  :to="hotel.path"
  :title="`察看${hotel.title}`")

  img.position-absolute.link(src="@/assets/icons/link_icon.svg" alt="link icon")

  img.object-cover.w-100(
    :src="hotel.image"
    :alt="`${hotel.title}照片`")

  .px-3.py-2
    h4.text-dark.text-truncate {{ hotel.title }}

    .vstack
      .phone.mb-2 {{ hotel.phone }}
      .location.me-3 {{ hotel.location }}
</template>

<script>
export default {
  props: {
    hotel: {
      type: Object,
      default: () => ({
        title: '住宿推薦',
        image: 'https://i.ibb.co/125cfL1/illustration-sm.png',
        location: '旅館位置',
        phone: '886-3-33333333',
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

.link {
  top: 12px;
  right: 12px;
}

h4 {
  margin-bottom: 10px;
}
</style>

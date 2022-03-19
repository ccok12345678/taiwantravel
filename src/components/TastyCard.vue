<template lang="pug">
router-link.rounded.overflow-hidden.bg-white.shadow.d-block.position-relative(
  :to="tasty.path"
  :title="`察看${tasty.title}`")

  img.position-absolute.link(src="@/assets/icons/link_icon.svg" alt="link icon")

  img.object-cover.w-100(
    :src="tasty.image"
    :alt="`${tasty.title}照片`")

  .px-3.py-2
    h4.text-dark.text-truncate {{ tasty.title }}

    .vstack
      .open-time.mb-2 {{ tasty.open }}
      .location.me-3 {{ tasty.location }}
</template>

<script>
export default {
  props: {
    tasty: {
      type: Object,
      default: () => ({
        title: '美食品嚐',
        image: 'https://i.ibb.co/125cfL1/illustration-sm.png',
        location: '店家位置',
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

.link {
  top: 12px;
  right: 12px;
}

h4 {
  margin-bottom: 10px;
}
</style>

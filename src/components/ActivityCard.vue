<template lang="pug">
router-link.rounded.overflow-hidden.bg-white.shadow.d-block.position-relative(
  :to="activity.path"
  :title="`察看${activity.title}`")

  img.position-absolute.link(src="@/assets/icons/link_icon.svg" alt="link icon")

  img.object-cover.w-100(
    :src="activity.image"
    :alt="`${activity.title}照片`")

  .px-3.py-2
    h4.text-dark.text-truncate {{ activity.title }}

    .vstack
      .open-time {{ activity.open }}
      .location.me-3 {{ activity.location }}
</template>

<script>
export default {
  props: {
    activity: {
      type: Object,
      default: () => ({
        title: '觀光活動',
        image: 'https://i.ibb.co/125cfL1/illustration-sm.png',
        location: '活動位置',
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

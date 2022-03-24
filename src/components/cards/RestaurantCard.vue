<template lang="pug">
router-link.rounded.overflow-hidden.bg-white.shadow.d-block.position-relative(
  :to="`restaurants/${restaurant.RestaurantID}`"
  :title="restaurant.RestaurantName")

  img.position-absolute.link(src="@/assets/icons/link_icon.svg" alt="link icon")

  img.object-cover.w-100(v-if="'PictureUrl1' in restaurant.Picture"
    :src="restaurant.Picture.PictureUrl1"
    :alt="restaurant.RestaurantName"
    height="163")
  img.object-cover.w-100(v-else
    src="@/assets/images/illustration.png"
    alt="該資料沒有圖片"
    title="該資料沒有圖片"
    height="163")

  .px-3.py-2
    h4.text-dark.text-truncate {{ restaurant.RestaurantName }}

    .vstack
      .open-time.mb-2.text-truncate(:title="restaurant.OpenTime")
        | {{ restaurant.OpenTime }}
      .location.me-3.text-truncate(:title="restaurant.Address")
        | {{ restaurant.Address }}
</template>

<script>
export default {
  props: {
    restaurant: {
      type: Object,
      default: () => {}
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

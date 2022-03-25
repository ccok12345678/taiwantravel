<template lang="pug">
router-link.rounded.overflow-hidden.bg-white.shadow.d-block.position-relative(
  :to="`/hotels/${hotel.HotelID}`"
  :title="hotel.HotelName")

  img.position-absolute.link(src="@/assets/icons/link_icon.svg" alt="link icon")

  img.object-cover.w-100(v-if="'PictureUrl1' in hotel.Picture"
    :src="hotel.Picture.PictureUrl1"
    :alt="hotel.HotelName"
    height="163")
  img.object-cover.w-100(v-else
    src="@/assets/images/illustration.png"
    alt="該資料沒有圖片"
    title="該資料沒有圖片"
    height="163")

  .px-3.py-2
    h4.text-dark.text-truncate {{ hotel.HotelName }}

    .vstack
      .phone.mb-2.text-truncate(:title="phoneNumber")
        | {{ phoneNumber }}
      .location.me-3.text-truncate(:title="hotel.Address")
        | {{ hotel.Address }}
</template>

<script>
import { ref } from 'vue'
export default {
  props: {
    hotel: {
      type: Object,
      default: () => {}
    }
  },
  setup (props) {
    const phoneNumber = ref(props.hotel.Phone
      .replace('886-', '0'))

    return {
      phoneNumber
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

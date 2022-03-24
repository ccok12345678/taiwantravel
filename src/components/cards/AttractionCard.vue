<template lang="pug">
router-link.rounded.overflow-hidden.bg-white.shadow.d-block.position-relative(
  :to="`/attractions/${attraction.ScenicSpotID}`"
  :title="`察看${attraction.ScenicSpotName}`")

  img.position-absolute.link(src="@/assets/icons/link_icon.svg" alt="link icon")

  img.object-cover.w-100(v-if="'PictureUrl1' in attraction.Picture"
    :src="attraction.Picture.PictureUrl1"
    :alt="attraction.Picture.PictureDescription1"
    height="163")
  img.object-cover.w-100(v-else
    src="@/assets/images/illustration.png"
    alt="該資料沒有圖片"
    title="該資料沒有圖片"
    height="163")

  .px-3.py-2
    h4.text-dark {{ attraction.ScenicSpotName }}

    .d-flex
      .location.me-3(:title="attraction.City" v-if="!!attraction.City")
        | {{ attraction.City }}
      .open-time.text-truncate(
        :title="attraction.OpenTime" v-if="!!attraction.OpenTime")
        | {{ attraction.OpenTime }}
</template>

<script>
export default {
  props: {
    attraction: {
      type: Object,
      default: () => ({
        ScenicSpotName: '觀光活動',
        Picture: {
          PictureUrl1: 'https://i.ibb.co/125cfL1/illustration-sm.png'
        },
        City: '景點位置',
        OpenTime: '開放時間',
        ScenicSpotID: '/'
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

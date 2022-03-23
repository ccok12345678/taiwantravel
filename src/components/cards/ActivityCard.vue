<template lang="pug">
router-link.rounded.overflow-hidden.bg-white.shadow.d-block.position-relative.h-100(
  :to="`activities/${activity.ActivityID}`"
  :title="activity.ActivityName")

  img.position-absolute.link(src="@/assets/icons/link_icon.svg" alt="link icon")

  img.object-cover.w-100(v-if="'PictureUrl1' in activity.Picture"
    :src="activity.Picture.PictureUrl1"
    :alt="activity.Picture.PictureDescription1"
    height="163")
  img.object-cover.w-100(v-else
    src="@/assets/images/illustration.png"
    alt="該資料沒有圖片"
    title="該資料沒有圖片"
    height="163")

  .px-3.py-2
    h4.text-dark.text-truncate {{ activity.ActivityName }}

    .vstack
      .open-time.mb-2.text-truncate(:title="`${start} ~ ${end}`")
        | {{ start }} ~ {{ end }}
      .location.me-3.text-truncate(:title="activity.Location")
        | {{ activity.Location }}
</template>

<script>
import { toRefs } from 'vue'

export default {
  props: {
    activity: {
      type: Object,
      default: () => {}
    }
  },
  setup (props) {
    const { StartTime, EndTime } = toRefs(props.activity)

    const start = new Date(StartTime.value)
      .toLocaleString()
      .replace('上午12:00:00', '')
    const end = new Date(EndTime.value)
      .toLocaleString()
      .replace('上午12:00:00', '')

    return {
      start,
      end
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

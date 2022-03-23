<template lang="pug">
header.d-flex.justify-content-between.align-items-center
  .hstack.mb-3
    img(src="@/assets/icons/location_icon_purple.svg" alt="location icon")
    h3 {{ header.title }}

  a.text-primary.text-no-responsive.d-none.d-sm-block(
    href="#" :title="`看更多${header.title}`"
    @click.prevent="handleClick")
    | 更多{{ header.title }}

</template>

<script>
import { useRouter } from 'vue-router'
import mitt from 'mitt'

export default {
  props: {
    header: {
      type: Object,
      default: () => ({
        title: '探索台灣',
        url: '/'
      })
    },
    userLocation: {
      type: Object,
      default: () => {}
    }
  },
  setup (props) {
    const router = useRouter()
    const emitter = mitt()

    function handleClick () {
      // console.log(props.userLocation)
      router.push({ path: props.header.path })
      emitter.emit('mitt-location', props.userLocation)
    }

    return {
      handleClick
    }
  }
}
</script>

<style lang="scss" scoped>
h3 {
  margin-left: 12px;
}
</style>

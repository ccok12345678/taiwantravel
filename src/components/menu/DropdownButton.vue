<template lang="pug">
button.menu-button.rounded.text-nowrap(
  type="button"
  :title="city.name"
  @click="handleClick"
)
  | {{ city.name }}
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  props: {
    city: {
      type: Object,
      default: () => ({ name: '臺灣', english: 'Taiwan' })
    }
  },
  setup (props, context) {
    const { emit } = context
    const router = useRouter()

    const handleClick = () => {
      emit('emit-click', props.city)
      router.push({
        name: 'attractionsOfCity',
        params: { cityId: props.city.english }
      })
    }

    return {
      handleClick
    }
  }
}
</script>

<style lang="scss">
</style>

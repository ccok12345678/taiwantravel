<template lang="pug">
button.menu-button.rounded.text-nowrap(
  type="button"
  @click="handleClick"
)
  | {{ city.name }}
</template>

<script>
import { reactive } from 'vue'

export default {
  props: {
    city: {
      type: Object,
      default: () => ({ name: '臺灣', english: 'Taiwan' })
    }
  },
  setup (props, context) {
    const { emit } = context

    const cityValue = reactive(props.city)
    const handleClick = () => {
      emit('emit-click', cityValue)
    }

    return {
      handleClick
    }
  }
}
</script>

<style lang="scss">
$primary: #3FB195;

button.menu-button {
  background: none;
  border: 1px solid $primary;
  font-size: 15px;
  height: 40px;
  width: 100%;

  &:hover, &:active {
    background: $primary;
    color: white;
  }
}
</style>

<template lang="pug">
button.btn.d-flex.flex-column.align-items-center(
  type="button"
  :title="button.title"
  @click="showTheme"
)
  img(:src="button.src" width="65" :alt="`分類為${button.title}`")
  span {{ button.title }}

</template>

<script>
import { reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export default {
  props: {
    button: {
      type: Object,
      default: () => ({ title: '探索台灣', src: 'https://i.ibb.co/125cfL1/illustration-sm.png' })
    }
  },
  setup (props) {
    const router = useRouter()
    const route = useRoute()
    const button = reactive(props.button)

    function showTheme () {
      if (route.params.cityId && route.params.cityId !== 'all') {
        if (button.keywords.length) {
          router.push({
            name: `${button.routeName}OfCity`,
            params: {
              cityId: route.params.cityId,
              searchKeyword: `${button.keywords.join(' ')}`
            }
          })
        } else {
          router.push({
            name: `${button.routeName.replace('Search', '')}OfCity`,
            params: {
              cityId: route.params.cityId
            }
          })
        }
      } else {
        if (button.keywords.length) {
          router.push({
            name: button.routeName,
            params: {
              searchKeyword: `${button.keywords.join(' ')}`
            }
          })
        } else {
          router.push({
            name: `${button.routeName.replace('Search', '')}`
          })
        }
      }
    }

    return {
      showTheme
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  &:focus , &:hover {
    border: 1px solid #3FB195;
  }
}

span {
  font-size: 16px;
}
</style>

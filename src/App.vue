<template lang="pug">
.row.g-0
  .col.col-lg-9.order-1
    router-view
  .col-3.order-0.d-none.d-lg-block
    SideMenu

metainfo
  template(v-slot:title='{ metainfo }')
    | {{ metainfo.titleTemplate(metainfo.title) }}
</template>

<script>
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import SideMenu from '@/components/menu/SideMenu.vue'
import { useMeta } from 'vue-meta'

export default {
  components: {
    SideMenu
  },
  setup (props) {
    const route = useRoute()
    watch(() => route.path, () => {
      window.scrollTo(0, 0)
    })

    useMeta({
      title: '',
      titleTemplate: (chunk) => {
        return chunk
          ? `${chunk} | 台灣旅遊景點導覽 THE F2E`
          : '台灣旅遊景點導覽 THE F2E'
      },
      htmlAttrs: {
        lang: 'zh-Hant-TW'
      }
    })
  }
}
</script>

<style lang="scss">
@import "assets/scss/all.scss";
</style>

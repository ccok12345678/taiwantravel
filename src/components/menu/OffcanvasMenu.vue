<template lang="pug">
.toggle-menu.bg-white.w-100.d-lg-none.overflow-auto.px-3(
  :class="{ 'show': isShow }"
)
  header.side-header.mt-2.text-center

    AreaDropdown.mb-2.pb-1

    SearchInput

    hr.my-3

  .side-body.pb-5.mb-3
    CategoryMenu

  footer.px-3.py-2.bg-white.fixed-bottom(
    :class="{ 'show': isShow }"
  )
    button.menu-button.bg-primary.text-white.fs-6.rounded(
      type="button"
      @click="toggleMenu"
    )
      | 開始搜尋

</template>

<script>
import CategoryMenu from '@/components/menu/CategoryMenu.vue'
import AreaDropdown from '@/components/menu/AreasDropdown.vue'
import SearchInput from '@/components/menu/SearchInput.vue'

export default {
  components: {
    CategoryMenu,
    AreaDropdown,
    SearchInput
  },
  props: {
    isShow: {
      type: Boolean,
      default: () => false
    }
  },
  setup (props, context) {
    const { emit } = context

    function toggleMenu () {
      emit('emit-toggle')
    }

    return {
      toggleMenu
    }
  }
}
</script>

<style lang="scss" scoped>
footer {
  margin-bottom: -100%;

  &.show {
    transition-delay: .3s;
    margin-bottom: 0;
  }
}
</style>

<template lang="pug">
nav.bg-white
  .d-flex.justify-content-center.py-2.ps-3.shadow.d-lg-none.border-bottom

    button.btn.btn-third.border-0.shadow-0.my-auto.me-auto(
      type="button"
      title="開啟選單"
      ref="button"
      @click="toggleMenu"
    )
      img(
        src="@/assets/icons/slider_icon.svg"
        alt="menu toggle button"
      )

    Logo.logo.me-auto

  OffcanvasMenu(
    :isShow="isShow"
    @emit-toggle="toggleMenu"
  )
</template>

<script>
import { ref } from 'vue'
import Logo from '@/components/PageLogo.vue'
import OffcanvasMenu from '@/components/menu/OffcanvasMenu.vue'

export default {
  components: {
    Logo,
    OffcanvasMenu
  },
  setup () {
    const isShow = ref(false)

    function toggleMenu () {
      isShow.value = !isShow.value
    }

    return {
      isShow,
      toggleMenu
    }
  }
}
</script>

<style lang="scss" scoped>
$btn-size: 32px;

.btn {
  position: relative;
  width: $btn-size;
  height: $btn-size;
  vertical-align: middle;
  padding: 7px 5.5px;

  img {
    position: absolute;
    top: 50%; left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 21px;
  }
}

.logo {
  margin-left:  -$btn-size;
}
</style>

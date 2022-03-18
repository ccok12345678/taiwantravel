<template lang="pug">
nav.bg-white.d-flex.justify-content-center.py-2.ps-3.shadow.d-lg-none

  button.btn.btn-third.border-0.shadow-0.my-auto.me-auto(
    type="button" title="開啟選單")
    img(src="@/assets/icons/slider_icon.svg"
      alt="menu toggle button")

  Logo.logo.me-auto
</template>

<script>
import Logo from '@/components/PageLogo.vue'

export default {
  components: {
    Logo
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

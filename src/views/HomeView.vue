<template lang="pug">
.min-vh-100.d-flex.flex-column

  NavBar

  .container-fluid.p-4
    Banner
    Banner
    Banner
    Banner
    Banner
    Banner
    Banner

  Footer.mt-auto
</template>

<script>
import Banner from '@/components/FrontPageBanner.vue'
import Footer from '@/components/FrontPageFooter.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'HomeView',
  components: {
    Banner,
    Footer,
    NavBar
  }
}

</script>

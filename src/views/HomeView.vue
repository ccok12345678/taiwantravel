<template lang="pug">
.min-vh-100.d-flex.flex-column

  NavBar.sticky-top

  .container-fluid.p-4
    Banner(v-if="$route.name === 'frontpage'")

    router-view

  Footer.mt-auto
</template>

<script>
import Banner from '@/components/frontpage/FrontPageBanner.vue'
import Footer from '@/components/frontpage/FrontPageFooter.vue'
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

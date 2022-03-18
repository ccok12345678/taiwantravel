<template lang="pug">
.min-vh-100.d-flex.flex-column

  .container-fluid.p-4
    Banner

  Footer.mt-auto
</template>

<script>
import Banner from '@/components/FrontPageBanner.vue'
import Footer from '@/components/FrontPageFooter.vue'

export default {
  name: 'HomeView',
  components: {
    Banner,
    Footer
  }
}

</script>

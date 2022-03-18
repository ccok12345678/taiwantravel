<template lang="pug">
aside.bg-white.min-vh-100.shadow.sticky-top.p-4
  header.mt-3
    Logo.mb-4
    SearchBar

</template>

<script>
import Logo from '@/components/PageLogo.vue'
import SearchBar from '@/components/SearchBar.vue'

export default {
  components: {
    Logo,
    SearchBar
  }
}
</script>

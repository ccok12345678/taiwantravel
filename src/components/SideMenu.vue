<template lang="pug">
aside.bg-white.min-vh-100.shadow.sticky-top.p-4

  header.side-header.mt-3
    Logo.mb-4

    SearchBar

    hr.my-4

  .side-body
    CategoryMenu

</template>

<script>
import Logo from '@/components/PageLogo.vue'
import SearchBar from '@/components/SearchBar.vue'
import CategoryMenu from '@/components/CategoryMenu.vue'

export default {
  components: {
    Logo,
    SearchBar,
    CategoryMenu
  }
}
</script>

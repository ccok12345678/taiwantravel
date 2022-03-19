<template lang="pug">
aside.bg-white.vh-100.shadow.sticky-top.p-4.pt-1.overflow-auto

  header.side-header.mt-3
    Logo.mb-3

    SearchBar

    hr.my-3

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

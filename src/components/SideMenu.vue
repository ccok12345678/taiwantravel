<template lang="pug">
aside.bg-white.vh-100.shadow.sticky-top.p-4.pt-1.overflow-auto

  header.side-header.mt-3
    Logo.mb-3

    SearchDropdown.mb-4

    SearchInput

    hr.my-3

  .side-body
    CategoryMenu

</template>

<script>
import Logo from '@/components/PageLogo.vue'
import CategoryMenu from '@/components/CategoryMenu.vue'
import SearchDropdown from '@/components/SearchDropdown.vue'
import SearchInput from '@/components/SearInput.vue'

export default {
  components: {
    Logo,
    CategoryMenu,
    SearchDropdown,
    SearchInput
  }
}
</script>

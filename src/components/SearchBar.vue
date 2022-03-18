<template lang="pug">
//- dropdown menu
.dropdown
  a#dropdownMenuLink.location.bg-light.border.rounded.d-flex.text-decoration-none(
    data-bs-toggle="dropdown"
    href="#" role="button"
    aria-expanded="false"
    title="選擇地區")

    .text-muted.lh-1.my-auto.p-2.ps-2
      | 目的地

    .ms-auto.my-auto.pe-2
      img(src="@/assets/icons/arrow_down_circle.svg" alt="dropdown menu button"
        width="20" height="20")

  .dropdown-menu.border-0.shadow.w-100(
    aria-labelledby="dropdownMenuLink")
    .row.g-2
      .col-4
        MenuButton 台北
      .col-4
        MenuButton 台北
      .col-4
        MenuButton 台北

//- search input
</template>

<script>
import MenuButton from '@/components/MenuButton.vue'

export default {
  components: {
    MenuButton
  }
}
</script>

<style lang="scss" scoped>
.dropdown-menu {
  padding: 12px;
}
</style>

<template lang="pug">
//- dropdown menu
.dropdown
  a#dropdownMenuLink.dropdown-btn.bg-light.border.rounded.d-flex.text-decoration-none(
    data-bs-toggle="dropdown"
    href="#" role="button"
    aria-expanded="false"
    title="選擇地區")

    .text-muted.lh-1.my-auto
      | 目的地

    .ms-auto.d-flex
      img.my-auto(src="@/assets/icons/arrow_down_circle.svg"
        alt="dropdown menu button")

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
label(for="keyword")
  small.invisible 輸入關鍵字
  .input-group.border.rounded.bg-light
    input#keyword.form-control.border-0(type="search"
      placeholder="搜尋關鍵字")
    button.btn.d-flex(type="button" title="搜尋")
      img.my-auto(src="@/assets/icons/search.svg" alt="search icon")
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
.dropdown-btn {
  font-size: 16px;
  padding: 8px 11.5px 8px 12px;;
}
.dropdown-menu {
  padding: 12px;
}

input {
  font-size: 16px;
  padding: 8px 11.5px 7px 12px;

  &:focus {
    outline: none;
  }
}
</style>

<template lang="pug">
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

      .col-4(v-for="city in cities" :key="city.english")
        MenuButton(:city="city"
          @emit-click="acceptClick")
</template>

<script>
import MenuButton from '@/components/MenuButton.vue'
import cities from '@/data/cities'

export default {
  components: {
    MenuButton
  },
  setup (props) {
    const acceptClick = (city) => {
      console.log(city)
    }

    return {
      cities,
      acceptClick
    }
  }
}
</script>

<style lang="scss" scoped>
.dropdown-btn {
  font-size: 16px;
  padding: 8px 11.5px 8px 12px;
}
.dropdown-menu {
  padding: 12px;
}
</style>

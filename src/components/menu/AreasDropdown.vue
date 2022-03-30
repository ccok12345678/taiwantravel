<template lang="pug">
.dropdown
  a#dropdownMenuLink.dropdown-btn.bg-light.border.rounded.d-flex.text-decoration-none(
    data-bs-toggle="dropdown"
    href="#" role="button"
    aria-expanded="false"
    title="選擇地區")

    .text-muted.lh-1.my-auto(v-if="!cityName")
      | 目的地
    .text-dark.lh-1.my-auto(v-else)
      | {{ cityName }}
      a.text-muted.p-2(
        href="#"
        title="取消"
        role="button"
        @click.prevent="cancelCity")
        img(src="@/assets/icons/x_icon.svg" width="12" alt="cancel button")

    .ms-auto.d-flex
      img.my-auto(
        src="@/assets/icons/arrow_down_circle.svg"
        alt="dropdown menu button")

  .dropdown-menu.border-0.shadow.w-100(
    aria-labelledby="dropdownMenuLink")
    .row.g-2

      .col-xl-4.col-lg-6.col-4(v-for="city in cities" :key="city.english")
        DropdownButton(:city="city"
          @emit-click="handleClick")
</template>

<script>
import { ref } from 'vue'
import DropdownButton from '@/components/menu/DropdownButton.vue'
import cities from '@/data/cities'

export default {
  components: {
    DropdownButton
  },
  setup (props) {
    const cityName = ref(null)

    const handleClick = (city) => {
      // console.log(city)
      cityName.value = city.name
    }

    const cancelCity = () => {
      cityName.value = null
    }

    return {
      cities,
      cityName,
      handleClick,
      cancelCity
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

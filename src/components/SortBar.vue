<template lang="pug">
.d-flex
  a.btn.p-0(href="#")
    img(src="@/assets/icons/baseline_sort_icon.svg" alt="sort button")

  button.menu-button.rounded.w-auto(type="button")
    | 全部
  button.menu-button.rounded.w-auto(type="button")
    | 🔥 熱門程度
  button.menu-button.rounded.w-auto(type="button")
    | 👍 推薦

</template>

<style lang="scss" scoped>
.menu-button {
  padding: 8px 12px;
  margin-left: 12px;
}
</style>

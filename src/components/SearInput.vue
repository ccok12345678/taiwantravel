<template lang="pug">
//- search input
label(for="keyword")
  small.d-none 輸入關鍵字
  .input-group.border.rounded.bg-light
    input#keyword.form-control.border-0(type="search"
      placeholder="搜尋關鍵字")
    button.btn.d-flex(type="button" title="搜尋")
      img.my-auto(src="@/assets/icons/search.svg" alt="search icon")
</template>

<style lang="scss" scoped>
input {
  font-size: 16px;
  padding: 8px 11.5px 7px 12px;

  &:focus {
    outline: none;
  }
}
</style>

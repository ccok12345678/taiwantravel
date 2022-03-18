<template lang="pug">
button.menu-button.rounded.text-nowrap
  slot
</template>

<style lang="scss">
$primary: #3FB195;

button.menu-button {
  background: none;
  border: 1px solid $primary;
  font-size: 17px;
  height: 40px;
  width: 100%;

  &:hover, &:active {
    background: $primary;
    color: white;
  }
}
</style>

<template lang="pug">
.row
  .col.col-lg-9.order-1.vh-100
    router-view
  aside.col-3.order-0.d-none.d-lg-block.vh-100.sticky-top.bg-success
</template>

<style lang="scss">
@import "assets/scss/all.scss";
</style>

<template lang="pug">
header.bg-white.shadow.rounded.d-flex.justify-content-between.align-items-center

  .slogan.flex-fill
    h1 探索。#[br]福爾摩沙

  .w-50.mt-auto.flex-fill
    img.img-fluid(src="@/assets/images/illustration.png"
      alt="heading illustration")

.py-3.mt-2
</template>

<style lang="scss" scoped>
header {
  border-radius: 16px;
  padding-left: 40px;
  padding-right: 10px;

  @media (max-width: 768) {
    border-radius: 11.1753px;
    padding-left: 27.94px;
    padding-right: 7px;
  }
  @media (max-width: 576px) {
    border-radius: 16px;
    padding-left: 24px;
    padding-right: 0;
  }
}

.slogan {
  margin: 95px 0;

  @media (max-width: 800px) {
    margin: 45px 0;
  }
  @media (max-width: 576px) {
    margin:  40px 0;

    h1 {
      font-size: 33px;
    }
  }
}
</style>

<template lang="pug">
article.mt-4
  h6.text-primary.mb-3 景點介紹
  p {{ description }}
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      default: () => '無提供介紹'
    }
  }
}
</script>

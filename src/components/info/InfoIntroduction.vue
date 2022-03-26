<template lang="pug">
article.mt-4(v-if="description !== ''")
  h6.text-primary.mb-3
    | {{ title }}介紹
  p {{ description }}
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      default: () => ''
    },
    title: {
      type: String,
      default: () => ''
    }
  }
}
</script>

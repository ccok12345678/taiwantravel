<template lang="pug">
section
  Title(:header="{title:'熱門景點', url:'attractions'}")
</template>

<script>
import Title from '@/components/FrontPageTitle.vue'

export default {
  components: {
    Title
  }
}
</script>

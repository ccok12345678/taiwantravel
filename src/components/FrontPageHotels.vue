<template lang="pug">
section
  Title(:header="{title:'住宿推薦', url:'hotels'}")
</template>

<script>
import Title from '@/components/FrontPageTitle.vue'

export default {
  components: {
    Title
  }
}
</script>

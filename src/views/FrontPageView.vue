<template lang="pug">
section
  Title(:header="makeHeader('熱門景點', 'attractions')")

section
  Title(:header="makeHeader('觀光活動', 'activities')")

section
  Title(:header="makeHeader('美食品嚐', 'tasty')")

section
  Title(:header="makeHeader('住宿推薦', 'hotels')")

</template>

<script>
import Title from '@/components/FrontPageTitle.vue'

export default {
  components: {
    Title
  },
  setup () {
    const makeHeader = (title, url) => ({ title: title, url: url })

    return {
      makeHeader
    }
  }
}
</script>

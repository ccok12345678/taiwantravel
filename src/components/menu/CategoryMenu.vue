<template lang="pug">
h6.mb-4 精選主題

.row.gy-2
  template(v-for="btn in buttons" :key="btn.src")
    CategoryButton.col-6(:button="btn")

</template>

<script>
import { ref } from 'vue'
import CategoryButton from '@/components/menu/CategoryButton.vue'

export default {
  components: {
    CategoryButton
  },
  setup () {
    const buttons = ref([
      {
        title: '歷史文化',
        src: 'https://i.ibb.co/Y3HKwsR/Frame-40.png',
        category: 'Tourism',
        keywords: ['文化類', '古蹟類']
      }, {
        title: '戶外踏青',
        src: 'https://i.ibb.co/qJQLLGd/Frame-40-1.png',
        category: 'Tourism',
        keywords: ['都會公園類', '生態類', '林場類', '森林遊樂區類']
      }, {
        title: '宗教巡禮',
        src: 'https://i.ibb.co/hCrpLDH/Frame-40-2.png',
        category: 'Tourism',
        keywords: ['廟宇類']
      }, {
        title: '親子活動',
        src: 'https://i.ibb.co/pyXVpSy/Frame-40-3.png',
        category: 'Activity',
        keywords: []
      }, {
        title: '風景區',
        src: 'https://i.ibb.co/vPDSXd8/Frame-40-4.png',
        category: 'Tourism',
        keywords: ['國家風景區類', '自然風景類']
      }, {
        title: '美食品嚐',
        src: 'https://i.ibb.co/CVbFpJY/Frame-40-5.png',
        category: 'Restaurant',
        keywords: ['小吃/特產類']
      }, {
        title: '住宿推薦',
        src: 'https://i.ibb.co/Wz6kDCt/Frame-40-6.png',
        category: 'Hotel',
        keywords: []
      }, {
        title: '觀光活動',
        src: 'https://i.ibb.co/ncmxHdQ/Frame-40-7.png',
        category: 'Activity',
        keywords: []
      }
    ])

    return {
      buttons
    }
  }
}
</script>

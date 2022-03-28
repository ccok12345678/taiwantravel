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
        routeName: 'attractionsSearch',
        keywords: ['文化', '古蹟']
      }, {
        title: '戶外踏青',
        src: 'https://i.ibb.co/qJQLLGd/Frame-40-1.png',
        routeName: 'attractionsSearch',
        keywords: ['公園類', '生態', '林場', '森林遊樂區']
      }, {
        title: '宗教巡禮',
        src: 'https://i.ibb.co/hCrpLDH/Frame-40-2.png',
        routeName: 'attractionsSearch',
        keywords: ['廟', '寺', '教堂', '教會', '壇']
      }, {
        title: '親子活動',
        src: 'https://i.ibb.co/pyXVpSy/Frame-40-3.png',
        routeName: 'activitiesSearch',
        keywords: ['親子']
      }, {
        title: '風景區',
        src: 'https://i.ibb.co/vPDSXd8/Frame-40-4.png',
        routeName: 'attractionsSearch',
        keywords: ['國家風景區', '自然風景']
      }, {
        title: '美食品嚐',
        src: 'https://i.ibb.co/CVbFpJY/Frame-40-5.png',
        routeName: 'restaurantsSearch',
        keywords: []
      }, {
        title: '住宿推薦',
        src: 'https://i.ibb.co/Wz6kDCt/Frame-40-6.png',
        routeName: 'hotelsSearch',
        keywords: []
      }, {
        title: '觀光活動',
        src: 'https://i.ibb.co/ncmxHdQ/Frame-40-7.png',
        routeName: 'activitiesSearch',
        keywords: []
      }
    ])

    return {
      buttons
    }
  }
}
</script>

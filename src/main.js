import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/js/bootstrap.bundle.min'

import OpenLayersMap from 'vue3-openlayers'
import 'vue3-openlayers/dist/vue3-openlayers.css'

import VueLoading from '@/components/VueLoading'
import NoResultMessage from '@/components/NoResultMessage'

createApp(App)
  .use(router)
  .use(OpenLayersMap)
  .component('VueLoading', VueLoading)
  .component('NoResultMessage', NoResultMessage)
  .mount('#app')

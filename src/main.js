import { createApp } from 'vue'
import { createMetaManager, plugin as metaPlugin } from 'vue-meta'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/js/bootstrap.bundle.min'

import OpenLayersMap from 'vue3-openlayers'
import 'vue3-openlayers/dist/vue3-openlayers.css'

import VueLoading from '@/components/VueLoading'
import NoResultMessage from '@/components/NoResultMessage'

const metaManager = createMetaManager()

const app = createApp(App)

app
  .use(router)
  .use(OpenLayersMap)
  .use(metaManager)
  .use(metaPlugin)
  .component('VueLoading', VueLoading)
  .component('NoResultMessage', NoResultMessage)
  .mount('#app')

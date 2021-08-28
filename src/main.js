import Vue from 'vue'
import App from './App.vue'
import { createStore } from './store'
import { createRouter } from './router'
import VueMeta from 'vue-meta'
import 'vue-material-design-icons/styles.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { fa } from '@fortawesome/fontawesome-free'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faVuejs, faJsSquare, faNodeJs, faHtml5, faCss3Alt } from '@fortawesome/free-brands-svg-icons'

library.add(faVuejs)
library.add(faJsSquare)
library.add(faNodeJs)
library.add(faHtml5)
library.add(faCss3Alt)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
})

// Export a factory function for creating a fresh app with every request
export function createApp (context) {
  // Create store and router instances
  const store = createStore()
  const router = createRouter()

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })
  // Return app, router and store instances
  return { app, router, store }
}

import Vue from 'vue'
import App from './App.vue'
import { createStore } from './store'
import { createRouter } from './router'
import VueMeta from 'vue-meta'
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

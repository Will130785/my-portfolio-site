import Vue from 'vue'
import Vuex from 'vuex'
import navigationStore from '../components/navigation/store'
import homeStore from '../pages/home/store'
import currentStore from '../pages/current/store'
import freelanceStore from '../pages/freelance/store'
import forFunStore from '../pages/forfun/store'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      counter: 0
    },
    mutations: {
      increment (state) {
        state.counter++
      }
    },
    modules: {
      navigationStore,
      homeStore,
      currentStore,
      freelanceStore,
      forFunStore
    }
  })
}

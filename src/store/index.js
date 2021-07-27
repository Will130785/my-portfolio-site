import Vue from 'vue'
import Vuex from 'vuex'
import navigationStore from '../components/navigation/store'

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
      navigationStore
    }
  })
}

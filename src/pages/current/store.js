import CurrentService from "../../services/CurrentService"

const state = {
  work: [
    { title: 'Work 1', id: 0 },
    { title: 'Work 2', id: 1 },
    { title: 'Work 3', id: 2 }
  ]
}

const getters = {
  getWorkCurrent (state) {
    return state.work
  }
}

const actions = {
  async setCurrentAction ({ commit }) {
    const res = await CurrentService.getCurrent()
    commit('setCurrentMutation', res.data)
  }
}

const mutations = {
  setCurrentMutation (state, payload) {
    state.work = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
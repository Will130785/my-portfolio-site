const state = {
  work: [
    { name: 'Work 1', id: 0 },
    { name: 'Work 2', id: 1 },
    { name: 'Work 3', id: 2 }
  ]
}

const getters = {
  getWorkCurrent (state) {
    return state.work
  }
}

const actions = {}

const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations
}
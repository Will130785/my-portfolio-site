const state = {
  work: [
    { name: 'Work 1' },
    { name: 'Work 2' },
    { name: 'Work 3' }
  ]
}

const getters = {
  getWork (state) {
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
import FreelanceService from '../../services/FreelanceService'

const state = {
  work: [
    { title: 'Work 1', id: 0 },
    { title: 'Work 2', id: 1 },
    { title: 'Work 3', id: 2 }
  ]
}

const getters = {
  getWorkFreelance (state) {
    return state.work
  }
}

const actions = {
  async setFreelanceAction ({ commit }) {
    const res = await FreelanceService.getFreelance()
    commit('setFreelanceMutation', res.data)
  }
}

const mutations = {
  setFreelanceMutation (state, payload) {
    state.work = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

const state = {
  funProjects: [
    { name: 'Project 1', id: 0 },
    { name: 'Project 2', id: 1 },
    { name: 'Project 3', id: 2 },
    { name: 'Project 4', id: 3 },
    { name: 'Project 5', id: 4 },
    { name: 'Project 6', id: 5 }
  ]
}

const getters = {
  getFunProjects (state) {
    return state.funProjects
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
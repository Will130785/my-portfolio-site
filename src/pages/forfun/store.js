import ProjectService from "../../services/ProjectService"

const state = {
  funProjects: [
    { title: 'Project 1', id: 0 },
    { title: 'Project 2', id: 1 },
    { title: 'Project 3', id: 2 },
    { title: 'Project 4', id: 3 },
    { title: 'Project 5', id: 4 },
    { title: 'Project 6', id: 5 }
  ]
}

const getters = {
  getFunProjects (state) {
    return state.funProjects
  }
}

const actions = {
  async setProjectAction ({ commit }) {
    const res = await ProjectService.getProjects()
    commit('setProjectMutation', res.data)
  }
}

const mutations = {
  setProjectMutation (state, payload) {
    state.funProjects = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
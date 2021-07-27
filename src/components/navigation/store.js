const state = {
  navLinks: [
    { name: 'Home', link: 'Home' },
    { name: 'Blogs', link: 'Blogs' },
    { name: 'CurrentRole', link: 'Current Role' },
    { name: 'ForFun', link: 'For Fun' },
    { name: 'Freelance', link: 'Freelance' },
    { name: 'Professional', link: 'Professional' }
  ],
  sidebarOpen: false
}

const getters = {
  getLinks (state) {
    return state.navLinks
  },
  getSidebarStatus (state) {
    return state.sidebarOpen
  }
}

const actions = {
  sidebarStatusAction ({ commit }) {
    commit('sidebarStatusMutation')
  }
}

const mutations = {
  sidebarStatusMutation (state) {
    state.sidebarOpen = !state.sidebarOpen
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

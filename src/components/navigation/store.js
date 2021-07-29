const state = {
  navLinks: [
    { name: 'Home', link: 'Home' },
    { name: 'Professional', link: 'Professional' },
    { name: 'CurrentRole', link: 'Current Role' },
    { name: 'Freelance', link: 'Freelance' },
    { name: 'ForFun', link: 'For Fun' },
    { name: 'Blogs', link: 'Blogs' },
    { name: 'Contact', link: 'Contact' }
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

const state = {
  navLinks: [
    { name: 'Home', link: 'Home' },
    { name: 'Blogs', link: 'Blogs' },
    { name: 'CurrentRole', link: 'Current Role' },
    { name: 'ForFun', link: 'For Fun' },
    { name: 'Freelance', link: 'Freelance' },
    { name: 'Professional', link: 'Professional' }
  ]
}

const getters = {
  getLinks (state) {
    return state.navLinks
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

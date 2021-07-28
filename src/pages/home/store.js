const state = {
  // Template project data - will eventually come from api
  projects: [
    { name: 'Project 1' },
    { name: 'Project 2' },
    { name: 'Project 3' }
  ],
  // Template project data - will eventually come from api
  blogs: [
    { name: 'Blog 1' },
    { name: 'Blog 2' },
    { name: 'Blog 3' }
  ]
}

const getters = {
  getProjects (state) {
    return state.projects
  },
  getBlogs (state) {
    return state.blogs
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

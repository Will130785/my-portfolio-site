const state = {
  // Template project data - will eventually come from api
  projects: [
    { name: 'Project 1', id: 0 },
    { name: 'Project 2', id: 1 },
    { name: 'Project 3', id: 2 }
  ],
  // Template project data - will eventually come from api
  blogs: [
    { name: 'Blog 1', id: 0 },
    { name: 'Blog 2', id: 1 },
    { name: 'Blog 3', id: 2 }
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

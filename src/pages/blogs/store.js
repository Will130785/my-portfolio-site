const state = {
  blogs: [
    { name: 'Blog 1' },
    { name: 'Blog 2' },
    { name: 'Blog 3' },
    { name: 'Blog 4' },
    { name: 'Blog 5' },
    { name: 'Blog 6' }
  ]
}

const getters = {
  getBlogPageBlogs (state) {
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

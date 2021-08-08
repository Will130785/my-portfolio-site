import BlogsService from '../../services/BlogsService'
import getBlogs from '../../services/BlogsService'

const state = {
  blogs: [
    { name: 'Blog 1', id: 0 },
    { name: 'Blog 2', id: 1 },
    { name: 'Blog 3', id: 2 },
    { name: 'Blog 4', id: 3 },
    { name: 'Blog 5', id: 4 },
    { name: 'Blog 6', id: 5 }
  ]
}

const getters = {
  getBlogPageBlogs (state) {
    return state.blogs
  }
}

const actions = {
  async setBlogsAction ({ commit }) {
    const res = await BlogsService.getBlogs()
    commit('setBlogsMutation', res.data)
  }
}

const mutations = {
  setBlogsMutation (state, payload) {
    state.blogs = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

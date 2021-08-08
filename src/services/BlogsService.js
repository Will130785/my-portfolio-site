import apiClient from './api'

// Get blogs
const getBlogs = async () => {
  try {
    const res = await apiClient().get('/website/blogs')
    if (res && res.data) {
      return res
    }
  } catch (err) {
    console.log(err)
  }
}

export default {
  getBlogs
}

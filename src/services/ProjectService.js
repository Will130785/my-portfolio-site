import apiClient from './api'

const getProjects = async () => {
  try {
    const res = await apiClient().get('/website/projects')
    if (res && res.data) {
      return res
    }
  } catch (err) {
    console.log(err)
  }
}

const getProject = async (id) => {
  try {
    const res = await apiClient().get(`/website/projects/${id}`)
    if (res && res.data) {
      return res
    }
  } catch (err) {
    console.log(err)
  }
}

export default {
  getProjects,
  getProject
}

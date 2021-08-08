import apiClient from './api'

const getFreelance = async () => {
  try {
    const res = await apiClient().get('/website/freelance')
    if (res && res.data) {
      return res
    }
  } catch (err) {
    console.log(err)
  }
}

export default {
  getFreelance
}

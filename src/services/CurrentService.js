import apiClient from './api'

const getCurrent = async () => {
  try {
    const res = await apiClient().get('/website/current')
    if (res && res.data) {
      return res
    }
  } catch (err) {
    console.log(err)
  }
}

export default {
  getCurrent
}

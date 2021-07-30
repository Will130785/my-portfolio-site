// This is just a test
import apiClient from './api'

const { VUE_APP_API_BASE } = process.env

export default {
  async getTest () {
    // return apiClient().get(`${VUE_APP_API_BASE}`)
    const res = await apiClient().get(`${VUE_APP_API_BASE}`)
    if (res && res.data) {
      return res.data
    }
  } 
}

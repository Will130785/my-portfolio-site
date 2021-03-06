import axios from 'axios'
const { VUE_APP_API_BASE } = process.env

export default () => {
  return axios.create({
    baseURL: `${VUE_APP_API_BASE}`,
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
}

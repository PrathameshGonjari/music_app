import axios from 'axios'

class Services {
  get = async (
    url: string,
    params?: any,
  ) => {
    const BASE_URL = "https://itunes.apple.com/"
    return new Promise((resolve, reject) => {
      try {
        axios.get(`${BASE_URL}${url}`, params)
          .then((res) => {
            return resolve({ data: res })
          })
          .catch((err) => {
            return reject(console.log("error has accoured", err))
          })
      } catch (error) {
        return reject(console.log("error has accoured", error))
      }
    })
  }

  post = async (
    url: string,
    params?: any,
  ) => {
    const BASE_URL = "https://itunes.apple.com/"
    return new Promise((resolve, reject) => {
      try {
        axios.post(`${BASE_URL}${url}`, params)
          .then((res) => {
            return resolve({ data: res })
          })
          .catch((err) => {
            return reject(console.log("error has accoured", err))
          })
      } catch (error) {
        return reject(console.log("error has accoured", error))
      }
    })
  }
}

export default new Services()
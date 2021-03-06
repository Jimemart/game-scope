import axios from 'axios'

const apiGame = axios.create({
  baseURL: 'http://localhost:3000/'
})

export const get = (url, params = undefined) => {
  return apiGame.get(url, {
      params
    }).then((res) => {
      if (res.data && typeof res.data !== 'object') {
        return
      }
      return (res.data)
    }, (err) => {

    })
}

export const games = {
  latest: () => get('latest'),
  relevant: () => get('relevant'),
  single: (id) => get(`game/${id}`)
}

export const news = {
  category: (type) => get(`news/${type}`),
  relevant: (gameId) => get(`related/${gameId}`)
}

export const user = {
  getUser: (id) => get(`user/${id}`)
}

export default apiGame

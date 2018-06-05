import * as constants from './constants'

export const getNews = (str) => {
  return {
    type: constants.GET_NEWS,
    str
  }
}

export const setNews = (news) => {
  return {
    type: constants.SET_NEWS,
    news: news
  }
}

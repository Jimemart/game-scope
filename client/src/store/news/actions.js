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

export const getRelevantInit = gameId => {
  return {
    type: constants.GET_RELEVANT_INIT,
    payload: {
      gameId
    }
  }
}

export const getRelevant = () => {
  return {
    type: constants.GET_RELEVANT
  }
}

export const gotRelevant = relevant => {
  return {
    type: constants.GOT_RELEVANT,
    payload: {
      relevant
    }
  }
}

export const actions = {
  getNews,
  getRelevantInit,
  getRelevant,
  gotRelevant
}

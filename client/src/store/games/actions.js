import * as constants from './constants'

export const getLatest = () => {
  return {
    type: constants.GET_LATEST
  }
}

export const setLatest = (games) => {
  return {
    type: constants.SET_LATEST,
    latest: games
  }
}

export const getRelevant = () => {
  return {
    type: constants.GET_RELEVANT
  }
}

export const setRelevant = (games) => {
  return {
    type: constants.SET_LATEST,
    relevant: games
  }
}

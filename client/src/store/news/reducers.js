import * as constants from './constants'

const initialState = {
  news: null
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_NEWS:
      return {
        ...state,
        news: action.fetchedNews
      }
    default:
      return state
  }
}

export default reducer

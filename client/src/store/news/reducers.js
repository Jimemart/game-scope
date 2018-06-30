import * as constants from './constants'

const initialState = {
  news: [],
  relevant: {
    data: [],
    loading: null
  }
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_NEWS:
      return {
        ...state,
        news: action.fetchedNews
      }
    case constants.GET_RELEVANT:
      return {
        ...state,
        relevant: {
          loading: true
        }
      }
    case constants.GOT_RELEVANT:
      console.log(action)
      return {
        ...state,
        relevant: {
          data: action.payload,
          loading: false
        }
      }
    case constants.GET_RELEVANT_FAILED:
    return {
      ...state,
      relevant: {
        loading:false,
        ...action.payload
      }
    }
    default:
      return state
  }
}

export default reducer

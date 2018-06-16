import * as constants from './constants'

const initialState = {
  latest: null,
  relevant: null
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case constants.SET_LATEST:
      return {
        ...state,
        latest: action.latest
      }
    case constants.SET_RELEVANT:
     return {
       ...state,
       relevant: action.relevant
     }
    case constants.GET_SINGLE:
      return {
        ...state,
        game: {
          loading: true
        }
      }
    case constants.SET_SINGLE_GAME:
      return {
        ...state,
        game: {
          ...action.game,
          loading: false
        },
      }
    default:
      return state
  }
}

export default reducer

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
    default:
      return initialState
  }
}

export default reducer

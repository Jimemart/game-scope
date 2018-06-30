import * as constants from './constants'

const initialState = {
  user: null,
  loading: null
  err: null
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.FETCH_USER:
      return {
        ...state,
        loading: true
      }
    case constants.FETCHED_USER:
      return {
        ...state,
        ...action.payload,
        loading: false
      }
    case constants.FETCH_USER_FAILED:
      return {
        ...state,
        ...action.payload,
        loading: false
      }
    default:

  }
}

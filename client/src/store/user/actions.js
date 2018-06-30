import  * as constants from './constants'

export const fetchUserInit = (id) => {
  return {
    type: constants.FETCH_USER_INIT,
    payload: {
      id
    }
  }
}

export const fetchUser = () => {
  return {
    type: constants.FETCH_USER
  }
}

export const fetchedUser = (user) => {
  return {
    type: constants.FETCHED_USER,
    payload: {
      user
    }
  }
}

export const fetchUserFailed = (err) => {
  return {
    type: constants.FETCH_USER_FAILED,
    payload: {
      err
    }
  }
}

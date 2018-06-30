import { call, put, takeEvery } from 'redux-saga/effects'
import * as usersActions from './actions'
import { user } from '../../api/api'

export function* fetchUser ({payload: { id }}) {
  try {
    yield put(usersActions.fetchUser())
    const fetchedUser = yield call(user.getUser, id)
    yield put({type: "FETCHED_USER", payload: fetchedUser})
  } catch(e) {
    console.log(e)
    yield put({type: "FETCH_USER_FAILED", payload: e})
  }
}

export const usersSaga = [
  takeEvery("FETCH_USER_INIT", fetchUser)
]

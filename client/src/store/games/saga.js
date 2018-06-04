import { call, put, takeEvery } from 'redux-saga/effects'
import { games } from '../../api/api'

export function* fetchLatest () {
  try {
    const latest = yield call(games.latest)
    yield put({ type: "SET_LATEST", latest})
  } catch(e) {

  }
}

export function* fetchRelevant () {
  try {
    const relevant = yield call(games.relevant)
    yield put({ type: "SET_RELEVANT", relevant})
  } catch(e) {

  }
}

export const gameSagas = [
  takeEvery("GET_LATEST", fetchLatest),
  takeEvery("GET_RELEVANT", fetchRelevant)
]

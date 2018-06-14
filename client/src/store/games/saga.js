import { call, put, takeEvery } from 'redux-saga/effects'
import { games } from '../../api/api'

export function* fetchLatest () {
  try {
    const latest = yield call(games.latest)
    yield put({ type: "SET_LATEST", latest})
  } catch(e) {
    console.log(e)
  }
}

export function* fetchRelevant () {
  try {
    const relevant = yield call(games.relevant)
    yield put({ type: "SET_RELEVANT", relevant})
  } catch(e) {
    console.log(e)
  }
}

export function* fetchSingle ({id}) {
  try {
    const game = yield call(games.single, id)
    yield put({ type: "SET_SINGLE_GAME", game})
  } catch(e) {
    console.log(e)
  }
}

export const gameSagas = [
  takeEvery("GET_LATEST", fetchLatest),
  takeEvery("GET_RELEVANT", fetchRelevant),
  takeEvery("GET_SINGLE", fetchSingle)
]

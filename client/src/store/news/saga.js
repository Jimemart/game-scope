import { call, put, takeEvery } from 'redux-saga/effects'
import { actions as newsActions } from './actions'
import { news } from '../../api/api'

export function* fetchNews ({str}) {
  try {
    str = str.toLowerCase().replace(/ /g,"-")
    const fetchedNews = yield call(news.category, str)
    yield put({ type: "SET_NEWS", fetchedNews})
  } catch(e) {

  }
}

export function* fetchRelevant ({ payload: { gameId } }) {
  try {
    yield put(newsActions.getNews())
    const fetchedRelevant = yield call(news.relevant, gameId)
    yield put({type: "GOT_RELEVANT", payload: fetchedRelevant})
  } catch(e) {
    console.log(e)
    yield put({type: "GET_RELEVANT_FAILED", payload: e})
  }
}

export const newsSagas = [
  takeEvery("GET_NEWS", fetchNews),
  takeEvery("GET_RELEVANT_INIT", fetchRelevant)
]

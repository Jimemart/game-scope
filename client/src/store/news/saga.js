import { call, put, takeEvery } from 'redux-saga/effects'
import { news } from '../../api/api'

export function* fetchNews ({str}) {
  try {
    str = str.toLowerCase().replace(/ /g,"-")
    const fetchedNews = yield call(news.category, str)
    yield put({ type: "SET_NEWS", fetchedNews})
  } catch(e) {

  }
}

export const newsSagas = [
  takeEvery("GET_NEWS", fetchNews)
]

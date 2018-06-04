import { all } from 'redux-saga/effects'

import { gameSagas } from './games/saga'
import { newsSagas } from './news/saga'

export function* rootSaga() {
  yield all([
    ...gameSagas,
    ...newsSagas
  ])
}

import { all } from 'redux-saga/effects'

import { gameSagas } from './games/saga'

export function* rootSaga() {
  yield all([
    ...gameSagas
  ])
}

import { all } from 'redux-saga/effects'

import { gameSagas } from './games/saga'
import { newsSagas } from './news/saga'
import { usersSaga } from './user/saga'

export function* rootSaga() {
  yield all([
    ...gameSagas,
    ...newsSagas,
    ...usersSaga
  ])
}

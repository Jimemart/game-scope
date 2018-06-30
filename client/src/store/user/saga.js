import { call, put, takeEvery } from 'redux-saga/effects'

import { user } from '../../api/api'

export function* fetchUser ({payload: { id }}) {
  try {
    yield put()
  }
}

import { put, takeLatest, call } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import API from 'api'
import actions, { constants } from 'actions'

function* getAuth({ payload }) {
  try {
    yield put(actions.authGetRequestPending())
    const authString = btoa(payload)
    yield call(API.authGet, { headers: { Authorization: `Basic ${authString}` } })
    yield put(actions.authGetRequestSuccess(authString))
    yield call([localStorage, 'setItem'], 'token', authString)
  } catch (error) {
    yield put(actions.authGetRequestFailure(error))
    yield put(push('/'))
  }
}

export default function* watchAuth() {
  yield takeLatest(constants.auth.AUTH_GET, getAuth)
}

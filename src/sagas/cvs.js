import { put, takeLatest, call } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import API from 'api'
import actions, { constants } from 'actions'

function* fetchCVs({ payload }) {
  try {
    yield put(actions.cvsGetListRequestPending())
    const response = yield call(API.cvsGetList, payload)
    yield put(actions.cvsGetListRequestSuccess(response.data))
  } catch (error) {
    yield put(actions.cvsGetListRequestFailure(error))
  }
}

function* createCV({ payload }) {
  try {
    yield put(actions.cvsCreateRequestPending())
    const formData = new FormData()
    formData.append('file', payload)
    const { data } = yield call(API.cvsCreate, formData)
    yield put(actions.cvsCreateRequestSuccess(data))
    yield put(push('/admin/cvs'))
  } catch (error) {
    yield put(actions.cvsCreateRequestFailure(error))
  }
}

function* deleteCV({ payload }) {
  try {
    yield put(actions.cvsDeleteRequestPending())
    yield call(API.cvsDelete, payload)
    yield put(actions.cvsDeleteRequestSuccess(payload))
  } catch (error) {
    yield put(actions.cvsDeleteRequestFailure(error))
  }
}

export default function* watchCVs() {
  yield takeLatest(constants.cvs.CVS_GET_LIST, fetchCVs)
  yield takeLatest(constants.cvs.CVS_CREATE, createCV)
  yield takeLatest(constants.cvs.CVS_DELETE, deleteCV)
}

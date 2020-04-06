import { put, takeLatest, call } from 'redux-saga/effects'
import API from 'api'
import actions, { constants } from 'actions'

function* fetchPosts() {
  try {
    yield put(actions.postsRequestPending())
    const response = yield call(API.postsGetCollection)
    yield put(actions.postsRequestSuccess(response.data))
  } catch (error) {
    yield put(actions.postsRequestSuccess(error))
  }
}

export default function* watchFetchPosts() {
  yield takeLatest(constants.posts.FETCH_POSTS, fetchPosts)
}

import { put, takeLatest, call } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import API from 'api'
import actions, { constants } from 'actions'

function* fetchPosts() {
  try {
    yield put(actions.postsGetListRequestPending())
    const response = yield call(API.postsGetList)
    yield put(actions.postsGetListRequestSuccess(response.data))
  } catch (error) {
    yield put(actions.postsGetListRequestFailure(error))
  }
}

function* createPost({ payload }) {
  try {
    yield put(actions.postsCreateRequestPending())
    const { data } = yield call(API.postsCreate, payload)
    yield put(actions.postsCreateRequestSuccess(data))
    yield put(push(`/admin/posts/${data.id}/edit`))
  } catch (error) {
    yield put(actions.postsCreateRequestFailure(error))
  }
}

function* fetchPost({ payload }) {
  try {
    yield put(actions.postsGetItemRequestPending())
    const response = yield call(API.postsGetItem, payload)
    yield put(actions.postsGetItemRequestSuccess(response.data))
  } catch (error) {
    yield put(actions.postsGetItemRequestFailure(error))
  }
}

function* updatePost({ payload }) {
  try {
    yield put(actions.postsUpdateRequestPending())
    const response = yield call(API.postsUpdate, payload.id, payload.params)
    yield put(actions.postsUpdateRequestSuccess(response.data))
  } catch (error) {
    yield put(actions.postsUpdateRequestFailure(error))
  }
}

function* deletePost({ payload }) {
  try {
    yield put(actions.postsDeleteRequestPending())
    yield call(API.postsDelete, payload)
    yield put(actions.postsDeleteRequestSuccess(payload))
  } catch (error) {
    yield put(actions.postsDeleteRequestFailure(error))
  }
}

export default function* watchPosts() {
  yield takeLatest(constants.posts.POSTS_GET_LIST, fetchPosts)
  yield takeLatest(constants.posts.POSTS_CREATE, createPost)
  yield takeLatest(constants.posts.POSTS_GET_ITEM, fetchPost)
  yield takeLatest(constants.posts.POSTS_UPDATE, updatePost)
  yield takeLatest(constants.posts.POSTS_DELETE, deletePost)
}

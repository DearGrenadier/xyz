import { all } from 'redux-saga/effects'
import watchFetchPosts from './posts'

export default function* rootSaga() {
  yield all([
    watchFetchPosts(),
  ])
}

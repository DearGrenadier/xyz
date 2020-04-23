import { all } from 'redux-saga/effects'
import watchPosts from './posts'
import watchAuth from './auth'

export default function* rootSaga() {
  yield all([
    watchPosts(),
    watchAuth()
  ])
}

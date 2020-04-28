import { all } from 'redux-saga/effects'
import watchPosts from './posts'
import watchAuth from './auth'
import watchCVs from './cvs'

export default function* rootSaga() {
  yield all([
    watchPosts(),
    watchAuth(),
    watchCVs()
  ])
}

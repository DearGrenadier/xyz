import { all } from 'redux-saga/effects'
import watchPosts from './posts'

export default function* rootSaga() {
  yield all([
    watchPosts()
  ])
}

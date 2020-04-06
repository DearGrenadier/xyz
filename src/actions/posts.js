import { createActions } from 'redux-actions'

export const postConstants = {
  FETCH_POSTS: 'FETCH_POSTS',
  POSTS_REQUEST_PENDING: 'POSTS_REQUEST_PENDING',
  POSTS_REQUEST_SUCCESS: 'POSTS_REQUEST_SUCCESS',
  POSTS_REQUEST_ERROR: 'POSTS_REQUEST_ERROR'
}

export default createActions(
  postConstants.FETCH_POSTS,
  postConstants.POSTS_REQUEST_PENDING,
  postConstants.POSTS_REQUEST_SUCCESS,
  postConstants.POSTS_REQUEST_ERROR
)

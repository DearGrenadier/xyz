import { handleActions } from 'redux-actions'
import { constants } from 'actions'

const defaultState = { posts: [], loading: false, error: null }


const postsReducer = handleActions({
  [constants.posts.POSTS_REQUEST_PENDING]: (state) => ({ ...state, loading: true }),
  [constants.posts.POSTS_REQUEST_SUCCESS]: (state, { payload }) => ({
    ...state, loading: false, posts: payload
  }),
  [constants.posts.POSTS_REQUEST_ERROR]: (state, { payload }) => ({
    ...state, loading: false, error: payload
  })
}, defaultState)

export default postsReducer

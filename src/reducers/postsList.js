import { handleActions, combineActions } from 'redux-actions'
import { constants } from 'actions'

const defaultState = { data: [], processing: false, error: null }

const postsListReducer = handleActions({
  [combineActions(
    constants.posts.POSTS_GET_LIST_REQUEST_PENDING,
    constants.posts.POSTS_UPDATE_REQUEST_PENDING,
    constants.posts.POSTS_DELETE_REQUEST_PENDING
  )]: (state) => ({ ...state, processing: true }),
  [constants.posts.POSTS_GET_LIST_REQUEST_SUCCESS]: (state, { payload }) => ({
    ...state, processing: false, data: payload
  }),
  [constants.posts.POSTS_DELETE_REQUEST_SUCCESS]: (state, { payload }) => ({
    ...state, processing: false, data: state.data.filter((item) => item.id !== payload)
  }),
  [constants.posts.POSTS_UPDATE_REQUEST_SUCCESS]: (state, { payload }) => {
    const data = state.data.map((post) => {
      if (post.id === payload.id) return payload

      return post
    })

    return {
      ...state,
      processing: false,
      data
    }
  },
  [combineActions(
    constants.posts.POSTS_GET_LIST_REQUEST_FAILURE,
    constants.posts.POSTS_DELETE_REQUEST_FAILURE,
    constants.posts.POSTS_UPDATE_REQUEST_FAILURE
  )]: (state, { payload }) => ({
    ...state, processing: false, error: payload
  })
}, defaultState)

export default postsListReducer

import { handleActions, combineActions } from 'redux-actions'
import { constants } from 'actions'

const defaultState = { data: {}, processing: false, error: null }

export default handleActions({
  [combineActions(
    constants.posts.POSTS_CREATE_REQUEST_PENDING,
    constants.posts.POSTS_GET_ITEM_REQUEST_PENDING,
    constants.posts.POSTS_UPDATE_REQUEST_PENDING
  )]: (state) => ({ ...state, processing: true }),
  [combineActions(
    constants.posts.POSTS_CREATE_REQUEST_SUCCESS,
    constants.posts.POSTS_GET_ITEM_REQUEST_SUCCESS,
    constants.posts.POSTS_UPDATE_REQUEST_SUCCESS
  )]: (state, { payload }) => ({
    ...state, processing: false, data: payload
  }),
  [combineActions(
    constants.posts.POSTS_CREATE_REQUEST_FAILURE,
    constants.posts.POSTS_GET_ITEM_REQUEST_FAILURE,
    constants.posts.POSTS_UPDATE_REQUEST_FAILURE
  )]: (state, { payload }) => ({
    ...state, processing: false, error: payload
  })
}, defaultState)

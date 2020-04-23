import { handleActions } from 'redux-actions'
import { constants } from 'actions'

const token = localStorage.getItem('token')

const defaultState = { token: token || '', processing: false, error: null }

export default handleActions({
  [constants.auth.AUTH_GET_REQUEST_PENDING]: (state) => ({ ...state, processing: true }),
  [constants.auth.AUTH_GET_REQUEST_SUCCESS]: (state, { payload }) => ({
    ...state, processing: false, token: payload
  }),
  [constants.auth.AUTH_GET_REQUEST_FAILURE]: (state, { payload }) => ({
    ...state, processing: false, error: payload
  })
}, defaultState)

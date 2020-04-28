import { handleActions, combineActions } from 'redux-actions'
import { constants } from 'actions'

const defaultState = { data: [], processing: false, error: null }

export default handleActions({
  [combineActions(
    constants.cvs.CVS_GET_LIST_REQUEST_PENDING,
    constants.cvs.CVS_CREATE_REQUEST_PENDING,
    constants.cvs.CVS_DELETE_REQUEST_PENDING
  )]: (state) => ({ ...state, processing: true }),
  [constants.cvs.CVS_GET_LIST_REQUEST_SUCCESS]: (state, { payload }) => ({
    ...state, processing: false, data: payload
  }),
  [constants.cvs.CVS_CREATE_REQUEST_SUCCESS]: (state, { payload }) => ({
    ...state, processing: false, data: [...state.data, payload]
  }),
  [constants.cvs.CVS_DELETE_REQUEST_SUCCESS]: (state, { payload }) => ({
    ...state, processing: false, data: state.data.filter((item) => item.id !== payload)
  }),
  [combineActions(
    constants.cvs.CVS_GET_LIST_REQUEST_PENDING,
    constants.cvs.CVS_CREATE_REQUEST_PENDING,
    constants.cvs.CVS_DELETE_REQUEST_PENDING
  )]: (state, { payload }) => ({
    ...state, processing: false, error: payload
  })
}, defaultState)

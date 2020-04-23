import { createActions } from 'redux-actions'
import { createRequestConstants } from 'helpers'

export const authConstants = {
  ...createRequestConstants('AUTH_GET')
}

export default createActions(...Object.keys(authConstants))

import { createActions } from 'redux-actions'
import { createRequestConstants } from 'helpers'

export const cvsConstants = {
  ...createRequestConstants('CVS_GET_LIST'),
  ...createRequestConstants('CVS_CREATE'),
  ...createRequestConstants('CVS_DELETE')
}

export default createActions(...Object.keys(cvsConstants))

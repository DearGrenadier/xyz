import { createActions } from 'redux-actions'
import { createRequestConstants } from 'helpers'

export const postConstants = {
  ...createRequestConstants('POSTS_GET_LIST'),
  ...createRequestConstants('POSTS_CREATE'),
  ...createRequestConstants('POSTS_GET_ITEM'),
  ...createRequestConstants('POSTS_UPDATE'),
  ...createRequestConstants('POSTS_DELETE')
}

export default createActions(...Object.keys(postConstants))

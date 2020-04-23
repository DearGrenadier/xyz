import posts, { postConstants } from './posts'
import auth, { authConstants } from './auth'

const actions = {
  ...posts,
  ...auth
}

export const constants = {
  posts: postConstants,
  auth: authConstants
}

export default actions

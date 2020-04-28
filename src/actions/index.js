import posts, { postConstants } from './posts'
import auth, { authConstants } from './auth'
import cvs, { cvsConstants } from './cvs'

const actions = {
  ...posts,
  ...auth,
  ...cvs
}

export const constants = {
  posts: postConstants,
  auth: authConstants,
  cvs: cvsConstants
}

export default actions

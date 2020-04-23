import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import postsListReducer from './postsList'
import postReducer from './post'
import authReducer from './auth'

const rootReducer = (history) => combineReducers({
  auth: authReducer,
  postsList: postsListReducer,
  currentPost: postReducer,
  router: connectRouter(history)
})

export default rootReducer

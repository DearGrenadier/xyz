import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import postsListReducer from './postsList'
import postReducer from './post'

const rootReducer = (history) => combineReducers({
  postsList: postsListReducer,
  currentPost: postReducer,
  router: connectRouter(history)
})

export default rootReducer

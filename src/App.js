import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import { routerMiddleware } from 'connected-react-router'

import rootReducer from 'reducers'
import rootSaga from 'sagas'
import Router, { history } from 'router'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware, routerMiddleware(history)]

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

const store = createStore(
  rootReducer(history),
  applyMiddleware(...middlewares)
)

sagaMiddleware.run(rootSaga)

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
)

export default App

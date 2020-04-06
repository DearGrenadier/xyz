import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from 'reducers'
import rootSaga from 'sagas'
import Router from 'router'


const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
)
sagaMiddleware.run(rootSaga)

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
)

export default App

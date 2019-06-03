import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducers from '../reducers'
import logger from '../middleware'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTESION_COMPOSE__ || compose

const store = createStore(
  reducers,
  {},
  composeEnhancers(
    applyMiddleware(thunk, logger)
  )
)

export default store
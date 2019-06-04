import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'remote-redux-devtools'
import thunk from 'redux-thunk'

import reducers from '../reducers'
import logger from '../middleware'

const composeEnhancers = composeWithDevTools({
  realtime: true,
  name: 'K2K Vocab Grammar',
  hostname: 'localhost',
  port: 3000
})

const store = createStore(
  reducers,
  {},
  composeEnhancers(
    applyMiddleware(thunk, logger)
  )
)

export default store
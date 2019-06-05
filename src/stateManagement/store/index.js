import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'remote-redux-devtools'
import thunk from 'redux-thunk'

import reducers from '../reducers'
import logger from '../middleware'
import { loadState, saveState } from './localStorage'

const composeEnhancers = composeWithDevTools({
  realtime: true,
  name: 'K2K Vocab Grammar',
  hostname: 'localhost',
  port: 3000
})

const persistedState = loadState()
const store = createStore(
  reducers,
  persistedState,
  composeEnhancers(
    applyMiddleware(thunk, logger)
  )
)

store.subscribe(() => {
  saveState({
    app: store.getState().app
  })
})

export default store
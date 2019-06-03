import { combineReducers } from 'redux'
import app from './appReducer'
import auth from './authReducer'

const reducers = combineReducers({
  app,
  auth,
})

export default reducers
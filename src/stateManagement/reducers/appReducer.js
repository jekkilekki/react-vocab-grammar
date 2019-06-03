import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../actions'

const INITIAL_STATE = {
  loggedIn: null,
  error: ''
}

export default ( state = INITIAL_STATE, action ) => {
  switch ( action.type ) {
    case LOGIN_SUCCESS: 
      return { ...state, loggedIn: true }
    case LOGIN_FAIL:
      return { ...state, loggedIn: false }
    case LOGOUT:
      return { ...state, loggedIn: null }
    default: 
      return state
  }
}
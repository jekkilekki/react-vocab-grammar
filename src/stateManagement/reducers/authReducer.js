import { CHECK_AUTH_STATUS } from '../actions'

const INITIAL_STATE = {
  email: '',
  password: '',
  error: '',
  loading: false
}

export default ( state = INITIAL_STATE, action ) => {
  switch ( action.type ) {
    case CHECK_AUTH_STATUS: 
      return { ...state, error: '' }
    default: 
      return state
  }
}
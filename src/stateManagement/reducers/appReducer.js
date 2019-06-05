import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, FORM_FIELD_UPDATE } from '../actions'

const INITIAL_STATE = {
  loggedIn: null,
  error: '',
  Hangul: {},
  Vocabulary: {},
  Grammar: {},
  Phrases: {}
}

export default ( state = INITIAL_STATE, action ) => {
  switch ( action.type ) {
    case LOGIN_SUCCESS: 
      return { ...state, loggedIn: true }
    case LOGIN_FAIL:
      return { ...state, loggedIn: false }
    case LOGOUT:
      return { ...state, loggedIn: null }
    case FORM_FIELD_UPDATE: 
      return { ...state,
        [action.payload.formId]: {
          ...state[action.payload.formId],
          [action.payload.prop]: action.payload.value
        }
      }
    default: 
      return state
  }
}
import { LOAD_APP_DATA, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, FORM_FIELD_UPDATE, FORM_SAVE } from '../actions'

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
    case LOAD_APP_DATA: 
      return { ...state, app: action.payload.appData }
    case LOGIN_SUCCESS: 
      return { ...state, loggedIn: true }
    case LOGIN_FAIL:
      return { ...state, loggedIn: false }
    case LOGOUT:
      return { ...state, loggedIn: null }
    case FORM_FIELD_UPDATE: 
      return { 
        ...state,
        [action.payload.formId]: {
          ...state[action.payload.formId],
          [action.payload.prop]: action.payload.value
        }
      }
    case FORM_SAVE: 
      return {
        ...state,
        [action.payload.formId]: {
          cards: state[action.payload.formId].cards
            ? state[action.payload.formId].cards.concat([action.payload.card])
            : [action.payload.card]
        }
      }
    default: 
      return state
  }
}
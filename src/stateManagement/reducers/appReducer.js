import { 
  LOAD_APP_DATA, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, 
  FORM_FIELD_UPDATE, FORM_SAVE, FORM_SAVE_COMPLETE,
  CARD_DELETE, CARD_EDIT, FORM_ERROR
} from '../actions'
import { generateShortId } from '../../utils/helpers'

const INITIAL_STATE = {
  loggedIn: null,
  error: '',
  saving: false,
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
    case FORM_ERROR: 
      return { ...state, error: action.payload }
    case FORM_FIELD_UPDATE: 
      return { 
        ...state,
        [action.payload.formId]: {
          ...state[action.payload.formId],
          [action.payload.prop]: action.payload.value
        },
        error: ''
      }
    case FORM_SAVE: 
      return {
        ...state,
        saving: true,
        [action.payload.formId]: {
          cards: state[action.payload.formId].cards
            ? state[action.payload.formId].cards.concat([action.payload.card])
            : [action.payload.card],
          definitions: [],
          sentences: []
        },
        error: ''
      }
    case FORM_SAVE_COMPLETE:
      return { ...state, saving: false }
    case CARD_DELETE:
      return {
        ...state,
        [action.payload.formId]: {
          cards: state[action.payload.formId].cards.filter(card => (
            card.id !== action.payload.cardId
          ))
        }
      }
    case CARD_EDIT: 
      let foundCard = state[action.payload.formId].cards.filter( card => card.id === action.payload.cardId )
      return {
        ...state,
        [action.payload.formId]: {
          level: foundCard.level || '',
          imageUrl: foundCard.imageUrl || '',
          korean: foundCard.korean || '',
          english: foundCard.english || '',
          radioSelected: foundCard.radioSelected || null,
          checkboxesChecked: foundCard.checkboxesChecked || [],
          definitions: foundCard.definitions || [{ key: generateShortId("definitions(0)"), id: "definitions(0)", value: "" }],
          sentences: foundCard.sentences || [{ key: generateShortId("sentences(0)"), id: "sentences(0)", value: "" }]
        }
      }
    default: 
      return state
  }
}
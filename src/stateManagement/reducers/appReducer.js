import { 
  LOAD_APP_DATA, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, 
  FORM_FIELD_UPDATE, FORM_SAVE, FORM_UPDATE, FORM_SAVE_COMPLETE,
  CARD_DELETE, CARD_EDIT, FORM_ERROR, CARDS_DELETE_ALL, 
  SAMPLE_DATA_OVERWRITE, SAMPLE_DATA_APPEND, SAMPLE_DATA_DELETE,
  CREATE_FORM
} from '../actions'
import { generateShortId } from '../../utils/helpers'

const INITIAL_STATE = {
  loggedIn: null,
  error: '',
  editing: null,
  saving: false,
  Letters: {},
  Hangul: {},
  Vocabulary: {},
  Grammar: {},
  Phrases: {},
  Passages: {}
}

export default ( state = INITIAL_STATE, action ) => {
  switch ( action.type ) {
    case LOAD_APP_DATA: 
      return { ...state, app: action.payload.appData }
    case SAMPLE_DATA_OVERWRITE: 
      return { ...state, 
        [action.payload.formId]: {
          cards: action.payload.data
        }
      }
    case SAMPLE_DATA_APPEND: 
      return { ...state, 
        [action.payload.formId]: {
          ...state[action.payload.formId],
          cards: state[action.payload.formId].cards !== undefined
            ? state[action.payload.formId].cards.concat(action.payload.data)
            : action.payload.data,
        }
      }
    case SAMPLE_DATA_DELETE:
      const dataIds = action.payload.data.map(data => data.id)
      return { ...state,
        [action.payload.formId]: {
          ...state[action.payload.formId],
          cards: state[action.payload.formId].cards 
            ? state[action.payload.formId].cards.filter(card => (
              ! dataIds.includes(card.id)
            ))
            : []
        }
      }
    case CREATE_FORM: 
      return { ...state, INITIAL_STATE }
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
    case FORM_UPDATE:
      let oldCard = state[action.payload.formId].cards.find(card => card.id === action.payload.cardId)
      let index = state[action.payload.formId].cards.indexOf(oldCard)
      let newCards = state[action.payload.formId].cards.map((card, i) => {
        if ( i !== index ) return card
        return {
          ...card,
          ...action.payload.card
        }
      })

      return {
        ...state,
        saving: true,
        [action.payload.formId]: {
          cards: newCards
        }
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
      let foundCard = state[action.payload.formId].cards.filter( card => card.id === action.payload.cardId )[0]
      return {
        ...state,
        editing: foundCard.id,
        [action.payload.formId]: {
          level: foundCard.level ? foundCard.level : '',
          imageUrl: foundCard.imageUrl ? foundCard.imageUrl : '',
          korean: foundCard.korean ? foundCard.korean : '',
          english: foundCard.english ? foundCard.english : '',
          radioSelected: foundCard.radioSelected ? foundCard.radioSelected : null,
          checkboxesChecked: foundCard.checkboxesChecked ? foundCard.checkboxesChecked : [],
          definitions: foundCard.definitions ? foundCard.definitions : [{ key: generateShortId("definitions(0)"), id: "definitions(0)", value: "" }],
          sentences: foundCard.sentences ? foundCard.sentences : [{ key: generateShortId("sentences(0)"), id: "sentences(0)", value: "" }],
          cards: state[action.payload.formId].cards
        }
      }
    case CARDS_DELETE_ALL: 
      return {
        ...state,
        [action.payload.formId]: {}
      }
    default: 
      return state
  }
}
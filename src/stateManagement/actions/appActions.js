import { 
  SEARCH_QUERY, FORM_FIELD_UPDATE, FORM_SAVE, FORM_SAVE_COMPLETE,
  CARD_DELETE, CARD_EDIT, FORM_ERROR, CARDS_DELETE_ALL, LOAD_DUMMY_DATA,
  CREATE_FORM
} from './index'

import { dummyData } from '../../utils/helpers'

export const loadDummyData = ({ formId }) => {
  return {
    type: LOAD_DUMMY_DATA,
    payload: { formId, data: dummyData }
  }
}

export const createForm = (formId) => {
  return async (dispatch) => {
    await dispatch({
      type: CREATE_FORM,
      payload: formId
    })
  }
}

export const searchQuery = (query) => {
  return {
    type: SEARCH_QUERY,
    payload: query
  }
}

export const formError = (msg) => {
  return {
    type: FORM_ERROR,
    payload: msg
  }
}

export const formFieldUpdate = ({ formId, prop, value }) => {
  return {
    type: FORM_FIELD_UPDATE,
    payload: { formId, prop, value }
  }
}

export const formSave = ({ formId, card }) => {
  return async (dispatch) => {
    await dispatch({
      type: FORM_SAVE,
      payload: { formId, card }
    })
    dispatch({ type: FORM_SAVE_COMPLETE })
  }
}

export const cardDelete = ({ formId, cardId }) => {
  return {
    type: CARD_DELETE,
    payload: { formId, cardId }
  }
}

export const cardEdit = ({ formId, cardId }) => {
  return {
    type: CARD_EDIT,
    payload: { formId, cardId }
  }
}

export const cardsDeleteAll = ({ formId }) => {
  console.log( formId )
  return {
    type: CARDS_DELETE_ALL,
    payload: { formId }
  }
}
import { 
  SEARCH_QUERY, FORM_FIELD_UPDATE, FORM_SAVE, FORM_SAVE_COMPLETE,
  CARD_DELETE, CARD_EDIT, FORM_ERROR, CARDS_DELETE_ALL, 
  SAMPLE_DATA_OVERWRITE, SAMPLE_DATA_APPEND, SAMPLE_DATA_DELETE,
  CREATE_FORM,
} from './index'

import { sampleData } from '../../utils/helpers'

export const sampleDataOverwrite = ( formId ) => {
  return {
    type: SAMPLE_DATA_OVERWRITE,
    payload: { formId, data: sampleData }
  }
}

export const sampleDataAppend = ( formId ) => {
  return {
    type: SAMPLE_DATA_APPEND,
    payload: { formId, data: sampleData }
  }
}

export const sampleDataDelete = ( formId ) => {
  return {
    type: SAMPLE_DATA_DELETE,
    payload: { formId, data: sampleData }
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
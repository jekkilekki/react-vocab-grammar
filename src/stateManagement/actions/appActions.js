import { SEARCH_QUERY, FORM_FIELD_UPDATE, FORM_SAVE } from './index'

export const searchQuery = (query) => {
  return {
    type: SEARCH_QUERY,
    payload: query
  }
}

export const formFieldUpdate = ({ formId, prop, value }) => {
  return {
    type: FORM_FIELD_UPDATE,
    payload: { formId, prop, value }
  }
}

export const formSave = ({ formId, card }) => {
  return async (dispatch, getState) => {
    await dispatch({
      type: FORM_SAVE,
      payload: { formId, card }
    })
  }
}
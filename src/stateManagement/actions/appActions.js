import { SEARCH_QUERY, FORM_FIELD_UPDATE } from './index'

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
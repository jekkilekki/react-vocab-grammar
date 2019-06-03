import { SEARCH_QUERY } from './index'

export const searchQuery = (query) => {
  return {
    type: SEARCH_QUERY,
    payload: query
  }
}
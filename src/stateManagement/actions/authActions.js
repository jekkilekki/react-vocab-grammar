import { CHECK_AUTH_STATUS, LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from './index'

export const checkAuthStatus = () => {
  return async (dispatch) => {
    dispatch({ type: CHECK_AUTH_STATUS })
    userLoggedIn(dispatch)
  }
}

const userLoggedIn = (dispatch) => {
  dispatch({
    type: LOGIN_SUCCESS
  })
}

const userLoggedOut = (dispatch) => {
  dispatch({
    type: LOGIN_FAIL
  })
}


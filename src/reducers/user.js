import actionTypes from "../actions/actionTypes"

const isLogin = (
  Boolean(window.localStorage.getItem('authToken'))
  ||
  Boolean(window.sessionStorage.getItem('authToken'))
)
const userMsg = (
  JSON.parse(window.localStorage.getItem('userMsg'))
  ||
  JSON.parse(window.sessionStorage.getItem('userMsg'))
)
const initState = {
  ...userMsg,
  isLoading: false,
  isLogin
}

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.START_LOGIN:
      return {
        ...state,
        isLoading: true
      }
    case actionTypes.SUCCESS_LOGIN:
      return {
        ...action.payload.userMsg,
        isLoading: false,
        isLogin: true
      }
    case actionTypes.FAILED_LOGIN:
      return {
        displayName: '',
        avatar: '',
        isLogin: false,
        isLoading: false,
        role: ''
      }
    default:
      return state
  }
}
import actionTypes from "../actions/actionTypes"

const initState = {
  id: '',
  displayName: '',
  role: '',
  avatar: '',
  isLoading: false,
  isLogin: false,
}

export default (state = initState, action) => {
  console.log('这是user的action:', action)
  switch (action.type) {
    case actionTypes.START_LOGIN:
      return {
        ...state,
        isLoading: true
      }
    case actionTypes.SUCCESS_LOGIN:
      console.log(state.isLogin,state.isLoading)
      return {
        ...state,
        ...action.payload.userInfo,
        isLoading: false,
        isLogin: true
      }
    case actionTypes.FAILED_LOGIN:
      return { initState }
    default:
      return state
  }
}
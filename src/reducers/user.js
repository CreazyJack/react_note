import actionTypes from "../actions/actionTypes"

const initState = {
  id: null,
  displayName: '',
  role: '',
  avatar: '',
  isLoading: false,
  isLogin: true,
}

export default (state = initState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
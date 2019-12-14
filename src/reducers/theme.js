import actionTypes from "../actions/actionTypes"

const initState = {
  header: 'white',
  sidebar: 'white',
  content: 'white',
  fontColor: ''
}

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.PETER_RIVER:
      return {
        ...state,
        ...action.payload.colors
      }
    
    case actionTypes.GREEN_SEA:
      return {
        ...state,
        ...action.payload.colors
      }
    
    case actionTypes.CARROT:
      return {
        ...state,
        ...action.payload.colors
      }

    case actionTypes.DEFAULT_COLOR:
      return {
        ...state,
        ...action.payload.colors
      }
    
    default:
      return state
  }
}
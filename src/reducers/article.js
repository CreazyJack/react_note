import actionTypes from "../actions/actionTypes"
const initState = {
  dataSource: [],
  columns: [],
  total: 0,
  isLoading: false,
  offset: 0,
  limited: 10,
  deleteArtTitle: '',
  isShowArtMod: false,
  deleteArtConfirmLoading: false,
  deleteArtID: '',
}


export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.START_GET_ARTICLE:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.RECEIVED_ARTICLES:
      return {
        ...state,
        dataSource: action.payload.list,
      }
      case actionTypes.FINISH_ARTICLE_POST:
      return {
        ...state,
        isLoading: false,
      }
    default:
      return state
  }
}
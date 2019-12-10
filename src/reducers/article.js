import actionTypes from "../actions/actionTypes"

const initState = {
  dataSource: [1],
  total: 1,
  isLoading: false,
  columns: []
}


export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.START_GET_ARTICLE:
      return {
        ...state,
        isLoading: true,
      }

    case actionTypes.RECEIVED_ARTICLES:
      const { dataSource, total, columns, columnKeys } = action.payload
      return { ...state, dataSource, total, columns, columnKeys }

    case actionTypes.FINISH_ARTICLE_POST:
      return {
        ...state,
        isLoading: false,
      }

    default:
      return state
  }
}
import actionTypes from "../actions/actionTypes"

const initState = {
  isLoading: false,
  list: [{
    id: 1,
    title: 'Lorem ipsum',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ',
    hasRead: false
  }, {
    id: 2,
    title: 'Lorem ipsum222',
    desc: '22222222Lorem ipsum dolor, sit amet consectetur adipisicing elit. ',
    hasRead: false
  }]
}

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.START_NOTIFICATION_POST:
      return {
        ...state,
        isLoading: true
      }
    case actionTypes.RECEIVED_NOTIFICATIONS:
      return {
        ...state,
        list: action.payload.list
      }
    case actionTypes.FINISH_NOTIFICATION_POST:
      return {
        ...state,
        isLoading: false
      }
    case actionTypes.MARK_NOTIFICATIONS_AS_READ_BY_ID:
      const newList = state.list.map(item => {
        if (item.id === action.payload.id) {
          item.hasRead = true
        }
        return item
      })
      return {
        ...state,
        list: newList
      }
    case actionTypes.MARK_ALL_AS_READ_BY_ID:
      return {
        ...state,
        list: state.list.map(item => {
          item.hasRead = true
          return item
        })
      }
    
    default:
      return state
  }
}
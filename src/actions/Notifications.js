import actionTypes from './actionTypes'

export const MarkNotificationsAsRead = id => {
  return dispatch => {
    // 这里是模拟的一个服务端的请求
    // dispatch 用于异步，使用 setTimeout 方法，并且应该发送是否成功，如果失败了，则没有任何动作
    // 如果是加载中，应该显示加载中
    setTimeout(() => {
      dispatch({
        type: actionTypes.MARK_NOTIFICATIONS_AS_READ_BY_ID,
        payload: {
          id
        }
      })
    }, 500);
  }
} 
export const MarkAllAsRead = () => {
  return dispatch => {
    // 这里是模拟的一个服务端的请求
    // dispatch 用于异步，使用 setTimeout 方法，并且应该发送是否成功，如果失败了，则没有任何动作
    // 如果是加载中，应该显示加载中
    setTimeout(() => {
      dispatch({
        type: actionTypes.MARK_ALL_AS_READ_BY_ID
      })
    }, 500);
  }
} 
import actionTypes from './actionTypes'
import { getNotifications } from '../components/requests'


const startPost = () => {
  return {
    type: actionTypes.START_NOTIFICATION_POST
  }
}
const finishPost = () => {
  return {
    type: actionTypes.FINISH_NOTIFICATION_POST
  }
}

export const MarkNotificationsAsRead = id => {
  return dispatch => {
    dispatch(startPost())
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
      dispatch(finishPost())
    }, 500)
  }
}

export const MarkAllAsRead = () => {
  return dispatch => {
    dispatch(startPost())
    setTimeout(() => {
      dispatch({
        type: actionTypes.MARK_ALL_AS_READ_BY_ID
      })
      dispatch(finishPost())
    }, 500)
  }
}

export const getNotificationList = () => {
  return dispatch => {
    dispatch(startPost())
    getNotifications()
      .then(resp => {
        dispatch({
          type: actionTypes.RECEIVED_NOTIFICATIONS,
          payload: {
            list: resp.data.list
          }
        })
        dispatch(finishPost())
      })
  }
} 
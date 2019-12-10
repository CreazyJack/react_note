import actionTypes from './actionTypes'
import { loginRequest } from '../components/requests'


const startLogin = () => {
  return {
    type: actionTypes.START_LOGIN
  }
}

const successLogin = (userMsg) => {
  return {
    type: actionTypes.SUCCESS_LOGIN,
    payload: {
      userMsg: userMsg
    }
  }
}

const failedLogin = () => {
  window.localStorage.removeItem('authToken')
  window.sessionStorage.removeItem('authToken')
  window.localStorage.removeItem('userMsg')
  window.sessionStorage.removeItem('userMsg')
  return {
    type: actionTypes.FAILED_LOGIN
  }
}

export const logOut = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(failedLogin())
    }, 100);
  }
}

export const login = (userInfo) => {
  return dispatch => {
    dispatch(startLogin())
    loginRequest(userInfo)
      .then(resp => {
        console.log(resp)
        console.log(userInfo)
        const userMsg = { ...resp.data.data }
        console.log(userMsg)
        if (resp.data.code === 200) {
          if (userInfo.remember === true) {
            window.localStorage.setItem('authToken', userMsg.authToken)
            window.localStorage.setItem('userMsg', JSON.stringify(userMsg))
          }
          else if (userInfo.remember === false) {
            window.sessionStorage.setItem('authToken', userMsg.authToken)
            window.sessionStorage.setItem('userMsg', JSON.stringify(userMsg))
          }
          dispatch(successLogin(userMsg))
        } else {
          dispatch(failedLogin())
        }
      })
  }
}
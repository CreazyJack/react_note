import actionTypes from './actionTypes'
import { loginRequest } from '../components/requests'


const startLogin = () => ({ type: actionTypes.START_LOGIN })
const successLogin = (userInfo) => ({ type: actionTypes.SUCCESS_LOGIN, payload: userInfo })
const failedLogin = () => ({ type: actionTypes.FAILED_LOGIN })

export const login = (userInfo) => {
  return dispatch => {
    dispatch(startLogin())
    loginRequest(userInfo)
      .then(resp => {
        console.log(resp)
        if (resp.data.code === 200) {
          dispatch(successLogin({
            ...resp.data.data,
            remember: userInfo.remember
          }))
        } else {
          dispatch(failedLogin())
        }
      })
  }
}
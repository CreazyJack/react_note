import actionTypes from './actionTypes'
import { loginRequest } from '../components/requests'


const startLogin = () => ({
  type: actionTypes.START_LOGIN
})
const failedLogin = () => ({
  type: actionTypes.FAILED_LOGIN
})

export const login = (userInfo) => {
  return dispatch => {
    dispatch(startLogin())
    loginRequest(userInfo)
      .then(resp => {
        console.log(resp)
      })

  }
}
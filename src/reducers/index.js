import { combineReducers } from 'redux'
import notifications from './notifications'
import user from './user'
import theme from './theme'
export default combineReducers({
  notifications,
  user,
  theme
})
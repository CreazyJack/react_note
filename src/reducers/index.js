import { combineReducers } from 'redux'
import notifications from './notifications'
import user from './user'
import article from './article'

export default combineReducers({
  notifications,
  user,
  article
})
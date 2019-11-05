import { Loading } from '../components'
import Loadable from 'react-loadable'

// 路由的懒加载
const Dashboard = Loadable(
  {
    loader: () => import('./Dashboard'),
    loading: Loading
  }
)
const LogIn = Loadable(
  {
    loader: () => import('./LogIn'),
    loading: Loading
  }
)
const NotFound = Loadable(
  {
    loader: () => import('./NotFound'),
    loading: Loading
  }
)
const settings = Loadable(
  {
    loader: () => import('./settings'),
    loading: Loading
  }
)
const Article = Loadable(
  {
    loader: () => import('./Article'),
    loading: Loading
  }
)
const Edit = Loadable(
  {
    loader: () => import('./Article/Edit'),
    loading: Loading
  }
)

export {
  Dashboard,
  LogIn,
  NotFound,
  settings,
  Article,
  Edit
}
import { Loading } from '../components'
import Loadable from 'react-loadable'

// 路由的懒加载
// loading 需要赋予一个组件
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
const Setting = Loadable(
  {
    loader: () => import('./Setting'),
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
const Notifications = Loadable(
  {
    loader: () => import('./Notifications'),
    loading: Loading
  }
)
const NoAuth = Loadable(
  {
    loader: () => import('./NoAuth'),
    loading: Loading
  }
)

export {
  Dashboard,
  LogIn,
  NotFound,
  Setting,
  Article,
  Edit,
  Notifications,
  NoAuth
}
import { Dashboard, LogIn, NotFound, settings, Article, Edit } from '../views'

export const mainRoutes = [
  {
    pathname: '/LogIn',
    component: LogIn
  },
  {
    pathname: '/404',
    component: NotFound
  },
]

export const adiminRoutes = [
  {
    pathname: '/admin/Dashboard',
    component: Dashboard,
    title: '仪表盘',
    isNav: true,
  },
  
  {
    pathname: '/admin/Article',
    component: Article,
    title: '文章管理',
    isNav: true,
    exact: true
  },
  {
    pathname: '/admin/Edit',
    component: Edit
  },
  {
    pathname: '/admin/settings',
    component: settings,
    title: '设置',
    isNav: true,
  },
]
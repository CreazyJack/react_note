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

export const adminRoutes = [
  {
    pathname: '/admin/Dashboard',
    component: Dashboard,
    title: '仪表盘',
    isNav: true,
    icon: 'dashboard'
  },
  // 当出现包含关系的路径时，长路径放在段路径前面
  {
    pathname: '/admin/Article/Edit',
    component: Edit,
  },
  {
    pathname: '/admin/Article',
    component: Article,
    title: '文章管理',
    isNav: true,
    exact: true,
    icon: 'unordered-list'
  },
 
  {
    pathname: '/admin/settings',
    component: settings,
    title: '设置',
    isNav: true,
    icon: 'setting'
  },
]
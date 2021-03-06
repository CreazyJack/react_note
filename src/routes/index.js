import { Dashboard, LogIn, NotFound, Setting, Article, Edit, Notifications, NoAuth } from '../views'

export const mainRoutes = [
  {
    pathname: '/LogIn',
    component: LogIn,
    role: ['001', '002', '003']
  },
  {
    pathname: '/404',
    component: NotFound,
    role: ['001', '002', '003']
  },
]

export const adminRoutes = [
  {
    pathname: '/admin/Dashboard',
    component: Dashboard,
    title: '首页',
    isNav: true,
    icon: 'dashboard',
    role: ['001', '002', '003']
  },
  // 当出现包含关系的路径时，长路径放在短路径前面,或者在短路径中添加 exact
  {
    pathname: '/admin/Article/Edit',
    component: Edit,
    role: ['001', '002', '003']
  },
  {
    pathname: '/admin/Notifications',
    component: Notifications,
    role: ['001', '002', '003']
  },
  {
    pathname: '/admin/NoAuth',
    component: NoAuth,
    role: ['001', '002', '003']
  },
  {
    pathname: '/admin/Article',
    component: Article,
    title: '文章管理',
    isNav: true,
    exact: true,
    icon: 'unordered-list',
    role: ['001', '002', '003']
  },
  {
    pathname: '/admin/setting',
    component: Setting,
    title: '设置',
    isNav: true,
    icon: 'setting',
    role: ['001', '002', '003']
  },
]
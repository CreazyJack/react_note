import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'
import './index.less'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { mainRoutes } from './routes'
import zhCN from 'antd/es/locale/zh_CN'
import { ConfigProvider } from 'antd'



ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <Router>
        <Switch>
          {/* TODO: 权限，需要登陆才能访问 */}
          <Route path='/admin' render={
            (routeProps) => {
              return <App {...routeProps}></App>
            }
          }></Route>
          {
            mainRoutes.map(route => <Route key={route.pathname} path={route.pathname} component={route.component}></Route>)
          }
          {/* 使用 Redirect 组件来确定首页，并且设置在地址错误时返回的页面 */}
          <Redirect to='/admin' from='/' exact ></Redirect>
          <Redirect to='/404'></Redirect>
        </Switch>
      </Router>
    </ConfigProvider>
  </Provider>
  ,
  document.getElementById('root')
)
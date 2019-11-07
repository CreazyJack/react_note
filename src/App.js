import React, { Component } from 'react'
// import { Button, ConfigProvider, Pagination } from 'antd'
// import zhCN from 'antd/es/locale/zh_CN';
import { adminRoutes } from './routes'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Frame } from './components'

const menus = adminRoutes.filter(route => route.isNav === true)

class App extends Component {
  render() {
    return (
      // 在这里把属性传递下去
      <Frame menus={menus}>
        <p>这里是公共的部分</p>
        <Switch>
          {adminRoutes.map(route => {
            return <Route
              key={route.pathname}
              path={route.pathname}
              render={(routeProps) => {
                return <route.component {...routeProps}></route.component>
              }}></Route>
          })}
          <Redirect to={adminRoutes[0].pathname} from='/admin' exact ></Redirect>
          <Redirect to='/404'></Redirect>
        </Switch>
      </Frame >
    )
  }
}

export default App
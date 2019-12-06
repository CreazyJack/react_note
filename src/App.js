import React, { Component } from 'react'
import { adminRoutes } from './routes'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Frame } from './components'
import { connect } from 'react-redux'


const menus = adminRoutes.filter(route => route.isNav === true)
// 使用箭头函数简写时，如果返回的是一个对象，应该用（）括起来👇
const mapState = state => {
  return {
    isLoading: state.user.isLoading,
    isLogin: state.user.isLogin,
    role: state.user.role
  }
}



@connect(mapState)
class App extends Component {
  render() {
    console.log(this.props.isLogin)
    return (
      this.props.isLogin
        ?
        // 在这里把属性传递下去
        <Frame menus={menus}>
          <p>这里是公共的部分</p>
          <Switch>
            {adminRoutes.map(route => {
              return <Route
                key={route.pathname}
                path={route.pathname}
                render={(routeProps) => {
                  console.log(route)
                  const hasPermission = route.role.includes(this.props.role)
                  return hasPermission ? <route.component {...routeProps} /> : <Redirect to='/admin/NoAuth' />
                }}
              />
            })}
            <Redirect to={adminRoutes[0].pathname} from='/admin' exact />>
            <Redirect to='/404' />
          </Switch>
        </Frame >
        :
        <Redirect to='/LogIn' />
    )
  }
}

export default App
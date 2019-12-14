import React, { Component } from 'react'
import { Layout, Menu, Icon, Badge, Dropdown, Avatar, Button } from 'antd'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Logo from './Logo.png'
import "./Frame.less"
import { getNotificationList } from '../../actions/Notifications'
import { logOut } from '../../actions/user'
import { PeterRiver, GreenSea, Carrot, Default } from '../../actions/theme'


const { Header, Content, Sider } = Layout
const mapState = state => {
  console.log('主框架的state', state)
  // 通过另一种方式判断👇
  // const allISRead = state.notifications.list.every(item => item.hasRead === true)
  return {
    notificationsCount: state.notifications.list.filter(item => item.hasRead === false).length,
    isLogin: state.user.isLogin,
    avatar: state.user.avatar,
    displayName: state.user.displayName,
    theme: state.theme
  }
}

// 使用 antd 中的 layout 栅格功能
@connect(mapState, { getNotificationList, logOut, PeterRiver, GreenSea, Carrot, Default })
@withRouter
class Frame extends Component {
  componentDidMount() {
    this.props.getNotificationList()
    // this.props.PeterRiver()
  }
  // 为 onClick 功能创建函数，通过引入 withRouter 来使用 <Route></Route> 组件中的属性
  onMenuClick = ({ key }) => { this.props.history.push(key) }
  onDropDownMenuClick = ({ key }) => {
    if (key === '/logIn') {
      this.props.logOut()
    } else {
      this.props.history.push(key)
    }

    this.props.history.push(key)
  }
  dropDownMenu = () => (
    <Menu onClick={this.onDropDownMenuClick}>
      <Menu.Item key='/admin/notifications'>
        <Badge dot={this.props.notificationsCount === 0 ? false : true}>通知中心</Badge>
      </Menu.Item>
      <Menu.Item key='/admin/setting'>
        个人设置
      </Menu.Item>
      <Menu.Item key='/admin' className='menuToggle'>
        首页
      </Menu.Item>
      <Menu.Item key='/admin/Article' className='menuToggle'>
        文章管理
      </Menu.Item>
      <Menu.Item key='/logIn'>
        退出登录
      </Menu.Item>
    </Menu>
  )
  dropDownMenuToggle = () => (
    <Menu onClick={this.onDropDownMenuClick}>
      <Menu.Item key='/admin'>
        首页
      </Menu.Item>
      <Menu.Item key='/admin/Article'>
        个人设置
      </Menu.Item>
      <Menu.Item key='/logIn'>
        退出登录
      </Menu.Item>
    </Menu>
  )

  render() {
    const selectKeysArr = this.props.location.pathname.split('/')
    selectKeysArr.length = 3
    console.log('ok', this.props)
    return (
      // 将无用的菜单组件删除，只保留一级菜单
      <Layout style={{ height: '100%' }} className='mainBox'>
        <Header
          className="header zgm-header"
          style={{
            background: this.props.theme.header
          }}>
          <div className="zgm-logo">
            <img src={Logo} alt="" />
            {/* 绑定 onClick 事件时，最好使用箭头函数，这样就不用再 bind(this)，但是在绑定箭头函数时，要用箭头函数来返回要绑定的箭头函数，直接调用的话，会在页面渲染时就执行事件👇 */}
          </div>
          <div className='changeTheme'>
            <Button
              onClick={() => this.props.PeterRiver()}
              style={{ color: 'rgba(52, 152, 219,1', borderColor: 'rgba(52, 152, 219,1' }}>
              彼得河
            </Button>
            <Button
              onClick={() => this.props.Carrot()}
              style={{ color: 'rgb(230, 126, 34)', borderColor: 'rgb(230, 126, 34)' }}>
              胡萝卜
            </Button>
            <Button
              onClick={() => this.props.GreenSea()}
              style={{ color: 'rgb(22, 160, 133)', borderColor: 'rgb(22, 160, 133)' }}>
              海藻
            </Button>
            <Button
              onClick={() => this.props.Default()}
              style={{ borderColor: 'black' }}>
              默认
            </Button>
          </div>
          <div>
            <Dropdown
              className='dropdown'
              overlay={this.dropDownMenu()}
              trigger={['click']}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center'
                }}>
                <Avatar src={this.props.avatar} />
                <span
                  style={{ color: this.props.theme.fontColor }}>欢迎你，{this.props.displayName}！</span>
                <Badge count={this.props.notificationsCount} offset={[-10, -10]}>
                  <Icon type='down'></Icon>
                </Badge>
              </div>
            </Dropdown>
          </div>
        </Header>
        <Layout>
          <Sider className='sideBar'
            width={200}
            style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              // 被选中标签高亮显示
              selectedKeys={[selectKeysArr.join('/')]}
              onClick={this.onMenuClick}
              style={{
                height: '100%',
                borderRight: 0,
                backgroundColor: this.props.theme.sidebar
              }}
            >
              {
                this.props.menus.map(item => <Menu.Item key={item.pathname}><Icon type={item.icon} />{item.title}</Menu.Item>)
              }
            </Menu>
          </Sider>
          <Layout style={{ background: this.props.theme.content, padding: '' }}>
            <Content
              style={{
                display: 'block',
                padding: '24px 24px 0 24px',
                margin: 0,
              }}
            >
              {this.props.children}

            </Content>
          </Layout>
        </Layout>
      </Layout >
    )
  }
}

export default Frame 

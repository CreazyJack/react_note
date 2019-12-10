import React, { Component } from 'react'
import { Layout, Menu, Icon, Badge, Dropdown, Avatar } from 'antd'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Logo from './Logo.png'
import "./Frame.less"
import { getNotificationList } from '../../actions/Notifications'
import { ArticleRequest } from '../../actions/article'
import { logOut } from '../../actions/user'


const { Header, Content, Sider } = Layout
const mapState = state => {
  // 通过另一种方式判断👇
  // const allISRead = state.notifications.list.every(item => item.hasRead === true)
  const {isLogin,avatar,displayName} = state.user
  return {
    notificationsCount: state.notifications.list.filter(item => item.hasRead === false).length,
    isLogin,
    avatar,
    displayName
  }
}

// 使用 antd 中的 layout 栅格功能
@connect(mapState, { getNotificationList, logOut, ArticleRequest })
@withRouter
class Frame extends Component {
  componentDidMount() {
    this.props.getNotificationList()
    this.props.ArticleRequest()
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
      <Menu.Item key='/admin/settings'>
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

  render() {
    const selectKeysArr = this.props.location.pathname.split('/')
    selectKeysArr.length = 3
    return (
      // 将无用的菜单组件删除，只保留一级菜单
      <Layout style={{ height: '100%' }}>
        <Header className="header zgm-header">
          <div className="zgm-logo">
            <img src={Logo} alt="" />
          </div>
          <div>
            <Dropdown className='dropdown' overlay={this.dropDownMenu()} trigger={['click']}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Avatar src={this.props.avatar} />
                <span>欢迎你，{this.props.displayName}！</span>
                <Badge count={this.props.notificationsCount} offset={[-10, -10]}>
                  <Icon type='down'></Icon>
                </Badge>
              </div>
            </Dropdown>
          </div>
        </Header>
        <Layout>
          <Sider className='sideBar' width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              // 被选中标签高亮显示
              selectedKeys={[selectKeysArr.join('/')]}
              onClick={this.onMenuClick}
              style={{ height: '100%', borderRight: 0 }}
            >
              {
                this.props.menus.map(item => <Menu.Item key={item.pathname}><Icon type={item.icon} />{item.title}</Menu.Item>)
              }
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 280,
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

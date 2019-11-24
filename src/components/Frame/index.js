import React, { Component } from 'react'
import { Layout, Menu, Icon, notification, Badge, Dropdown, Avatar } from 'antd'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Logo from './Logo.png'
import "./Frame.less"


const { Header, Content, Sider } = Layout
const mapState = state => {
  console.log(state)
  return {
    notificationsCount: state.notifications.list.filter(item => item.hasRead === false).length
  }
} 

// 使用 antd 中的 layout 栅格功能
@connect(mapState)
@withRouter
class Frame extends Component {
  // 为 onClick 功能创建函数，通过引入 withRouter 来使用 <Route></Route> 组件中的属性
  onMenuClick = ({ key }) => { this.props.history.push(key) }
  onDropDownMenuClick = ({ key }) => { this.props.history.push(key) }
  menu = (
    <Menu>
      <Menu.Item key='/admin/notifications'>
        <Badge dot>通知中心</Badge>
      </Menu.Item>
      <Menu.Item key='/admin/settings'>
        个人设置
      </Menu.Item>
      <Menu.Item key='/logIn'>
        推出登录
      </Menu.Item>
    </Menu>
  )
    
  render() {
    const selectKeysArr = this.props.location.pathname.split('/')
    selectKeysArr.length = 3
    console.log(this.props)
    return (
      // 将无用的菜单组件删除，只保留一级菜单
      <Layout style={{ height: '100%' }}>
        <Header className="header zgm-header">
          <div className="zgm-logo">
            <img src={Logo} alt="" />
          </div>
          <div>
          <Dropdown overlay={this.menu}>
            <div>
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              <span>欢迎你，周广盟！</span>
              <Badge count={this.props.notificationsCount} offset={[-10,-10]}>
                <Icon type='down'></Icon>
              </Badge>
            </div>
            
          </Dropdown>
          </div>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
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

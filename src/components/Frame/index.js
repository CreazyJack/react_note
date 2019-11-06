import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import { withRouter } from 'react-router-dom'
import Logo from './Logo.png'
import "./Frame.less"

const { Header, Content, Sider } = Layout

class Frame extends Component {
  onMenuClick = ({ key }) => {
    this.props.history.push(key)
  }
  render() {
    return (
      // 将无用的菜单组件删除，只保留一级菜单
      <Layout style={{height: '100%'}}>
        <Header className="header zgm-header">
          <div className="zgm-logo">
            <img src={Logo} alt="" />
          </div>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              selectedKeys={[this.props.location.pathname]}
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

export default withRouter(Frame)
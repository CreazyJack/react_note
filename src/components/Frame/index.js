import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import { withRouter } from 'react-router-dom'
import Logo from './Logo.png'
import "./Frame.less"

const { Header, Content, Sider } = Layout

// 使用 antd 中的 layout 栅格功能
class Frame extends Component {
  // 为 onClick 功能创建函数，通过引入 withRouter 来使用 <Route></Route> 组件中的属性
  onMenuClick = ({ key }) => {
    this.props.history.push(key)
  }


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

export default withRouter(Frame)
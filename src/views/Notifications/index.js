import React, { Component } from 'react'
import { Card, Button, List, Badge, Avatar } from 'antd'
import { connect } from 'react-redux'
import { MarkNotificationsAsRead, MarkAllAsRead } from '../../actions/Notifications'
const mapState = state => {
  console.log(state)
  const list = state.notifications
  return list
}

@connect(mapState, { MarkNotificationsAsRead, MarkAllAsRead })
class Notifications extends Component {
  render() {
    console.log(this.props)
    return (
      <Card
        title="通知区域"
        bordered={false}
        style={{}}
        extra={<Button onClick={this.props.MarkAllAsRead} disabled={this.props.list.every(item => item.hasRead === true)}>全部标记为已读</Button>}
      >
        <List
          itemLayout="horizontal"
          dataSource={this.props.list}
          renderItem={item => (
            <List.Item extra={item.hasRead ? null : <Button onClick={this.props.MarkNotificationsAsRead.bind(this, item.id)}>标记为已读</Button>}>
              <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={<Badge dot={!item.hasRead}><a href="https://ant.design">{item.title}</a></Badge>}
                description={item.desc}
              />
            </List.Item>
          )}
        />
      </Card>
    )
  }
}

export default Notifications
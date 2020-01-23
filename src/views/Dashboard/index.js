import React, { Component } from 'react'
import { Card, Button, List, Badge, Menu, Avatar, Row, Col } from 'antd'
import './dashboard.less'
export default class Dashboard extends Component {
  render() {
    return (
      <>
        <Card
          title="文章列表"
          bordered={false}
          style={{}}
        >
          <Row>
            <Col
              xs={{ span: 6, offset: 1 }}
              lg={{ span: 6, offset: 1 }}
            >
              <div style={{
                backgroundColor: '#74b9ff',
                borderRadius: 10,
                height: 100,
                paddingLeft: 10,

              }}>
                <p className='colText'>功能</p>
              </div>
            </Col>
            <Col
              xs={{ span: 6, offset: 1 }}
              lg={{ span: 6, offset: 1 }}
              style={{
                backgroundColor: '#55efc4',
                borderRadius: 10,
                height: 100,
                paddingLeft: 10,
              }}>
              <div>
                <p className='colText'>功能</p>
              </div>
            </Col>
            <Col
              xs={{ span: 6, offset: 1 }}
              lg={{ span: 6, offset: 1 }}
              style={{
                backgroundColor: '#ffeaa7',
                borderRadius: 10,
                height: 100,
                paddingLeft: 10,
              }}>
              <div>
                <p className='colText'>功能</p>
              </div>
            </Col>
          </Row>
        </Card>
      </>
    )
  }
}

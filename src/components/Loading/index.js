import React, { Component } from 'react'
import { Spin } from 'antd'
export default class Loading extends Component {
  render() {
    return (
      <Spin spinning={true}>
        <div style={{ width: '100%', height: '300px' }}>

        </div>
      </Spin>
    )
  }
}

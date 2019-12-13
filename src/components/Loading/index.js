import React, { Component } from 'react'
import { Spin } from 'antd'
export default class Loading extends Component {
  render() {
    console.log(this.props)
    return (
      <Spin spinning={true} size={"large"}>
        <div style={{width: '100%', height: '300px'}}>
        </div>
      </Spin>
    )
  }
}

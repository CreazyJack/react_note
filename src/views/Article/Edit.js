import React, { Component } from 'react'
import { Card, Button,  } from 'antd'

export default class Edit extends Component {
  render() {
    return (
      <Card
          title="编辑文章"
          bordered={false}
          style={{}}
          extra={ <Button>保存</Button> }
          actions={[<Button>取消</Button>,<Button>保存</Button>]}
        >
          表单区域
        </Card>
    )
  }
}

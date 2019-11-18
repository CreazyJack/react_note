import React, { Component } from 'react'
import { Card, Button, Form, Icon, Input, DatePicker } from 'antd'


@Form.create()
class Edit extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: { span: 6, offset: 0},
      wrapperCol: { span: 8, offset: 0 },
    }
    return (
      <Card
        title="编辑文章"
        bordered={false}
        style={{}}
        extra={<Button>取消</Button>}
        actions={[<Button>取消</Button>, <Button>保存</Button>]}
      >
        <Form layout="horizontal" onSubmit={this.handleSubmit} >
          <Form.Item label='标题' {...formItemLayout}>
            {getFieldDecorator('title', {
              rules: [{ required: true, message: '标题是必填的！' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="标题"
              />,
            )}

          </Form.Item>
          <Form.Item label='用户名' {...formItemLayout}>
            {getFieldDecorator('author', {
              rules: [{ required: true, message: '用户名是必填的！' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="用户名"
              />,
            )}
          </Form.Item>
          <Form.Item label='阅读量' {...formItemLayout}>
            {getFieldDecorator('amount', {
              rules: [{ required: true, message: '阅读量是必填的！' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="阅读量"
              />,
            )}
          </Form.Item>
          <Form.Item label='创建时间' {...formItemLayout}>
            {getFieldDecorator('createAt', {
              rules: [{ required: true, message: '请输入创建时间名!' }],
            })(
              <DatePicker showTime placeholder="选择时间" />
              ,
            )}

          </Form.Item>
          <Form.Item wrapperCol={{offset: 6}}>
            <Button type="primary" htmlType="submit" >
              保存修改
            </Button>
          </Form.Item>
        </Form>
      </Card>
    )
  }
}
export default Edit
import React, { Component } from 'react'
import { Card, Button, Form, Icon, Input } from 'antd'
@Form.create()
class Edit extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form
    return (
      <Card
        title="编辑文章"
        bordered={false}
        style={{}}
        extra={<Button>取消</Button>}
        actions={[<Button>取消</Button>, <Button>保存</Button>]}
      >
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [
                { required: true, message: 'Please input your username!' },
                { min: 4, message: '不少于4位' },
                { max: 10, message: '不大于10位' }
              ],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" >
              Log in
          </Button>
          </Form.Item>
        </Form>
      </Card>
    )
  }
}
export default Edit
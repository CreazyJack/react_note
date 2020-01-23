import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox, Card } from 'antd'
import './login.less'
import { connect } from 'react-redux'
import { login } from '../../actions/user'
import { Redirect } from 'react-router-dom'

const wrapperCol = {
  xs: {
    span: 24,
  },
  sm: {
    span: 24,
  },
  md: {
    span: 20,
    offset: 2
  },
}
const cardHeadStyle = {
  fontWeight: 'bold',
}

const mapState = state => {
  console.log(state)
  const { isLoading, isLogin } = state.user
  return { isLoading, isLogin }
}

@connect(mapState, { login })
@Form.create({ name: 'normal_login' })
class LoginForm extends Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        this.props.login(values)
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      this.props.isLogin
        ?
        <Redirect to='admin'></Redirect>
        :
        <div className='logPage'>
          <div className='bgBlur'></div>
          <Card title='用户登录' className='loginForm' headStyle={cardHeadStyle}>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item wrapperCol={wrapperCol}>
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: '请输入用户名!' }],
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="用户名"
                    // 在使用“加载中”的状态时，可以使用Spin组件，也可以使用组件的相应属性
                    disabled={this.props.isLoading}
                  />,
                )}
              </Form.Item>
              <Form.Item wrapperCol={wrapperCol}>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: '请输入密码!' }],
                })(
                  <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="密码"
                    disabled={this.props.isLoading}
                  />,
                )}
              </Form.Item>
              <Form.Item wrapperCol={wrapperCol}>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(<Checkbox disabled={this.props.isLoading}>记住我</Checkbox>)}
                <Button type="primary" htmlType="submit" className="login-form-button" loading={this.props.isLoading}>
                  登录
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
    )
  }
}
// const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm)
export default LoginForm


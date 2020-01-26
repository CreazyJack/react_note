import React, { Component } from 'react'
import {
  Card,
  Upload,
  Icon,
  message,
  Form,
  Input,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  Spin
} from 'antd'
import './setting.less'
import { connect } from 'react-redux'
import { changeAvatar } from '../../actions/user'


const { Option } = Select

function getBase64(img, callback) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
  if (!isJpgOrPng) {
    message.error('你只能上传jpg或png格式的文件!')
  }
  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isLt2M) {
    message.error('图片必须小于2MB!')
  }
  return isJpgOrPng && isLt2M
}

const mapState = ({ user }) => ({ user })

@connect(mapState, { changeAvatar })
@Form.create()
class Setting extends Component {

  state = {
    loading: false,
    confirmDirty: false,
    autoCompleteResult: [],
    isLoading: false
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      /* 
        如果有错误，网页还继续执行，可以加一个 if 语句
        if (err) {
          return
        }
      */
      if (!err) {
        console.log('Received values of form: ', values)
        this.btn()
      }
    })
  }
  // 图片上传
  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true })
      return
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => {
        this.setState({
          loading: false,
        })
        this.props.changeAvatar(imageUrl)
        this.props.form.setFieldsValue({
          avatar: imageUrl
        })
      }

        // this.props.changeAvatar(imageUrl)
      )
    }
  }
  handleConfirmBlur = e => {
    const { value } = e.target
    this.setState({ confirmDirty: this.state.confirmDirty || !!value })
  }

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props
    if (value && value !== form.getFieldValue('password')) {
      callback('两次输入应一致!')
    } else {
      callback()
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true })
    }
    callback()
  }

  handleWebsiteChange = value => {
    let autoCompleteResult
    if (!value) {
      autoCompleteResult = []
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`)
    }
    this.setState({ autoCompleteResult })
  }
  // 保存按钮
  btn = () => {
    message.loading('正在保存', 0.8)
    this.setState({
      isLoading: true
    }, () => setTimeout(() => {
      message.success('保存成功', 1.5)
      this.setState({
        isLoading: false
      })
    }, 1000))
  }
  render() {
    const { getFieldDecorator } = this.props.form
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">点击上传</div>
      </div>
    )
    const imageUrl = this.props.user.avatar
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 24 },
        md: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 24 },
        md: { span: 12 },
      },
    }
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>,
    )

    return (
      <Card title='个人设置'>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item label="修改头像" className='avatarChange'>
            {getFieldDecorator('avatar', {
              rules: [
                {
                  required: true,
                  message: '请传入图片!',
                },
              ],
            })(<Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              beforeUpload={beforeUpload}
              onChange={this.handleChange}
            >
              <Spin spinning={this.state.loading}>
                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%', height: '100%' }} /> : uploadButton}
              </Spin>
            </Upload>)}
          </Form.Item>
          <Form.Item label="邮箱">
            {getFieldDecorator('email', {
              rules: [
                {
                  type: 'email',
                  message: '邮箱',
                },
                {
                  required: true,
                  message: '请输入邮箱!',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="密码" hasFeedback>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: '输入密码!',
                },
                {
                  validator: this.validateToNextPassword,
                },
              ],
            })(<Input.Password />)}
          </Form.Item>
          <Form.Item label="再次输入密码" hasFeedback>
            {getFieldDecorator('confirm', {
              rules: [
                {
                  required: true,
                  message: '确认密码!',
                },
                {
                  validator: this.compareToFirstPassword,
                },
              ],
            })(<Input.Password onBlur={this.handleConfirmBlur} />)}
          </Form.Item>
          <Form.Item label="手机">
            {getFieldDecorator('phone', {
              rules: [{ required: true, message: '请输入手机号码!' }],
            })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
          </Form.Item>
          <Form.Item label="验证码" extra="为了辨别是否人为操作">
            <Row gutter={8}>
              <Col span={12}>
                {getFieldDecorator('captcha', {
                  rules: [{ required: true, message: '请输入验证码' }],
                })(<Input />)}
              </Col>
              <Col span={12}>
                <Button>获取验证码</Button>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item wrapperCol={{ span: 6, offset: 10 }} style={{ marginBottom: 0 }}>
            {getFieldDecorator('agreement', {
              rules: [{ required: true, message: '请确认： 已阅读！' }],
              valuePropName: 'checked',
            })(
              <Checkbox>
                已阅读 <a href="*">协议</a>
              </Checkbox>,
            )}
          </Form.Item>
          <Form.Item wrapperCol={{ span: 4, offset: 10 }}>
            <Button type="primary" htmlType="submit">
              保存
          </Button>
          </Form.Item>
        </Form>
      </Card>
    )
  }
}

export default Setting
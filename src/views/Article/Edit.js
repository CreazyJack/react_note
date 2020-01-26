import React, { Component, createRef } from 'react'
import { Card, Button, Form, Icon, Input, DatePicker, Spin, message } from 'antd'
import E from 'wangeditor'
import './edit.less'
import moment from 'moment'
@Form.create()
class Edit extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: false
    }
    this.editor = createRef()
  }
  // 提交
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if(err) {
        return
      }
      if (!err) {
        console.log('Received values of form: ', values)
        this.btn()
      }
    })
  }
  // 编辑器
  initEditor = () => {
    var editor = new E(this.editor.current)
    // 或者 var editor = new E( document.getElementById('editor') )
    editor.customConfig.onchange = (html) => {
      // html 即变化之后的内容
      console.log(html)
      this.props.form.setFieldsValue({
        content: html
      })
    }
    editor.create()
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


  componentDidMount() {
    this.initEditor()
  }
  render() {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: { span: 6, offset: 0 },
      wrapperCol: { span: 8, offset: 0 },
    }
    const { record } = this.props.location.state
    return (
      <Spin spinning={this.state.isLoading}>
        <Card
          title="编辑文章"
          bordered={false}
          style={{}}
          extra={<Button onClick={() => this.props.history.goBack()}>取消</Button>}
        >
          <Form layout="horizontal" onSubmit={this.handleSubmit} >
            <Form.Item label='标题' {...formItemLayout}>
              {getFieldDecorator('title', {
                rules: [{ required: true, message: '标题是必填的！' }],
                initialValue: record.title
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
                initialValue: record.author
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
                initialValue: record.amount
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="阅读量"
                />,
              )}
            </Form.Item>
            <Form.Item label='创建时间' {...formItemLayout}>
              {getFieldDecorator('createAt', {
                rules: [{ required: true, message: '创建时间是必填的!' }],
                initialValue: moment(record.createAt)
              })(
                <DatePicker showTime placeholder="选择时间" />
              ,
              )}

            </Form.Item>
            <Form.Item label='内容' wrapperCol={{ span: 12, offset: 0 }} labelCol={{ span: 4, offset: 2 }} >
              {getFieldDecorator('content', {
                rules: [{ required: true, message: '请输入文章内容!' }],
              })(
                <div ref={this.editor} className='editDiv' />
              ,
              )}
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 6 }}>
              <Button type="primary" htmlType="submit">
                保存修改
            </Button>
            </Form.Item>
          </Form>
        </Card>
      </Spin>
    )
  }
}
export default Edit
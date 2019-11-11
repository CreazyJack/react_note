import React, { Component } from 'react'
import { Card, Button, Table, Tag } from 'antd'
import { getArticles } from '../../components/requests'
import moment from 'moment'


const ButtonGroup = Button.Group
// 在这里，中文类名
const displayTitle = {
  amount: '阅读量',
  author: "作者",
  createAt: '创建时间',
  id: "ID",
  title: '文章名',
}

export default class ArticleList extends Component {
  constructor() {
    super()
    this.state = {
      dataSource: [],
      columns: [],
      total: 0,
      isLoading: false
    }
  }
  // 将几个相关的方法独立出来写，最后在一个方法中汇总
  createClumns = (columnKeys) => {
    const columns = columnKeys.map(item => {
      if (item === 'amount') {
        return {
          title: displayTitle[item],
          render: (text, record) => {
            const { amount } = record
            return <Tag color={amount > 200 ? 'red' : 'green'}>{amount}</Tag>
          },
          key: item
        }
      } else if (item === 'createAt') {
        return {
          title: displayTitle[item],
          render: (text, record) => {
            const { createAt } = record
            return <Tag color={record.amount > 200 ? 'red' : 'green'}>{moment(createAt).format('YYYY年MM月DD日，HH:mm:ss')}</Tag>
          }
        }
      } else {
        return {
          title: displayTitle[item],
          dataIndex: item,
          key: item
        }
      }
    })
    columns.push({
      title: '操作',
      render: (text, record) => {
        return (
          <ButtonGroup size='small'>
            <Button size='small' type='primary'>编辑</Button>
            <Button size='small' type='danger'>删除</Button>
          </ButtonGroup>
        )
      },
      key: 'action'
    })
    return columns
  }

  getData = () => {
    this.setState({
      isLoading: true
    })
    getArticles()
      .then(
        resp => {
          console.log(resp)
          const columnKeys = Object.keys(resp.data.list[0])
          const columns = this.createClumns(columnKeys)
          this.setState({
            total: resp.data.total,
            dataSource: resp.data.list,
            columns: columns
          })
        }
      )
      .catch(err => {
        // 处理错误，虽然有全局错误处理
      })
      .finally(() => {
        this.setState({
          isLoading: false
        })
      })
  }

  componentDidMount() {
    this.getData()
  }
  render() {
    return (
      <div>
        <Card
          title="文章列表"
          bordered={false}
          style={{}}
          extra={<Button>导出</Button>}
        >
          <Table
            // 给每一项一个key
            rowKey={record => record.id}
            dataSource={this.state.dataSource}
            columns={this.state.columns}
            loading={this.state.isLoading}
            pagination={{
              total: this.state.total,
              hideOnSinglePage: true
            }}
          />
        </Card>

      </div>
    )
  }
}

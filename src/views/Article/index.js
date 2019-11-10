import React, { Component } from 'react'
import { Card, Button, Table, Tag } from 'antd'
import { getArticles } from '../../components/requests'
import moment from 'moment'

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
      total: 0
    }
  }
// 将几个相关的方法独立出来写，最后在一个方法中汇总
  createClumns = (columnKeys) => {
    return columnKeys.map(item => {
      console.log(item)
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
            const {createAt} = record
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
  }

  getData = () => {
    getArticles()
      .then(
        resp => {
          console.log(resp)
          console.log(Object.keys(resp.data.list[0]))
          const columnKeys = Object.keys(resp.data.list[0])
          const columns = this.createClumns(columnKeys)
          console.log(columns)
          this.setState({
            total: resp.data.total,
            dataSource: resp.data.list,
            columns: columns
          })
        }
      )
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

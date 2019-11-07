import React, { Component } from 'react'
import { Card, Button, Table } from 'antd'
const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];

const columns = [
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];
export default class ArticleList extends Component {

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
            dataSource={dataSource}
            columns={columns} 
          />
        </Card>

      </div>
    )
  }
}

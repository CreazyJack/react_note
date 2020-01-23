import React, { Component, createRef } from 'react'
import { Card, Row, Col } from 'antd'
import echarts from 'echarts'
import { connect } from 'react-redux'
import './dashboard.less'
// import './echarts.less'
import { getBrowseAmount } from '../../components/requests'
// import ReactEcharts from 'echarts-for-react'



const mapState = state => ({ theme: state.theme })

@connect(mapState)
class Dashboard extends Component {
  constructor() {
    super()
    this.state = {}
    this.articleAmount = createRef()
  }
  render() {
    let onEvents = {
      'click': this.onChartClick.bind(this),
      'legendselectchanged': this.onChartLegendselectchanged.bind(this)
    }
    return (
      <>
        <Card
          title="文章列表"
          bordered={false}
        >
          <Row>
            <Col
              xs={{ span: 6, offset: 1 }}
              lg={{ span: 6, offset: 1 }}
              style={{
                backgroundColor: '#74b9ff',
                borderRadius: 10,
                height: 100,
                paddingLeft: 10,
              }}
            >
              <div style={{ height: 100 }}>
                <p className='colText'>功能</p>
              </div>
            </Col>
            <Col
              xs={{ span: 6, offset: 1 }}
              lg={{ span: 6, offset: 1 }}
              style={{
                backgroundColor: '#55efc4',
                borderRadius: 10,
                height: 100,
                paddingLeft: 10,
              }}>
              <div>
                <p className='colText'>功能</p>
              </div>
            </Col>
            <Col
              xs={{ span: 6, offset: 1 }}
              lg={{ span: 6, offset: 1 }}
              style={{
                backgroundColor: '#ffeaa7',
                borderRadius: 10,
                height: 100,
                paddingLeft: 10,
              }}>
              <div>
                <p className='colText'>功能</p>
              </div>
            </Col>
          </Row>
        </Card>
        <Card
          title="最近浏览量"
          bordered={false}
        >
          <div
            id='myChart'
            ref={this.articleAmount}
            style={{ height: '400px' }}
          />
          {/* <div className="echartsRadar">
            <ReactEcharts
              option={this.getOption()}
              notMerge={true}
              lazyUpdate={true}
              onEvents={onEvents}
              style={{ width: '100%', height: '100%' }}
            />
          </div> */}
        </Card>
      </>
    )
  }


  // getOption = () => {
  //   return {
  //     title: {
  //       text: ''
  //     },
  //     //点击提示标签
  //     // tooltip: {},
  //     legend: {
  //       //图例文字展示
  //       data: [
  //         { name: '今日更新投诉量' },
  //         { name: '昨日更新投诉量' }],
  //       //图例显示在底部
  //       bottom: 0,
  //       //图例背景颜色
  //       backgroundColor: "transparent",
  //       // 图例标记的图形宽度。[ default: 25 ]
  //       itemWidth: 12,
  //       // 图例标记的图形高度。[ default: 14 ]
  //       itemHeight: 9,
  //       //图例文字样式设置
  //       textStyle: {
  //         color: 'red'
  //       }
  //     },
  //     radar: {
  //       //雷达图绘制类型，支持 'polygon' 和 'circle' [ default: 'polygon' ]
  //       shape: 'polygon',
  //       splitNumber: 3,
  //       center: ['50%', '50%'],
  //       radius: '65%',
  //       //指示器名称和指示器轴的距离。[ default: 15 ]
  //       nameGap: 5,
  //       triggerEvent: true,
  //       name: {
  //         textStyle: {
  //           color: '#999',
  //           backgroundColor: 'transparent'
  //           // borderRadius: 3,
  //           // padding: [3, 5]
  //         },
  //         formatter: function (value, indicator) {
  //           value = value.replace(/\S{4}/g, function (match) {
  //             return match + '\n'
  //           })
  //           // value = value + '\n' + indicator.value;
  //           return '{a|' + value + '}' + '\n' + '{b|' + indicator.value + '}'
  //         },
  //         //富文本编辑 修改文字展示样式
  //         rich: {
  //           a: {
  //             color: "#999",
  //             fontSize: 12,
  //             align: "center"

  //           },
  //           b: {
  //             color: "#333",
  //             fontSize: 17,
  //             align: "center"
  //           }
  //         }
  //       },
  //       // 设置雷达图中间射线的颜色
  //       axisLine: {
  //         lineStyle: {
  //           color: '#ddd',
  //         },
  //       },
  //       indicator: [
  //         { "name": "车辆已售", "value": 380, "max": 500 },
  //         { "name": "商家冒充个人", "value": 290, "max": 500 },
  //         { "name": "商家服务态度差", "value": 450, "max": 500 },
  //         { "name": "电话无法接通", "value": 300, "max": 500 },
  //         { "name": "走私套牌抵押车", "value": 480, "max": 500 },
  //         { "name": "价格高于标价", "value": 200, "max": 500 },
  //         { "name": "卖新车", "value": 350, "max": 500 },
  //         { "name": "图片与车款不符合", "value": 333, "max": 500 }
  //       ],
  //       //雷达图背景的颜色，在这儿随便设置了一个颜色，完全不透明度为0，就实现了透明背景
  //       splitArea: {
  //         show: false,
  //         areaStyle: {
  //           color: 'rgba(255,0,0,0)', // 图表背景的颜色
  //         },
  //       }
  //     },
  //     series: [{
  //       name: '投诉统计',
  //       type: 'radar',
  //       //显示雷达图选中背景
  //       areaStyle: { normal: {} },
  //       data: [
  //         {
  //           value: [380, 290, 450, 300, 480, 200, 350, 333],
  //           // 设置区域边框和区域的颜色
  //           itemStyle: {
  //             normal: {
  //               //雷达图背景渐变设置
  //               color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
  //                 offset: 0.5,
  //                 color: 'rgba(48,107, 231, 1)'
  //               },
  //               {
  //                 offset: 1,
  //                 color: 'rgba(73,168, 255, 0.7)'
  //               }]),
  //               //去除刻度
  //               opacity: 0,
  //               //雷达图边线样式
  //               lineStyle: {
  //                 width: 0,
  //                 color: '#306BE7',
  //               },
  //             },
  //           },
  //           name: '今日更新投诉量',
  //           id: "jintian"
  //         },
  //         {
  //           value: [10, 250, 100, 370, 80, 500, 190, 400],
  //           // 设置区域边框和区域的颜色
  //           itemStyle: {
  //             normal: {
  //               color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
  //                 offset: 0.5,
  //                 color: 'rgba(139,241, 134, 0.7)'
  //               },
  //               {
  //                 offset: 1,
  //                 color: 'rgba(0,208, 131, 1)'
  //               }]),
  //               opacity: 0,
  //               lineStyle: {
  //                 width: 0,
  //                 color: '#8BF186',
  //               },
  //             },
  //           },
  //           name: '昨日更新投诉量',
  //           id: "zuotian"
  //         }
  //       ]
  //     }]
  //   };
  // }
  // onChartClick(param, echarts) {
  //   console.log(param)
  // }
  // onChartLegendselectchanged(param, echarts) {
  //   console.log(param)
  // }

  initArticleChart = () => {
    this.articleChart = echarts.init(this.articleAmount.current)
    getBrowseAmount()
      .then(resp => {
        const option = {
          xAxis: {
            boundaryGap: false,
            type: 'category',
            data: resp.data.map(item => item.month)
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: resp.data.map(item => item.count),
            type: 'line',
            areaStyle: { color: '#74b9ff' }
          }]
        };
        this.articleChart.setOption(option)
      })
  }

  componentDidMount() {
    this.initArticleChart()
  }

}

export default Dashboard
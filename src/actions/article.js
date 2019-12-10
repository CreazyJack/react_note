import actionTypes from './actionTypes'
import { getArticles, deleteArt, getArticleReadAmount } from '../components/requests'

const startGetArticle = () => {
  return {
    type: actionTypes.START_GET_ARTICLE
  }
}
const getArticleSuccess = () => {
  return {
    type: actionTypes.GET_ARTICLE_SUCCESS
  }
}
export const ArticleRequest = () => {
  return dispatch => {
    // dispatch(startGetArticle())
    getArticles()
      .then(resp => {
        console.log(resp)
      })
  }
}


// deleteArticleMod = (record) => {
//   console.log(record)
//   // 使用函数的方式调用，定制化没那么强
//   // Modal.confirm({
//   //   title: '此操作不可逆，请谨慎！',
//   //   content: <Typography>确定要删除<span style={{ color: 'red' }}>{record.title}吗？</span></Typography>,
//   //   okType: 'danger',
//   //   okText: '别磨叽，赶紧的！',
//   //   onOk: () => {
//   //     deleteArt(record.id)
//   //       .then(resp => {
//   //         console.log(resp)
//   //       })
//   //   }
//   // })
//   this.setState({
//     isShowArtMod: true,
//     deleteArtTitle: record.title,
//     deleteArtID: record.id
//   })
// }
// hideDeleteMod = () => {
//   this.setState({
//     isShowArtMod: false,
//     // deleteArtTitle: ''
//     deleteArtConfirmLoading: false,
//   })
// }
// deleteArticle = () => {
//   this.setState({
//     deleteArtConfirmLoading: true,
//   })
//   deleteArt(this.state.deleteArtID)
//     .then(resp => {
//       message.success(resp.data.msg)
//       // 这里沟通的时候有坑，删除后返回第一页还是当前页
//       // 返会当前页
//       // this.getData()
//       // 返回第一页
//       this.setState(
//         {
//           offset: 0,
//         },
//         this.getData()
//       )
//     })
//     .finally(() => {
//       this.setState({
//         deleteArtConfirmLoading: false,
//         // isShowArtMod: false
//       }, this.hideDeleteMod())
//     })
// }

// getData = () => {
//   console.log('调用了getData')
//   this.setState({
//     isLoading: true
//   })
//   getArticles(this.state.offset, this.state.limited)
//     .then(
//       resp => {
//         console.log(resp)
//         const columnKeys = Object.keys(resp.data.list[0])
//         const columns = this.createClumns(columnKeys)
//         // 使用这个方法来防止切换页面速度过快而出现的报错👇，如果请求完成之后组件已经销毁，就不需要 setState
//         if (!this.updater.isMounted(this)) return
//         this.setState({
//           total: resp.data.total,
//           dataSource: resp.data.list,
//           columns: columns
//         })
//       }
//     )
//     .catch(err => {
//       // 处理错误，虽然有全局错误处理
//     })
//     .finally(() => {
//       // 使用这个方法来防止切换页面速度过快而出现的报错👇，在每个请求数据并修改数据的方法前添加该方法
//       if (!this.updater.isMounted(this)) return
//       this.setState({
//         isLoading: false
//       })
//     })
// }
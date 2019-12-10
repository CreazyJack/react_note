import actionTypes from './actionTypes'
import { getArticles } from '../components/requests'

const startGetArticle = () => {
  return {
    type: actionTypes.START_GET_ARTICLE
  }
}

const finishPost = () => {
  return {
    type: actionTypes.FINISH_ARTICLE_POST
  }
}


export const ArticleRequest = (offset, limited) => {
  return dispatch => {
    dispatch(startGetArticle())
    getArticles(offset, limited)
      .then(resp => {
        const columnKeys= Object.keys(resp.data.list[0])
        dispatch({
          type: actionTypes.RECEIVED_ARTICLES,
          payload: {
            total: resp.data.total,
            dataSource: resp.data.list,
            columnKeys
          }
        })
        dispatch(finishPost())
      })
  }
}



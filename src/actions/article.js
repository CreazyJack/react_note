import actionTypes from './actionTypes'
import { getArticles } from '../components/requests'
import { deleteArt } from '../components/requests'

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
        const columnKeys = Object.keys(resp.data.list[0])
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

const startDeleteArt = () => {
  return {
    type: actionTypes.START_DELETE_ARTICLE
  }
}
const finishDeleteArt = () => {
  return {
    type: actionTypes.FINISH_DELETE_ARTICLE
  }
}

export const deleteArticle = id => {
  return dispatch => {
    dispatch(startDeleteArt())
    deleteArt(id)
      .then(resp => {
        console.log(resp)
        dispatch({
          type: actionTypes.DELETE_ARTICLE,
          payload: {
            resp
          }
        })
        finishDeleteArt()
      })
  }
}

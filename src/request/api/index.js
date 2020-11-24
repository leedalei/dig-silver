import { get, post } from '../http'

const getArticlesUser = (params) => get('/api/getArticlesUser', params)
const getArticleById = (params) => get('/api/getArticleById', params)
const deleteArticle = (params) => post('/api/deleteArticle', params)
const publishArticle = (params) => post('/api/publishArticle', params)


export default {
  getArticlesUser,
  getArticleById,
  deleteArticle,
  publishArticle,
}

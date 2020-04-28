import axios from 'axios'

const HOST = process.env.REACT_APP_API_HOST || 'http://0.0.0.0:8080'

const token = localStorage.getItem('token')
const headers = token ? { Authorization: `Basic ${token}` } : {}

const client = axios.create({
  baseURL: HOST,
  timeout: 3000,
  headers
})

const get = (path) => (config) => client.get(path, config)
const post = (path) => (params) => client.post(path, params)
const put = (path) => (params) => client.put(path, params)
const destroy = (path) => client.delete(path)

const API = {
  postsGetList: (params) => get('/posts')({ params }),
  postsCreate: post('/posts'),
  postsGetItem: (id) => get(`/posts/${id}`)(),
  postsUpdate: (id, params) => put(`/posts/${id}`)(params),
  postsDelete: (id) => destroy(`/posts/${id}`),
  authGet: get('/auth'),
  cvsGetList: (params) => get('/cvs')({ params }),
  cvsCreate: post('/cvs'),
  cvsDelete: (id) => destroy(`/cvs/${id}`)
}

export default API

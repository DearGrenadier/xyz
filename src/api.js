import axios from 'axios'

const HOST = process.env.REACT_APP_API_HOST || 'http://0.0.0.0:8080'

const client = axios.create({
  baseURL: HOST,
  timeout: 3000
})

const get = (path) => (params) => client.get(path, { params })
const post = (path) => (params) => client.post(path, params)
const put = (path) => (params) => client.put(path, params)
const destroy = (path) => client.delete(path)

const API = {
  postsGetList: get('/posts'),
  postsCreate: post('/posts'),
  postsGetItem: (id) => get(`/posts/${id}`)(),
  postsUpdate: (id, params) => put(`/posts/${id}`)(params),
  postsDelete: (id) => destroy(`/posts/${id}`)
}

export default API

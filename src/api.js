import axios from 'axios'

const HOST = process.env.API_APP_HOST || 'http://0.0.0.0:8080'

const client = axios.create({
  baseURL: HOST,
  timeout: 3000,
})

const get = (path, params) => () => client.get(path, { params })

const API = {
  postsGetCollection: get('/posts'),
}

export default API
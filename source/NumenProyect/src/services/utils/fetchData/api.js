import axios from 'axios'
import JSONServer from '../../../../json-server.json'

export default axios.create({
  baseURL: `http://localhost:${JSONServer.port}/`,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    Accept: '*/*',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  },
})

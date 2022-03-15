import axios from 'axios'
import JSONServer from '../../../../json-server.json'

export default axios.create({
  baseURL: `http://localhost:${JSONServer.port}/`,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    Accept: '*/*',
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Access-Control-Allow-Headers': '*',
  },
})

import axios from 'axios'
import JSONServer from '../../../../json-server.json'

export default axios.create({
  baseURL: `http://localhost:${JSONServer.port}/`,
})

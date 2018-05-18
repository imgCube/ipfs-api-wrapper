import * as express from 'express'
import * as request from 'request'

const app = express()

app.get('/', (req, res) => {
  console.log(req.headers.host)
})

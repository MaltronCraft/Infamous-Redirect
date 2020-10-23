const express = require('express')
const { createProxy } = require('http-proxy-middleware');

const app = express()

app.use('*',  createProxy({ target: 'http://web.infamouscluster.tk/', port: 25627, changeOrigin: true }))

app.listen(80)

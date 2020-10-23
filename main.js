const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express()

app.use('*',  createProxyMiddleware({ target: 'http://web.infamous.tk/', port: 25627, changeOrigin: true }))

app.listen(8080)

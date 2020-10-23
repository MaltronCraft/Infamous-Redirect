var express = require('express')
var proxy =  require('http-proxy-middleware');
var fs = require('fs');

var proxyServer = proxy({
  target: 'http://web.infamouscluster.tk/',
  port: <To Configure On Server>,
  changeOrigin: true
})

var app = express()

app.use('*',  proxyServer)

app.listen(80)

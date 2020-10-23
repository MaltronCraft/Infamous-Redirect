var express = require('express')
var proxy =  require('http-proxy-middleware');
var fs = require('fs');

var proxyServer = proxy({
  target: 'http://web.infamouscluster.tk/',
  port: 25627,
  changeOrigin: true
})

var app = express()

app.use('*',  proxyServer)

app.listen(80)

require('opn')('https://example.com')

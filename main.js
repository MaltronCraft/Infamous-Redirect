var express = require('express')
var { createProxy } = require('http-proxy-middleware');
var fs = require('fs');

var app = express()

app.use('*',  createProxy({ target: 'http://web.infamouscluster.tk/', port: 25627, changeOrigin: true }))

app.listen(80)

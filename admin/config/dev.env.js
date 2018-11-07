'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  //发送请求的地址前缀
  BASE_API:'http://localhost:3000/api'
})

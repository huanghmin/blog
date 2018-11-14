'use strict';

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaCors = require('koa-cors');

var _koaCors2 = _interopRequireDefault(_koaCors);

var _koaBodyparser = require('koa-bodyparser');

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _index = require('./routes/index');

var _index2 = _interopRequireDefault(_index);

var _query = require('./utils/query');

var _query2 = _interopRequireDefault(_query);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//路由文件
var app = new _koa2.default();
//数据库连接文件
//1.先启动服务器


app.use((0, _koaCors2.default)()).use((0, _koaBodyparser2.default)()).use(_index2.default.routes());

app.listen(3000, function () {
    console.log('node is ok');
});

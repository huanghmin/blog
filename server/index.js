//1.先启动服务器
import koa from 'koa'
import cors from 'koa-cors'
import bodyParser from 'koa-bodyparser'
//路由文件
import router from './routes/index'
//数据库连接文件
import query from './utils/query'

const app = new koa()

app.use(cors()).use(bodyParser()).use(router.routes())

app.listen(3000,function () {
    console.log('node is ok');
})

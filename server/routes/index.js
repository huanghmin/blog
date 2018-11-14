//2.写路由
import Router from 'koa-router'
import {base_API} from "../config"
//引入我们登录注册控制器
import UserController from '../Controller/UserController'
const router = new Router()

//挂载路由
router.get('/',async ctx=>{
    ctx.body = '欢迎使用vue-blog接口测试服务器'
})
//所有的路由写在这里就可以了
//前端所有的请求发送过来的时候都是http://localhost:3000/api/……
router.prefix(`${base_API}`)
// router.get('/index',async ctx=>{
//     ctx.body = '我是首页的接口'
// })
//登录
router.post('/login',UserController.login);

export default router

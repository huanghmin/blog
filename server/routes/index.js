//2.写路由
import Router from 'koa-router'
const router = new Router()
//挂载路由
router.get('/',async ctx=>{
    ctx.body = '欢迎使用vue-blog接口测试服务器'
})
//所有的路由写在这里就可以了
export default router

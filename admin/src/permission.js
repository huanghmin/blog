import router from './router'
import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import {getToken} from "./utils/auth";

//1.创建白名单，那些页面不需要权限
const whiteList = ['/login']
//2.设置在页面跳转之前的一些权限判断操作，，，钩子
//to 是即将跳转的页面，from是当前所在的页面，next是判断完之后，必须调用next才可以进行下一步的操作
router.beforeEach((to,from,next)=>{
//  开启进度条
  NProgress.start()
  //如果有token值
  if (getToken()){
    if (to.path === '/login'){
      next({path:'/list'})
      NProgress.done(); //进度条结束
    } else {
      next()  //正常进行页面跳转
    }
  } else{
  //没有token值
    if (whiteList.indexOf(to.path) !== -1){
      next()
    } else{
    //  不在白名单里面，也没有token值
      next({path:'/login'})
      NProgress.done()
    }
  }
})
router.afterEach(()=>{
NProgress.done() //进度条结束
})

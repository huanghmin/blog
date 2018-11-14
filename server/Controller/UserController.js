//下边使我们以前的写法，通常我们都会把处理过程写成函数，直接暴露函数即可，以后我们在写方法的时候，直接要在使用Es6 class类
// const login = async ctx=>{
//
// }
//
// export default  {
//     login
// }

import User from '../model/UserModel'
import md5 from 'md5'
import createToken from "../utils/createToken";
class UserController {
    //登录的处理逻辑
    async login(ctx){
        // console.log(ctx.request.body.user);
        // console.log(ctx.request.body.password);
        let user = ctx.request.body.user
        let password = ctx.request.body.password
        //     验证用户名。密码是否合法
    //    检查用户名 是否存在
    //    所有的对于数据库的操作，我们不在控制器里面完成，在数据库直接封装成一个方法
        const res = (await User.getUserByName(user))[0]
        if (res){
        // 如果存在，检查密码是否正确
            if (res.password === md5(password)){
                //    生成token
                //    最后返回token
                let token = createToken(res,user)
                ctx.body ={
                        success:true,
                    message:'登陆成功',
                    token:token
                }
            }else {
                ctx.body = {
                    success:false,
                    message:'密码错误，请重新填写'
                }
            }
        } else {
            ctx.body = {
                success:false,
                message:'用户名不存在，请重新填写'
            }
        }

    }
}
export default new UserController()


//首先连接mysql数据库
//ES6的语法
import mysql from 'mysql'
import {db,dbName} from '../config'
import fs from 'fs'
import path from 'path'
let pool
const sqlContent = fs.readFileSync(path.resolve(__dirname,'..','./sql/hhm_blog.sql'),'utf-8')
//第一次连接数据库的时候，没有指定数据库名称，这次连接的目的是为了能够创建一个hhm_blog数据库
//并且将数据库文件执行，执行完毕之后hhm_blog数据库就有了对应的表和数据
const  init = mysql.createConnection(db)
init.connect()
//判断如果数据库存在，则不再需要执行下边的代码
// init.query("SHOW DATABASES LIKE `hhm_blog`",err=>{
//     Object.assign(db,dbName)
//     pool = mysql.createPool(db)
//     if (err){
//     //   数据库不存在
//         console.log('hhm_blog database created already');
//
//     }else {
//     //    数据库存在
//         console.log('数据库存在');
//     }
// })
init.query('CREATE DATABASE hhm_blog',err=>{
    //和并对象
    Object.assign(db,dbName)
    //第二次连接数据库，这时候数据库已经创建成功了，这时候直接连接数据库，然后执行sql文件夹下的hhm_blog.sql文件，对应的表和测试数据就已经存在数据库里了
    pool = mysql.createPool(db)
    if (err){
        console.log(err);
        console.log('hhm_blog database created already');
    } else {
        console.log('create hhm_blog Database');
        query(sqlContent).then(res=>{
            console.log('import sql is success');
        }).catch(err =>{
            console.log('import sql is error');
        })
    }
})
init.end()

//export default 是ES6的语法  module export = function 是ES5的语法

export default function query(sql,values) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) {
                reject(err);
            } else {
                connection.query(sql,values, (err, data) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(data);
                    }
                    connection.release()
                })
            }
        })
    })
}


//封装一个query方法，方便我们进行sql语句的执行

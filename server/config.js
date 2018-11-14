//3.连接数据库，，，数据库的配置文件
export const db = {
    host:'localhost',
    port:'3306',
    user:'root',
    password:'123456',
    multipleStatements:true //必须加上这句话，不然无法执行多条sql语句
}
export const  dbName = {
    database:'hhm_blog',
}
export const base_API = '/api'
export const secret = 'hhm_blog'

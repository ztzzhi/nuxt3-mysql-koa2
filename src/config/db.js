const { Sequelize } = require('sequelize')

const {MYSQL_HOST,MYSQL_USER,MYSQL_PWD,MYSQL_DB,MYSQL_TYPE} = require('../config/config.default')
console.log(MYSQL_TYPE,'MYSQL_TYPE');

const seq = new Sequelize(MYSQL_DB,MYSQL_USER,MYSQL_PWD,{
    host:MYSQL_HOST,
    dialect: 'mysql'
})

seq.authenticate().then(()=>{
    console.log('数据库连接成功');
}).catch((err)=>{
    console.log(err,'数据库连接失败');
})

module.exports = seq
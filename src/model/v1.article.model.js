const { DataTypes } = require('sequelize')

const seq = require('../config/db')

const V1User = seq.define('V1User', {
    openid: {
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        comment:'用户唯一标识'
    },
    is_regesiter:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:0,
        comment:'是否注册'
    },
    count:{
        type:DataTypes.DOUBLE,
        allowNull:false,
        defaultValue:0,
        comment:'账户'
    },
    user_name:{
        type:DataTypes.STRING,
        allowNull:true,
        defaultValue:null,
        comment:'用户名'
    }
})

// V1User.sync({force:true})
V1User.sync({})
module.exports = V1User
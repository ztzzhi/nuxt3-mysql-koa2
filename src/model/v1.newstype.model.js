const { DataTypes } = require('sequelize')

const seq = require('../config/db')

const V1NewsType = seq.define('V1NewsType', {
    name: {
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        comment:'新闻类型简介'
    },
    code:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        comment:'新闻对应代码'
    },
    codeurl:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        comment:'新闻对应请求路径'
    },
},{
    timestamps: false,  //去除createAt updateAt
})

// V1NewsType.sync({force:true})
V1NewsType.sync({})
module.exports = V1NewsType
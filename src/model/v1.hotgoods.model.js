const { DataTypes } = require('sequelize')

const seq = require('../config/db')

const V1HotGoods = seq.define('V1HotGoods', {
    name: {
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        comment:'宝贝简介'
    },
    code:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        comment:'宝贝value'
    },
},{
    timestamps: false,  //去除createAt updateAt
})

// V1HotGoods.sync({force:true})
V1HotGoods.sync({})
module.exports = V1HotGoods
const { DataTypes } = require('sequelize')

const seq = require('../config/db')

const User = seq.define('User',{
    user_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        comment: '用户名'
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
        comment: '密码'
    },
    is_admin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
        comment: '是否为管理员，0不是管理员，1是管理员'
    }
})

// User.sync({force:true})
User.sync({})
module.exports = User
const { DataTypes } = require('sequelize')

const seq = require('../config/db')

const V1category = seq.define('V1category', {
    label: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: '分类名称'
    },
})

// V1category.sync({force:true})
V1category.sync({})
module.exports = V1category
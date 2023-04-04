const { DataTypes } = require('sequelize')

const seq = require('../config/db')

const V1article = seq.define('V1article', {
    title: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "",
        comment: '文章标题'
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: "",
        comment: '文章内容'
    },
    desc: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "",
        comment: '文章摘要'
    },
    img: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "",
        comment: '图片地址'
    },
    tag: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "",
        comment: '文字分类'
    },
    isTop: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
        comment: '是否置顶'
    },
    viewNum: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        comment: '阅读量'
    },
    praiseNum: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        comment: '点赞量'
    },
    commentNum: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        comment: '评论量'
    },
})

// V1article.sync({force:true})
V1article.sync({})
module.exports = V1article
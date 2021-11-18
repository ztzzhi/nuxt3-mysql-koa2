let config = {
    APP_PORT: 7001,
    MYSQL_HOST: 'localhost',
    MYSQL_PORT: 3306,
    MYSQL_USER: 'running',
    MYSQL_PWD: 'root',
    MYSQL_DB: 'runningman',
    MYSQL_TYPE: 'mysql',
    SALT: 10,//密码加密 加盐 10 次,
    JWTSECRET: 'ztz'
}

module.exports = config
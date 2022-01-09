const {TKAPPSECRET,TKAPPKEY} = require('../config/config.default')
const dtkSdk = require('dtk-nodejs-api-sdk');
const TKAPP = new dtkSdk({appKey:TKAPPKEY,appSecret:TKAPPSECRET,checkSign:1});
module.exports = TKAPP
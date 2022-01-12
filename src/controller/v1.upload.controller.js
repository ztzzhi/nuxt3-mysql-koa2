
const fs = require('fs')
const path = require('path')
class UserController {
  // 用户注册
  async upload (ctx, next) {
    const file = ctx.request.files.file; // 上传的文件在ctx.request.files.file
    // 创建可读流
    const reader = fs.createReadStream(file.path);
    // 修改文件的名称
    var myDate = new Date();
    var newFilename = myDate.getTime() + '.' + file.name.split('.')[1];

    var uploadPath = path.join(__dirname, '../static/') + `/${newFilename}`;
    //创建可写流
    const upStream = fs.createWriteStream(uploadPath);
    // 可读流通过管道写入可写流
    reader.pipe(upStream);
    return ctx.body = {
      code: 200,
      msg: '上传成功',
      result: `https://1.117.155.84:7001/${newFilename}`
    };
  }
}

module.exports = new UserController();

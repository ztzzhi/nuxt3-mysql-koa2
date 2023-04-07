
const fs = require('fs')
const path = require('path')
const xlsx = require("node-xlsx")
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
      result: `http://180.76.121.2:7001/${newFilename}` //换成本地（http://localhost:7001）或者线上你的ip:7001的地址 这是我的服务器地址 大家最好不要上传到我的服务器～
    };
  }

  async getcalc (ctx, next) {
    try {
      let result = []
      let file1 = fs.readdirSync(path.join(__dirname, '../static/excle/1')) //实际值
      let file2 = fs.readdirSync(path.join(__dirname, '../static/excle/2')) //理论值
      let obj1 = xlsx.parse(path.join(__dirname, '../static/excle/1/' + file1[0]))
      let obj2 = xlsx.parse(path.join(__dirname, '../static/excle/2/' + file2[0]))
      let actualValueArr = obj1[0]["data"].slice(1).flat(Infinity)
      let expectedValueArr = obj2[0]["data"].slice(1).map(item => {
        return item.filter(it => typeof it === "number")
      })

      actualValueArr.forEach(out => {
        expectedValueArr.forEach(inner => {
          if (Math.abs(out - inner[0]) / inner[1] * 1000000 < 20) {
            result.push([out])
          }
        })
      })


      let xlsxObj = [
        {
          name: 'Sheet1',
          data: [
            ["m/z"],
            ...result
          ],
        }]
      var newFilename = new Date().getTime()
      fs.writeFileSync(path.join(__dirname, `../static/excle/${newFilename}.xlsx`), xlsx.build(xlsxObj), "binary")

      return ctx.body = {
        code: 200,
        msg: '解析成功',
        result: [...new Set(result)],
        length: [...new Set(result)].length,
        url: `http://180.76.121.2:7001/excle/${newFilename}.xlsx`
      };
    } catch (error) {
      console.log(error);
      return ctx.app.emit(
        "error",
        {
          code: 500,
          msg: "服务器异常",
          result: "",
        },
        ctx
      );
    }
  }
}

module.exports = new UserController();

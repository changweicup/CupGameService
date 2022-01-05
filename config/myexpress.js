import util from 'util'
import express from 'express';
import bodyParser from 'body-parser';

export default () => {
    var app = express();

    //使用promise方式将app.listen导出到外边(node8.x提供)
    app.listenAsync = util.promisify(app.listen);

    //跨域处理
    var allowCrossDomain = function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', '*');
        res.setHeader('Access-Control-Allow-Headers', '*');
        next();
    };
    app.use(allowCrossDomain);

    app.use(bodyParser.json()); //解析前端发送的json数据
    app.use(bodyParser.urlencoded({ extended: true })); //解析前端发表单数据

    //定义接口 http://localhost:3000/
    app.get("/", function (req, res) {
        res.send('哈喽 世界！')  //接口返回字符串
    })

    //配置路由(process.cwd()表示当前目录)
    require('../app/routes/exampleRouter')(app);

    //启动服务
    return app;
}
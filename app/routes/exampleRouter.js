/**
 * 路由
 * Router example
 */
import express from 'express';
import exampleController from '../controllers/exampleController';
import logger from '../util/logger';
import jwt from 'jsonwebtoken';
import constant from '../util/constant';

const router = express.Router();

export default function(app){
    // 请求接口
    router.route('/example/login').post(exampleController.login);
    router.route('/example/create').post(exampleController.createUser);
    router.route('/example/update').post(exampleController.updateUser);
    router.route('/example/delete').post(exampleController.deleteUser);
    router.route('/example/page-list').post(exampleController.listPage);


    // 权限
    let checkPermission = (req, res, next) => {
        logger.info('权限检查'+ req.headers)
        if (req.method === 'OPTIONS') {
            // 放行试探性请求
            res.send({"message":"ok"})
        } else if (req.originalUrl === '/api/example/login') {
            // 放行登录请求
            next();
        } else if (req.headers.hasOwnProperty('token')){
            // 验证token
            logger.info('验证token')
            jwt.verify(req.headers.token, constant.secret, function(err, decoded){
                if (err) {
                    if (err.name === 'TokenExpiredError') {
                        logger.info('token过期');
                        // 在token过期半小时之内刷新token
                        let time = ((new Date().getTime() - err.expiredAt.getTime())/(1000*60)).toFixed(2);
                        if (time <= 30) {
                            logger.info('生成新的token');
                            res.send({
                                "code": '403',
                                "msg": '刷新toke'
                            })
                        }
                    } else if (err.name === 'JsonWebTokenError'){
                        logger.info('token无效');
                    }
                } else {
                    logger.info(JSON.stringify(decoded));
                    req.example = decoded;
                    logger.info('验证token成功')
                    next();
                }
            })
        } else {
            logger.info("没有token，无效请求")
            res.send({"msg":"没有token，无效请求"})
        }
    }
    app.use(checkPermission);

    // 把app实例配置到express中
    app.use('/api', router);
}
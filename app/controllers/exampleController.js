/**
 * 控制器
 * Controller example
 */
import jwt from 'jsonwebtoken';
import logger from '../util/logger';
import constant from '../util/constant';
import * as exampleService from '../service/exampleService'

const operations = {

    generateToken(data) {
        return jwt.sign(data, constant.secret, {
            expiresIn: '60000'
        })
    },
    /**
     * 用户登录
     * @param {*} req 
     * @param {*} res 
     */
    login: function(req, res){
        let { account, password } = req.body;
        logger.info(JSON.stringify(req.body)); //查看表单参数
        exampleService.findUser(account, password).then(data => {
            if (data){
                let result = {
                    data: data,
                    msg: '用户登录成功'
                }
                result.token = operations.generateToken(result);
                res.status(200).json(result);
            } else {
                res.status(400).json({msg: '登录失败'});
                logger.info('登录失败');
            }
        })
    },

    /**
     * 用户列表数据
     * @param {*} req 
     * @param {*} res 
     */
    listPage: function(req, res) {
        let { page, pageSize, account } = req.body;
        logger.info(req.body);
        if (page && pageSize) {
            page = page - 1;
            exampleService.findUserByPage(page, pageSize, account).then(data => {
                res.status(200).json(data);
            });
        }
    },

    /**
     * 用户添加
     * @param {*} req 
     * @param {*} res 
     */
    createUser: function(req, res) {
        const user = req.body;
        logger.info("用户信息"+ JSON.stringify(user));
        exampleService.createUser(user).then((data) => {
            res.status(200).json({
                "msg": "添加用户成功",
                "content": data
            });
        }).catch((err) => {
            res.status(400).json({"msg": err});
        });
    },

    /**
     * 修改用户
     * @param {*} req 
     * @param {*} res 
     */
    updateUser: function(req, res) {
        const user = req.body;
        logger.info("用户信息"+ JSON.stringify(user));
        exampleService.updateUser(user).then((data) => {
            res.status(200).json({
                "msg": "修改用户成功",
                "content": data
            });
        }).catch((err) => {
            res.status(400).json({"msg": err});
        });
    },

    /**
     * 删除用户
     * @param {*} req 
     * @param {*} res 
     */
    deleteUser: function(req, res) {
        const uid = req.body.id;
        logger.info("用户id"+ JSON.stringify(uid));
        exampleService.deleteUser(uid).then((data) => {
            res.status(200).json({
                "msg": "删除用户成功",
                "content": data
            });
        }).catch((err) => {
            res.status(400).json({"msg": err});
        });
    }




}

export default operations;
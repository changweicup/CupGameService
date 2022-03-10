/**
 * 路由
 * Router example
 */
import express from 'express';
import exampleController from '../controllers/exampleController';
import menuController from '../controllers/menuController';

const router = express.Router();

export default function(app){
    // 请求接口
    router.route('/example/login').post(exampleController.login);
    router.route('/example/create').post(exampleController.createUser);
    router.route('/example/update').post(exampleController.updateUser);
    router.route('/example/delete').post(exampleController.deleteUser);
    router.route('/example/page-list').post(exampleController.listPage);

    // 菜单模块
    router.route('/menu/lists').post(menuController.listPage);
    router.route('/menu/createMenu').post(menuController.createMenu);
    router.route('/menu/updateMenu').put(menuController.updateMenu);
    router.route('/menu/deleteMenu').delete(menuController.deleteMenu);

    // 把app实例配置到express中
    app.use('/plat-service', router);
}
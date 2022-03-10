/**
 * 控制器
 * Controller example
 */
import logger from '../util/logger';
import * as menuService from '../service/menuService'

const operations = {
  /**
   * 菜单列表数据
   * @param {*} req 
   * @param {*} res 
   */
  listPage: function (req, res) {
    let {
      currentPage,
        pageSize,
    } = req.query;
    if (currentPage && pageSize) {
      currentPage = currentPage - 1;
      menuService.findMenuByPage(currentPage, pageSize).then(data => {
        res.status(200).json({
          message: "查询成功",
          data: data,
          code: 200,
        });
      });
    }
  },

  /**
   * 菜单添加
   * @param {*} req 
   * @param {*} res 
   */
  createMenu: function (req, res) {
    const menu = req.body;
    logger.info("菜单信息" + JSON.stringify(menu));
    menuService.createMenu(menu).then((data) => {
      res.status(200).json({
        message: "菜单添加成功",
        data: data,
        code: 200,
      });
    }).catch((err) => {
      res.status(400).json({
        message: err,
        code: 400,
      });
    });
  },

  /**
   * 修改菜单
   * @param {*} req 
   * @param {*} res 
   */
  updateMenu: function (req, res) {
    const user = req.body;
    logger.info("菜单信息" + JSON.stringify(user));
    menuService.updateMenu(user).then((data) => {
      res.status(200).json({
        message: "菜单修改成功",
        data: data,
        code: 200,
      });
    }).catch((err) => {
      res.status(400).json({
        message: err,
        code: 400,
      });
    });
  },

  /**
   * 删除用户
   * @param {*} req 
   * @param {*} res 
   */
  deleteMenu: function (req, res) {
    const uid = req.query.id;
    logger.info("菜单id" + JSON.stringify(uid));
    menuService.deleteMenu(uid).then((data) => {
      res.status(200).json({
        message: "菜单删除成功",
        data: data,
        code: 200,
      });
    }).catch((err) => {
      res.status(400).json({
        message: err,
        code: 400,
      });
    });
  }
}

export default operations;
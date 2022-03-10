/**
 * 服务层
 * Service MenuService
 */
import models from '../models';
import logger from '../util/logger';
import moment from  'moment';

const MenuModel = models.plat_menu;
const CURRENT_TIME = moment().format("YYYY-MM-DD HH:mm:ss");


/**
 * 菜单列表分页查询
 * @param {*} page 
 * @param {*} pageSize 
 */
export async function findMenuByPage(page, pageSize) {
  let limit = pageSize;
  let offset = page;
  let result = {};

  const data = await MenuModel.findAll({
    limit: Number(limit),
    offset: Number(offset),
    order: [
      ["menu_sort", "desc"]
    ],
  })

  const total = await models.sequelize.query("select count(*) num from plat_menu");
  logger.info("查询结果：" + data);
  result.content = data;

  if (total[0] && total[0].length > 0) {
    result.totalCount = total[0][0].num;
    result.page = page + 1;
  }
  logger.info("查询结果：" + result);
  return result;
}

/**
 * 菜单添加
 * @param {*} menu 
 */
export function createMenu(menu) {
  menu.create_time = CURRENT_TIME;
  menu.update_time = CURRENT_TIME;
  menu.menu_status = menu.menu_status ? '启用' : '禁用';
  return MenuModel.create(menu);
}

/**
 * 菜单信息修改
 * @param {*} menu 
 */
export function updateMenu(menu) {
  if (menu && menu.id) {
    return MenuModel.updateByPk(menu.id).then((u) => {
      u.update(menu)
    })
  } else {
    logger.error('参数错误：' + JSON.stringify(menu))
  }
}

/**
 * 删除菜单
 * @param {*} uid 
 */
export function deleteMenu(uid) {
  return MenuModel.destroy({
    where: {
      id: uid
    }
  });
}
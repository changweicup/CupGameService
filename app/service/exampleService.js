/**
 * 服务层
 * Service example
 */
import models from '../models';
import logger from '../util/logger';

const Example = models.jd_user;

/**
 * 登录查询
 * @param {*} account 
 * @param {*} pwd 
 */
export function findUser(account, pwd) {
    return Example.findOne({
        where: {
            account: account,
            password: pwd
        }
    })
}

/**
 * 用户列表分页查询
 * @param {*} page 
 * @param {*} pageSize 
 */
export async function findUserByPage(page, pageSize, account) {
    let limit = pageSize;
    let offset = page*pageSize;
    let result = {};

    var data = account ? 
                    await models.sequelize.query(
                        `select * from jd_user where account like ? order by id DESC limit ${offset},${limit}`,
                    {
                        replacements:['%'+account+'%'], 
                        model: Example
                    }) : 
                    await Example.findAll({
                        limit: Number(limit), 
                        offset: Number(offset),
                        order: [["id", "desc"]],
                    })

    var total = await models.sequelize.query("select count(*) num from jd_user");

    result.content = data;

    if ( total[0] && total[0].length > 0) {
       result.totalCount = total[0][0].num; 
       result.totalPage = Math.ceil(result.totalCount/pageSize);
       result.page = page + 1;
    }
    logger.info("查询结果：" + result);
    return result;
}

/**
 * 用户添加
 * @param {*} user 
 */
export function createUser(user) {
    return Example.create(user);
}

/**
 * 用户信息修改
 * @param {*} user 
 */
export function updateUser(user) {
    if (user && user.id) {
        return Example.updateByPk(user.id).then((u) => {
            u.update(user)
        })
    } else {
        logger.error('参数错误：' + JSON.stringify(user))
    }
}

/**
 * 删除用户
 * @param {*} uid 
 */
export function deleteUser(uid) {
    return Example.destroy({
        where: {
            id: uid
        }
    });
}

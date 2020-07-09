/**
 * models 层入口
 * 
 * npm i -S sequelize  
 * 数据库连接中间件
 */
import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import config from '../../config/config';
import logger from '../util/logger';

 const db = {};
 const con = config.db;
 let sequelize;

 //连接db
 try {
    sequelize = new Sequelize(con.database, con.username, con.password, con);
    logger.info('数据库连接成功');
 } catch (e) {
     logger.error('数据库连接失败');
     throw e;
 }

 //找到数据模型文件(jd开头，排除index.js)
 fs.readdirSync(__dirname)
   .filter(f => {
       return f !== 'index.js'
   })
   .forEach(f => {
        const model = sequelize.import(path.join(__dirname, f));
        db[model.name] = model;  
   });

   db.sequelize = sequelize; // 把sequelize暴露出去，为了执行sql

   module.exports = db;


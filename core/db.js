/*
 * @Author: xs
 * @Date: 2023-04-12 15:32:44
 */
const { Sequelize } = require("sequelize");
const {
  MYSQL_HOST,
  MYSQL_USER,
  MYSQL_PWD,
  MYSQL_DB,
} = require("../config/config");

const sequelize = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PWD, {
  host: MYSQL_HOST,
  timezone: "+08:00",
  dialect: "mysql" /* 选择 'mysql' | 'mariadb' | 'postgres' | 'mssql' 其一 */,
  define: {},
});

// sequelize.authenticate().then(() => {
//    console.log('数据库连接成功')
// }).catch((err) => {
//    console.log('数据库连接失败', err)
// })

module.exports = {
  db: sequelize,
};

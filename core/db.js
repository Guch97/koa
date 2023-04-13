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
  define: {
    // 删除时间
    paranoid: true,
    timestamps: true,
    createdAt: "create_at",
    updatedAt: "update_at",
    deletedAt: "delete_at",
    underscored: true, //驼峰转化为下划线
  },
});

sequelize.sync();
module.exports = {
  sequelize,
};

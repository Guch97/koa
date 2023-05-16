/*
 * @Author: xs
 * @Date: 2023-04-12 15:32:44
 */
const { Sequelize } = require("sequelize");
const DBconfig = require("../config/dbConfig");
// const {
//   MYSQL_HOST,
//   MYSQL_USER,
//   MYSQL_PWD,
//   MYSQL_DB,
// } = require("../config/config");
const { host, user, password, database } = DBconfig.getConfig(
  process.env.NODE_ENV
);
const sequelize = new Sequelize(database, user, password, {
  host,
  timezone: "+08:00",
  dialect: "mysql" /* 选择 'mysql' | 'mariadb' | 'postgres' | 'mssql' 其一 */,
  define: {
    // 删除时间
    paranoid: true,
    timestamps: true,
    createdAt: "create_at", //重新命名
    updatedAt: "update_at",
    deletedAt: "delete_at",
    underscored: true, //驼峰转化为下划线
    scopes: {
      bh: {
        attributes: {
          exclude: ["update_at", "create_at", "delete_at"],
        },
      },
    },
  },
});

sequelize.sync();
module.exports = {
  sequelize,
};

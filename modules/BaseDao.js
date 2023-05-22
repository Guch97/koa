/*
 * @Author: xs
 * @Date: 2023-05-17 13:04:16
 */
const path = require("path");
const DBconfig = require("../config/dbConfig");
const { Sequelize } = require("sequelize-typescript");

class BaseDao {
  static baseDao = new BaseDao();
  sequelize = "";
  constructor() {
    this.initSeq("mysql");
  }
  initSeq(dialect) {
    const { host, user, password, database } = DBconfig.getConfig(
      process.env.NODE_ENV
    );
    this.sequelize = new Sequelize(database, user, password, {
      host,
      timezone: "+08:00",
      dialect /* 选择 'mysql' | 'mariadb' | 'postgres' | 'mssql' 其一 */,
      define: {
        // 删除时间
        paranoid: true,
        timestamps: false,
        createdAt: "create_at", //重新命名
        updatedAt: "update_at",
        deletedAt: "delete_at",
        freezeTableName: true, //不要添加s
        underscored: true, //驼峰转化为下划线
        scopes: {
          bh: {
            attributes: {
              exclude: ["update_at", "create_at", "delete_at"],
            },
          },
        },
      },
      pool: {
        max: 10, //最大连接数
        min: 5,
        idle: 10000, //空闲等待时间
        acquire: 1000, //一条sql查询等待时间
      },
    });
    this.sequelize.sync();
  }
  addModel() {
    const modelPath = path.join(process.cwd(), "./src/modules/decorModel");
    this.sequelize.addModels([modelPath]);
  }
}
const baseDao = BaseDao.baseDao;
baseDao.addModel();
module.exports = { sequelize } = BaseDao.baseDao;

/*
 * @Author: xs
 * @Date: 2023-05-16 10:24:13
 */
const {
  MYSQL_HOST,
  MYSQL_USER,
  MYSQL_PWD,
  MYSQL_DB,
  MYSQL_PORT,
} = require("../config/config");
class DBconfig {
  static config = new DBconfig();
  env = "";
  envConfig = {};
  constructor() {
    this.env = process.env.NODE_ENV || "prod";
    this.initConfig();
  }
  initConfig() {
    this.envConfig = {
      dev: {
        host: MYSQL_HOST,
        user: MYSQL_USER,
        password: MYSQL_PWD,
        database: MYSQL_DB,
      },
      prod: {
        host: MYSQL_HOST,
        user: MYSQL_USER,
        password: MYSQL_PWD,
        database: MYSQL_DB,
      },
    };
  }
  getConfig(config = "dev") {
    if (this.isDBConfig()) {
      return this.envConfig[config];
    }
  }
  isDBConfig() {
    return true;
  }
}

module.exports = DBconfig.config;

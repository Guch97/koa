/*
 * @Author: xs
 * @Date: 2023-04-12 15:40:15
 */
const { Sequelize, Model } = require("sequelize");
const { sequelize } = require("../core/db");

class User extends Model {}

User.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nickName: Sequelize.STRING,
    email: Sequelize.STRING,
    passWord: Sequelize.STRING,
  },
  { sequelize, tableName: "user" }
);

/*
 * @Author: xs
 * @Date: 2023-04-12 15:40:15
 */
const { Sequelize, Model } = require("sequelize");
const { db } = require("../core/db");

class User extends Model {}

User.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement,
  },
  nickName: Sequelize.STRING,
  email: Sequelize.STRING,
  passWord: Sequelize.STRING,
});

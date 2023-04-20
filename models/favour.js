/*
 * @Author: xs
 * @Date: 2023-04-19 10:26:09
 */
const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../core/db");

class Favour extends Model {}

Favour.init(
  {
    uid: DataTypes.INTEGER,
  },
  { sequelize, tableName: "favour" }
);

module.exports = {
  Favour,
};

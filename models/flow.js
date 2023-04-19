/*
 * @Author: xs
 * @Date: 2023-04-19 10:26:09
 */
const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../core/db");

class FLow extends Model {}

FLow.init(
  {
    index: DataTypes.INTEGER,
    type: DataTypes.INTEGER,
  },
  { sequelize, tableName: "flow" }
);

module.exports = {
  FLow,
};

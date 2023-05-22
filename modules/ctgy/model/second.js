/*
 * @Author: xs
 * @Date: 2023-05-19 13:24:11
 */
const { DataTypes } = require("sequelize");
const { sequelize } = require("../../BaseDao");

class SecondCtgModel {
  static createModel() {
    const model = sequelize.define("secondCtg", {
      secondId: {
        type: DataTypes.INTEGER,
        // 是否允许为空
        allowNull: false,
        // 是否唯一
        unique: true,
        // 是否是主件
        primaryKey: true,
        // 自增长
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
      },
    });
    return model;
  }
}
module.exports = SecondCtgModel.createModel();

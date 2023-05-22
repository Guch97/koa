/*
 * @Author: xs
 * @Date: 2023-05-19 13:24:11
 */
const { DataTypes } = require("sequelize");
const { sequelize } = require("../../BaseDao");

class ThirdCtgyModel {
  static createModel() {
    const model = sequelize.define("thirdCtgy", {
      thirdId: {
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
      connectId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "secondCtg",
          key: "second_Id",
        },
      },
    });
    return model;
  }
}
module.exports = ThirdCtgyModel.createModel();

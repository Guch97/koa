/*
 * @Author: xs
 * @Date: 2023-05-19 13:24:11
 */
import { DataTypes } from "sequelize";
const { sequelize } = require("../../BaseDao");

class CtgyModel {
  static createModel() {
    const model = sequelize.define("ctgy", {
      ctgId: {
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
    });
    return model;
  }
}
module.exports = CtgyModel.createModel();

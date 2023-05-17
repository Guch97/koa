/*
 * @Author: xs
 * @Date: 2023-05-16 13:17:28
 */
const { DataTypes } = require("sequelize");
const { sequelize } = require("../../BaseDao");

class UserInfo {
  static createModel() {
    const model = sequelize.define("userInfo", {
      userId: {
        type: DataTypes.INTEGER,
        // 是否允许为空
        allowNull: false,
        // 是否唯一
        unique: true,
        // 注释
        comment: "用户名Id唯一",
        // 是否是主件
        primaryKey: true,
        // 自增长
        autoIncrement: true,
      },
      userName: {
        type: DataTypes.STRING(30),
        // 是否允许为空
        allowNull: true,
        // 是否唯一
        unique: false,
        // 注释
        comment: "用户名",
      },
      address: {
        type: DataTypes.STRING(30),
        // 是否允许为空
        allowNull: true,
        // 是否唯一
        unique: false,
        // 注释
        comment: "地址",
      },
      psw: {
        type: DataTypes.STRING(30),
        // 是否允许为空
        allowNull: false,
        // 是否唯一
        unique: false,
        // 注释
        comment: "密码",
      },
    });
    return model;
  }
}
module.exports = UserInfo.createModel();

/*
 * @Author: xs
 * @Date: 2023-04-12 15:40:15
 */
const bcryptjs = require("bcryptjs");
const { Sequelize, Model } = require("sequelize");
const { sequelize } = require("../core/db");

class User extends Model {
  static async validatorEmailPassWord(email, passWord) {
    const user = await User.findOne({
      where: {
        email,
      },
    });
    if (!user) {
      throw new global.errors.NotFound("用户不存在");
    }
    const correct = bcryptjs.compareSync(passWord, user.passWord);
    if (!correct) {
      throw new Error("密码错误");
    }
    return user.dataValues;
  }

  static async getUserByOpenId(openId) {
    const user = await User.findOne({
      where: {
        openId,
      },
    });
    return user;
  }
  static async register(openId) {
    return await User.create({ openId });
  }
}

User.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nikeName: Sequelize.STRING,
    email: Sequelize.STRING,
    passWord: {
      type: Sequelize.STRING,
      set(val) {
        // 加密
        let salt = bcryptjs.genSaltSync(10);
        let pas = bcryptjs.hashSync(val, salt);
        this.setDataValue("passWord", pas);
      },
    },
  },
  { sequelize, tableName: "user" }
);

module.exports = { User };

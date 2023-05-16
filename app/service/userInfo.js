/*
 * @Author: xs
 * @Date: 2023-05-16 13:40:06
 */
const model = require("../../models/useInfo");
class UserInfo {
  static addUser(userInfo) {
    return model.create(userInfo);
  }
}

module.exports = { addUser } = UserInfo;

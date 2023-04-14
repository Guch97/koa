/*
 * @Author: xs
 * @Date: 2023-04-13 13:39:21
 */
const { User } = require("../models/user");

class UserService {
  async findOneEmail({ email }) {
    const res = await User.findOne({
      where: {
        email,
      },
    });
    if (res) {
      throw new Error("email已存在");
    }
  }
}

module.exports = new UserService();

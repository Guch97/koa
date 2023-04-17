/*
 * @Author: xs
 * @Date: 2023-04-17 09:56:32
 */
const { WX } = require("../../config/config");
const { User } = require("../../models/user");
const { generateToken } = require("../../core/util");
const util = require("util");
class WXManager {
  static async codeToken(ctx) {
    const url = util.format(WX.loginUrl, WX.appId, WX.appSecret);
    const result = await axios.get(url);
    if (result.code !== 200) {
      throw new Error("openId获取失败");
    }
    const errorCode = result.data.error;
    if (errorCode !== 0) {
      throw new Error("openId获取失败" + errorCode);
    }
    let user = await User.getUserByOpenId(result.data.openId);
    if (!user) {
      user = await User.register(result.data.openId);
    }
    return generateToken(user.id, ctx.auth);
  }
}

module.exports = {
  WXManager,
};

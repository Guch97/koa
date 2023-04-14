/*
 * @Author: xs
 * @Date: 2023-04-14 13:35:13
 */

const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/config");

class Auth {
  constructor() {}
  get m() {
    return async (ctx, next) => {
      // token 检测
      const { authorization = "" } = ctx.request.header;
      const token = authorization.split(" ")[1];
      const user = jwt.verify(token, JWT_SECRET);
      ctx.state.user = user;
      await next();
    };
  }
}

module.exports = {
  Auth,
};

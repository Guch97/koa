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
      if (!token) {
        throw new global.errors.Forbbiden();
      }
      try {
        const user = jwt.verify(token, JWT_SECRET);
        ctx.auth = user;
      } catch (error) {
        switch (error.name) {
          case "TokenExpiredError":
            throw new Error("token过期");
          case "JsonWebTokenError":
            throw new Error("无效的token");
          default:
            throw error;
        }
      }
      await next();
    };
  }
}

module.exports = {
  Auth,
};

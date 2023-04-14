/*
 * @Author: xs
 * @Date: 2023-04-14 13:18:29
 */
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/config");

// 生成jwt令牌
const generateToken = (uid, scope) => {
  // payLoad 自定义对象
  const token = jwt.sign({ uid, scope }, JWT_SECRET, {
    expiresIn: 60 * 90 * 24,
  });
  return token;
};

module.exports = {
  generateToken,
};

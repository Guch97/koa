/*
 * @Author: xs
 * @Date: 2023-04-11 18:00:03
 */
const Joi = require("joi");

const beStringRule = Joi.string().required();

const beEmailRole = Joi.string().allow("email").required();

const beMinZeroMaxHundred = Joi.number().min(0).max(100);

// 比较password

const bePassWord = (p1, p2) => {
  if (p1 !== p2) {
    throw new Error("密码必须相同");
  }
};

module.exports = {
  beStringRule,
  beEmailRole,
  beMinZeroMaxHundred,
  bePassWord,
};

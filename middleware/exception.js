/*
 * @Author: xs
 * @Date: 2023-04-11 15:38:33
 */
const { HttpExceptions } = require("../core/http-exceptions");

const catchError = async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    // 已知错误
    if (error instanceof HttpExceptions) {
      ctx.body = {
        msg: error.msg,
        errorCode: error.errorCode,
        requestUrl: `${ctx.method} ${ctx.path}`,
      };
      ctx.code = error.code;
    } else {
      ctx.body = {
        mes: "未知错误异常",
        errorCode: 9999,
        requestUrl: `${ctx.method} ${ctx.path}`,
        error: error,
      };
      ctx.status = 500;
    }
  }
};

module.exports = catchError;

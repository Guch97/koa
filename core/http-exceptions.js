class HttpExceptions extends Error {
  constructor(msg = "服务器异常", errorCode = 400, code = 400) {
    super();
    this.errorCode = errorCode;
    this.code = code;
    this.msg = msg;
  }
}

class ParameterExceptions extends HttpExceptions {
  constructor(msg, errorCode) {
    super();
    this.code = 400;
    this.msg = msg || "参数错误";
    this.errorCode = errorCode || 400;
  }
}

class NotFound extends HttpExceptions {
  constructor(msg, errorCode) {
    super();
    this.code = 404;
    this.msg = msg || "资源未找到";
    this.errorCode = errorCode || 404;
  }
}

class AuthFailed extends HttpExceptions {
  constructor(msg, errorCode) {
    super();
    this.code = 401;
    this.msg = msg || "授权失败";
    this.errorCode = errorCode || 401;
  }
}

module.exports = {
  HttpExceptions,
  ParameterExceptions,
  NotFound,
  AuthFailed,
};

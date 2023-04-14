/*
 * @Author: xs
 * @Date: 2023-04-11 13:24:33
 */
const requireDirectory = require("require-directory");
const path = require("path");
const Router = require("koa-router");
const config = require("../config/config");
class InitManager {
  static initCore(app) {
    // 入口方法
    InitManager.app = app;
    InitManager.initLoadRouters();
    InitManager.loadingHttpExceptions();
    InitManager.loadingConfig();
    InitManager.successRes();
  }
  static initLoadRouters() {
    const loadingRoutes = (obj) => {
      if (obj instanceof Router) {
        InitManager.app.use(obj.routes());
      }
    };
    requireDirectory(module, path.join(__dirname, "../app/routes/v1"), {
      visit: loadingRoutes,
    });
  }
  static loadingConfig() {
    global.config = config;
  }
  static successRes() {
    const { app } = InitManager;
    app.context.successRes = (data = {}) => {
      return {
        data,
        msg: "success",
        errorCode: 0,
      };
    };
  }
  static loadingHttpExceptions() {
    const errors = require("../core/http-exceptions");
    global.errors = errors;
  }
}

module.exports = InitManager;

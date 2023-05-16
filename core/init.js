/*
 * @Author: xs
 * @Date: 2023-04-11 13:24:33
 */
const requireDirectory = require("require-directory");
const path = require("path");
const Router = require("koa-router");
const config = require("../config/config");
const globalException = require("./globalExce");
class InitManager {
  static initCore(app) {
    // 入口方法
    InitManager.app = app;
    // InitManager.catchRouterError();
    // 初始化路由
    InitManager.initLoadRouters();
    // 报错处理详情
    InitManager.loadingHttpExceptions();
    // 全局配置
    InitManager.loadingConfig();
    // 挂在请求
    InitManager.successRes();
    InitManager.failRes();
    // 端口监听
    app.listen(4001, () => {});
  }
  static initLoadRouters() {
    const loadingRoutes = (obj) => {
      if (obj instanceof Router) {
        InitManager.app.use(obj.routes(), obj.allowedMethods());
      }
    };
    requireDirectory(module, path.join(process.cwd(), "./app/routes/v1"), {
      visit: loadingRoutes,
    });
  }
  static loadingConfig() {
    global.config = config;
  }
  static catchRouterError() {
    InitManager.app.use(globalException);
  }
  static successRes() {
    const { app } = InitManager;
    app.context.successRes = (data = {}, msg = "success") => {
      return {
        data,
        msg,
        errorCode: 0,
      };
    };
  }
  static failRes() {
    const { app } = InitManager;
    app.context.failRes = (data = {}, msg = "fail") => {
      return {
        data,
        msg,
        errorCode: 1001,
      };
    };
  }
  static loadingHttpExceptions() {
    const errors = require("../core/http-exceptions");
    global.errors = errors;
  }
}

module.exports = InitManager;

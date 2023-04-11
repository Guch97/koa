/*
 * @Author: xs
 * @Date: 2023-04-11 13:24:33
 */
const requireDirectory = require("require-directory");
const path = require("path");
const Router = require("koa-router");

class InitManager {
  static initCore(app) {
    // 入口方法
    InitManager.app = app;
    InitManager.initLoadRouters();
    InitManager.loadingHttpExceptions();
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
  static loadingHttpExceptions() {
    const errors = require("../core/http-exceptions");
    global.errors = errors;
  }
}

module.exports = InitManager;

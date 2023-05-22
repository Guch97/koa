/*
 * @Author: xs
 * @Date: 2023-05-22 15:11:13
 */
import Koa from "koa";
import Router from "koa-router";
const catchError = require("../middleware/exception.js");
const { koaBody } = require("koa-body");
const koaStatic = require("koa-static");

const fs = require("fs");
const path = require("path");

class AllCtrlRouterLoader {
  static allRouterLoader: any = new AllCtrlRouterLoader();
  app!: Koa;
  initCore(app: Koa) {
    // 入口方法
    this.app = app;
    this.loadMiddleware(); //加载中间价
    this.storeRootToCtx(); //保存根路由
    this.loadALlCtrlRouterWrapper(); //加载控制器路由
    this.successRes();
    this.failRes();
    // 端口监听
    this.listen();
  }
  loadMiddleware() {
    // 全局错误处理
    this.app.use(catchError);
    // body参数验证
    this.app.use(koaBody());
    this.app.use(koaStatic(path.join(__dirname, "./static")));
  }
  storeRootToCtx() {
    const rootRouter = new Router();
    this.app.context.rootRouter = rootRouter;
    this.app.use(rootRouter.routes());
  }
  isCtrlFile(file: string) {
    const fileName = file.substring(
      file.lastIndexOf("\\") + 1,
      file.lastIndexOf(".")
    );
    const extensionName: string = file.substring(
      file.lastIndexOf(".") + 1,
      file.length
    );
    return fileName.indexOf("Controller") === -1 && extensionName === "ts";
  }
  getFile(dir: string) {
    return fs.readdirSync(dir);
  }
  getAbsoluteFilePaths() {
    const dir = path.join(process.cwd(), "./controller");
    const allFiles = this.getFile(dir);
    const allFullFilePaths: string[] = [];
    for (let file of allFiles) {
      if (this.isCtrlFile(file)) {
        const fullFilePath = dir + "//" + file;
        allFullFilePaths.push(fullFilePath);
      }
    }
    return allFullFilePaths;
  }
  loadALlRouter(allFullFilePaths: any) {
    for (let fullFilePath of allFullFilePaths) {
      require(fullFilePath);
    }
  }
  loadALlCtrlRouterWrapper() {
    const allFullPath = this.getAbsoluteFilePaths();
    this.loadALlRouter(allFullPath);
  }
  successRes() {
    this.app.context.successRes = (data = {}, msg = "success") => {
      return {
        data,
        msg,
        errorCode: 0,
      };
    };
  }
  failRes() {
    this.app.context.failRes = (data = {}, msg = "fail") => {
      return {
        data,
        msg,
        errorCode: 1001,
      };
    };
  }
  listen() {
    this.app.listen(4001, () => {
      console.log("4001端口启动");
    });
  }
}

export default AllCtrlRouterLoader.allRouterLoader;

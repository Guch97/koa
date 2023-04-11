/*
 * @Author: xs
 * @Date: 2023-04-11 10:01:44
 */
const Koa = require("koa");
const InitManager = require("./core/init");
const { koaBody } = require("koa-body");
const catchError = require("./middleware/exception");

// const router = require("../koa/routes/v1");
const app = new Koa();

// 全局错误处理
app.use(catchError);
// body参数验证
app.use(koaBody());

InitManager.initCore(app);
// app.use(router.routes());
app.listen(4001, () => {
  console.log(">>>服务器启动");
});

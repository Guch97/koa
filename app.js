/*
 * @Author: xs
 * @Date: 2023-04-11 10:01:44
 */
const Koa = require("koa");
const InitManager = require("./core/init");
const { koaBody } = require("koa-body");
const catchError = require("./middleware/exception");
const { Auth } = require("./middleware/auth");
const static = require("koa-static");
const path = require("path");
// 表创建
// require("./models/user");
// require("./models/classic");
// const router = require("../koa/routes/v1");
const app = new Koa();

// 全局错误处理
app.use(catchError);
// body参数验证
app.use(koaBody());

app.use(static(path.join(__dirname, "./static")));
InitManager.initCore(app);

/*
 * @Author: xs
 * @Date: 2023-04-11 10:01:44
 */
const Koa = require("koa");
import allRouterLoader from "./core/AllRouterLoader";
// 表创建
// require("./models/user");
// require("./models/classic");
// const router = require("../koa/routes/v1");
const app = new Koa();

allRouterLoader.initCore(app);

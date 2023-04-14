/*
 * @Author: xs
 * @Date: 2023-04-11 11:00:53
 */
const KoaRouter = require("koa-router");
const { Auth } = require("../../../middleware/auth");
const router = new KoaRouter({ prefix: "/v1/book" });

router.post("/classic", new Auth().m, (ctx, next) => {
  const user = ctx.auth;
  ctx.body = ctx.successRes(user);
});

module.exports = router;

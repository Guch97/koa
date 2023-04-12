/*
 * @Author: xs
 * @Date: 2023-04-11 11:00:53
 */
const KoaRouter = require("koa-router");
const router = new KoaRouter({ prefix: "/v1" });
const { beStringRule } = require("../../validator/validator");
router.get("/book/latest/:id", (ctx, next) => {
  const params = ctx.params;
  const { error } = beStringRule.validate(params.id);
  if (error) {
    throw error;
  }
  // if (true) {
  //   const error = new global.errors.ParameterExceptions();
  //   throw error;
  // }
  ctx.body = "latest";
});

module.exports = router;

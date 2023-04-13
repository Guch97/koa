/*
 * @Author: xs
 * @Date: 2023-04-13 10:21:41
 */
const KoaRouter = require("koa-router");
const router = new KoaRouter({ prefix: "/v1/user" });
const {
  beEmailRole,
  bePassWord,
  beStringRule,
  beMinZeroMaxHundred,
} = require("../../validator/validator");
router.post("/register", async (ctx, next) => {
  // email passowrd passowrd1 nickname
  const { passWord, passWord2, niceName, email } = ctx.request.body;
  bePassWord(passWord, passWord2);

  ctx.body = "333";
});
module.exports = router;

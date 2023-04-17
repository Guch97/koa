/*
 * @Author: xs
 * @Date: 2023-04-14 10:34:29
 */
const KoaRouter = require("koa-router");
const { User } = require("../../../models/user");
const { generateToken } = require("../../../core/util");
const { WXManager } = require("../../service/wx");
const router = new KoaRouter({ prefix: "/v1/token" });

router.post("/login", async (ctx, next) => {
  const { email, passWord, type } = ctx.request.body;
  // 小程序
  if (type === "WX") {
    const token = await WXManager.codeToken(ctx);
    ctx.body = ctx.successRes({ token });
  } else {
    const user = await User.validatorEmailPassWord(email, passWord);
    const token = await generateToken(user.id, { email, passWord, level: 8 });
    ctx.body = ctx.successRes({ token });
  }
});

module.exports = router;

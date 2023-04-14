/*
 * @Author: xs
 * @Date: 2023-04-14 10:34:29
 */
const KoaRouter = require("koa-router");
const { User } = require("../../../models/user");
const { generateToken } = require("../../../core/util");
const router = new KoaRouter({ prefix: "/v1/token" });

router.post("/login", async (ctx, next) => {
  const { email, passWord } = ctx.request.body;
  const user = await User.validatorEmailPassWord(email, passWord);
  const token = await generateToken(user.id, 2);
  ctx.body = ctx.successRes({ token });
});

module.exports = router;

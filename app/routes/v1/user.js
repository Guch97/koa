/*
 * @Author: xs
 * @Date: 2023-04-13 10:21:41
 */
const KoaRouter = require("koa-router");
const router = new KoaRouter({ prefix: "/v1/user" });
const { User } = require("../../../models/user");
const { bePassWord } = require("../../validator/validator");
const { findOneEmail } = require("../../../service/user");

router.post("/register", async (ctx) => {
  const { passWord, passWord2, nikeName, email } = ctx.request.body;
  // 密码验证
  bePassWord(passWord, passWord2);
  // 数据库查询
  await findOneEmail({ email });
  const user = { email, passWord, nikeName };
  await User.create(user);
  ctx.body = ctx.successRes();
});
module.exports = router;

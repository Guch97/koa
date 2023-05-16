/*
 * @Author: xs
 * @Date: 2023-04-13 10:21:41
 */
const KoaRouter = require("koa-router");
const router = new KoaRouter({ prefix: "/v1/user" });
const addUser = require("../../service/userInfo");
router.post("/addUser", async (ctx) => {
  const useInfo = ctx.request.body;
  const success = addUser(useInfo);
  ctx.successRes(success);
});
module.exports = router;

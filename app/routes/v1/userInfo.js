/*
 * @Author: xs
 * @Date: 2023-04-13 10:21:41
 */
const KoaRouter = require("koa-router");
const router = new KoaRouter({ prefix: "/v1/user" });
const {
  addUser,
  findByProps,
  findByLike,
  findUserPage,
} = require("../../service/userInfo");
router.post("/addUser", async (ctx) => {
  try {
    const useInfo = ctx.request.body;
    const { dataValues } = await addUser(useInfo);
    ctx.body = ctx.successRes(dataValues);
  } catch (err) {
    throw new Error(err);
  }
});

router.get("/findByProps", async (ctx) => {
  try {
    const res = await findByProps();
    ctx.body = ctx.successRes(res);
  } catch (err) {
    throw new Error(err);
  }
});
router.get("/findByLike/:key", async (ctx) => {
  try {
    const params = ctx.params;
    const res = await findByLike(params);
    ctx.body = ctx.successRes(res);
  } catch (err) {
    throw new Error(err);
  }
});

router.get("/findByLike/:pageNo/:pageSize", async (ctx) => {
  const { pageNo, pageSize } = ctx.params;
  const offset = (pageNo - 1) * pageSize;
  try {
    const res = await findUserPage(offset, pageSize);
    ctx.body = ctx.successRes(res);
  } catch (err) {
    throw new Error(err);
  }
});
module.exports = router;

/*
 * @Author: xs
 * @Date: 2023-05-19 15:19:40
 */
const KoaRouter = require("koa-router");
const {
  addCtgSecond,
  findSecThirdCtg,
} = require("../../../modules/ctgy/dao/ctg");

const router = new KoaRouter({ prefix: "/v1/ctgy" });
router.post("/addCtgSecond", async (ctx) => {
  try {
    const data = ctx.request.body;
    const { dataValues } = await addCtgSecond(data);
    ctx.body = ctx.successRes(dataValues);
  } catch (err) {
    throw new Error(err);
  }
});
router.get("/ctgFirstConnectSecond/:id", async (ctx) => {
  try {
    const { id } = ctx.params;
    const res = await findSecThirdCtg(id);
    ctx.body = ctx.successRes(res);
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = router;

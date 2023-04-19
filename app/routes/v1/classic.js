/*
 * @Author: xs
 * @Date: 2023-04-11 11:00:53
 */
const KoaRouter = require("koa-router");
const { Flow } = require("../../../models/flow");
const { Auth } = require("../../../middleware/auth");
const { Art } = require("../../../models/art");
const router = new KoaRouter({ prefix: "/v1/book" });

router.post("/classic", new Auth().m, (ctx, next) => {
  const user = ctx.auth;
  ctx.body = ctx.successRes(user);
});

router.post("/latest", async (ctx, next) => {
  const flow = await Flow.findOne({
    where: {
      // index: 8,
      order: [["index", "DESC"]],
    },
  });
  const art = await Art.getData(flow.art_id, flow.type);
  art.setDataValue("index", flow.index);
  // 序列对象
  ctx.body = ctx.successRes(newData);
});

module.exports = router;

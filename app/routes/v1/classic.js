/*
 * @Author: xs
 * @Date: 2023-04-11 11:00:53
 */
const KoaRouter = require("koa-router");

const router = new KoaRouter({ prefix: "/v1" });

router.get("/book/classic");

module.exports = router;

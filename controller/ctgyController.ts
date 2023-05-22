/*
 * @Author: xs
 * @Date: 2023-05-22 13:21:28
 */
import { Context } from "koa";
import { get } from "../decorator/requestMethods";
class Controller {
  @get("/ctgFirstConnectSecond/:id")
  async findThirdCtgy(ctx: Context) {}
}

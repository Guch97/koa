/*
 * @Author: xs
 * @Date: 2023-05-22 15:35:06
 */
import "koa";
import Router from "koa-router";

declare module "koa" {
  export interface ContextDelegatedRequest {
    rootRouter: Router;
  }
}

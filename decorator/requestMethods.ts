/*
 * @Author: xs
 * @Date: 2023-05-22 13:25:45
 */
import "reflect-metadata";
export function reqProcess(methodType: any) {
  return function (reqPath: string) {
    return function MyMethodDecorator(
      targetClass: any,
      methodName: string,
      methodDec: any
    ) {
      Reflect.defineMetadata("path", reqPath, targetClass, methodName);
      Reflect.defineMetadata("methodType", methodType, targetClass, methodName);
    };
  };
}

const get = reqProcess("get");
const post = reqProcess("post");
const put = reqProcess("put");
const del = reqProcess("del");

export { get, post, put, del };

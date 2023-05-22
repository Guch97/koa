/*
 * @Author: xs
 * @Date: 2023-05-22 10:51:26
 */

// 不带参数的装饰器
function firstDecorator(targetClass: { new (...args: any): any }) {
  const targetClassstance = new targetClass();
  console.log("进入到第一个装饰器");
}

@firstDecorator
class CustomerSevice {
  name: string = "下单";
  constructor() {
    console.log("进入构造器");
  }
  buy() {
    console.log("购买");
  }
  placeHolder() {
    console.log("下单");
  }
}

// ------------------------------------------------------
// 带参数的装饰器
function firstDecorator2(params: string) {
  return function getParams(targetClass: any) {
    const targetClassstance = new targetClass();
    console.log(params, "params");
  };
}

@firstDecorator2("abc")
class CustomerSevice2 {
  name: string = "下单";
  constructor() {
    console.log("进入构造器");
  }
  buy() {
    console.log("购买");
  }
  placeHolder() {
    console.log("下单");
  }
}

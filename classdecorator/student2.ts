/*
 * @Author: xs
 * @Date: 2023-05-22 10:51:26
 */

// 方法装饰器
/**
 * @description:
 * @param {any} tragetClassName 类名
 * @param {string} menthodname 方法名
 * @param {*} menthodnameProperty  数据属性名
 * @return {*}
 */
function disMethodsDecorator(
  tragetClassName: any,
  menthodname: string,
  menthodnameProperty: any
) {
  menthodnameProperty.value();
}

// 不带参数的装饰器
class CustomerMethodsSevice {
  name: string = "下单";
  constructor() {
    console.log("进入构造器");
  }
  @disMethodsDecorator
  buy() {
    console.log("购买");
  }
  placeHolder() {
    console.log("下单");
  }
}

// ------------------------------------------------------
// 带参数的装饰器
function firstDecorator3(params: string) {
  return function getParams(
    tragetClassName: any,
    menthodname: string,
    menthodnameProperty: any
  ) {
    const targetClassstance = new CustomerMethodsSevice2();
    console.log(params, "params");
  };
}
class CustomerMethodsSevice2 {
  name: string = "下单";
  constructor() {
    console.log("进入构造器");
  }
  buy() {
    console.log("购买");
  }
  @firstDecorator3("sss")
  placeHolder() {
    console.log("下单");
  }
}

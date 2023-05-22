/*
 * @Author: xs
 * @Date: 2023-05-22 10:12:46
 */
import { ItemsType, getSubmitFrmArray, Sct, EleOf } from "./test";
// 获取数组对象单个属性值组成的数组
function getOneItemValuesForm<
  T extends ItemsType<T>[],
  K extends keyof EleOf<T>
>(arr: T, k: K) {}

// 去重

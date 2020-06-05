/*
 * @Author: mhzhao
 * @Date: 2020-06-03 10:47:28
 * @LastEditTime: 2020-06-03 10:47:37
 */

/**
 * 文字超过N位截取 显示...
 * @param val (|)管道符左侧默认传入的参数
 * @param {Number} num 要截取字符长度 默认16
 */

export function interceptCharacterLen(val: string, num = 16): string {
  if (!val) return "";
  if (val.length > num) return val.substring(0, num) + "...";
  return val;
}

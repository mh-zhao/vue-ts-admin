/*
 * @Author: mhzhao
 * @Date: 2020-06-03 10:47:15
 * @LastEditTime: 2020-06-05 14:00:17
 */

/**
 * 防抖
 * 将几次操作合并为一此操作进行。原理是维护一个计时器，
 * 规定在delay时间后触发函数，但是在delay时间内再次触发的话，
 * 就会取消之前的计时器而重新设置。这样一来，只有最后一次操作能被触发。
 */
let timeout: any = null;
export function debounce(fn: any, delay = 500): void {
  if (timeout !== null) {
    clearTimeout(timeout);
  }
  timeout = setTimeout(fn, delay);
}
/**
 * 节流
 *使得一定时间内只触发一次函数。原理是通过判断是否到达一定时间来触发函数
 */
let timer: any = null;
export function throttle(fn: any, delay = 500): void {
  if (!timer) {
    timer = setTimeout(() => {
      fn();
      timer = null;
    }, delay);
  }
}

// 解析地址栏参数
export function param2Obj(url: string) {
  const search = url.split("?")[1];
  if (!search) {
    return {};
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"')
        .replace(/\+/g, " ") +
      '"}'
  );
}

// 全屏事件
export function setFullScreen(fullscreen: boolean) {
  let element: any;
  let el: any;
  el = document;
  element = document.documentElement;
  // 判断是否已经是全屏
  // 如果是全屏，退出
  if (fullscreen) {
    if (el.exitFullscreen) {
      el.exitFullscreen();
    } else if (el.webkitCancelFullScreen) {
      el.webkitCancelFullScreen();
    } else if (el.mozCancelFullScreen) {
      el.mozCancelFullScreen();
    } else if (el.msExitFullscreen) {
      el.msExitFullscreen();
    }
  } else {
    // 否则，进入全屏
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.webkitRequestFullScreen) {
      element.webkitRequestFullScreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.msRequestFullscreen) {
      // IE11
      element.msRequestFullscreen();
    }
  }
  // 改变当前全屏状态
  return (fullscreen = !fullscreen);
}

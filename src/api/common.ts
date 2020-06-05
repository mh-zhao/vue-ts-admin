/*
 * @Author: mhzhao
 * @Date: 2020-06-03 10:49:52
 * @LastEditTime: 2020-06-03 15:49:21
 */

import request from "../utils/request";

export function getData(params?: any) {
  return request({
    method: "get",
    url: `/ce`,
    params: params
  });
}

export function getPost(params?: any) {
  return request({
    method: "post",
    url: `/data`,
    data: params
  });
}

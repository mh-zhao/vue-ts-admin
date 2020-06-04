/*
 * @Author: mhzhao
 * @Date: 2020-06-03 10:46:12
 * @LastEditTime: 2020-06-03 14:17:49
 */ 
import axios, {AxiosResponse,AxiosRequestConfig } from "axios";
import config from "./config";
import { getToken, setToken } from "./auth";

const service = axios.create({
  baseURL: config.baseURL,
  timeout: 100000
  // headers: {'X-Custom-Header': 'foobar'}
});

// 添加请求拦截器
service.interceptors.request.use(
  (config:AxiosRequestConfig) => {
    // 在发送请求之前做处理
    if (getToken()) {
      config.headers["token"] = getToken();
    }
    return config;
  },
  (error:any) => {
    // 对请求错误做处理
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  (response:AxiosResponse) => {
    // 对响应数据做处理
    if (!getToken() && response.headers.token) {
      setToken(response.headers.token);
    }
    return response;
  },
  (error:any) => {
    // 对响应错误做处理
    return Promise.reject(error);
  }
);

export default service;

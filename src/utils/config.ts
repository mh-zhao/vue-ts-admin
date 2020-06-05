/*
 * @Author: mhzhao
 * @Date: 2020-06-03 10:45:54
 * @LastEditTime: 2020-06-03 10:46:04
 */

// 全局的config配置
const modeUrlObj = {
  // 生产环境
  production: {
    baseURL: "http://sc.com",
    authBaseURL: ""
  },
  // 开发环境
  development: {
    baseURL: "/api",
    authBaseURL: ""
  },
  // 测试环境
  test: {
    baseURL: "http://cs.com",
    authBaseURL: ""
  }
};
export default modeUrlObj[process.env.NODE_ENV];

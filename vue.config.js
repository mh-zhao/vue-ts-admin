/*
 * @Author: mhzhao
 * @Date: 2020-06-03 10:52:28
 * @LastEditTime: 2020-06-03 11:23:17
 */ 
module.exports = {
  //eslint
  lintOnSave: false,
  //解决ant design 按需加载报错
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      }
    }
  }
}
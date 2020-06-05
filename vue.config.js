/*
 * @Author: mhzhao
 * @Date: 2020-06-03 10:52:28
 * @LastEditTime: 2020-06-05 10:07:54
 */

const AntDesignThemePlugin = require("antd-theme-webpack-plugin");
const path = require("path");
//网页换肤
const options = {
  antDir: path.join(__dirname, "./node_modules/ant-design-vue"), //antd包位置
  stylesDir: path.join(__dirname, "./src/styles/theme"), //主题文件所在文件夹
  varFile: path.join(__dirname, "./src/styles/theme/variables.less"), // 自定义默认的主题色
  mainLessFile: path.join(__dirname, "./src/styles/theme/index.less"), // 项目中其他自定义的样式（如果不需要动态修改其他样式，该文件可以为空）
  // outputFilePath: path.join(__dirname, "./public/color.less"), //提取的less文件输出到什么地方
  themeVariables: ["@primary-color"], //要改变的主题变量
  indexFileName: "./public/index.html", // index.html所在位置
  generateOnce: false // 是否只生成一次（if you don't want to generate color.less on each chnage in code to make build process fast in development mode, assign it true value. But if you have new changes in your styles, you need to re-run your build process npm start.）
};

module.exports = {
  //基础路径
  publicPath: "./",
  //构建输入目录
  // outputDir: '',
  //放置静态资源的目录
  assetsDir: "static",
  //默认输出路径
  indexPath: "index.html",
  //文件名哈希
  filenameHashing: true,
  //source map
  productionSourceMap: false,
  //eslint
  lintOnSave: false,
  //解决ant design 按需加载报错
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          // modifyVars: {
          //   'primary-color': '#1DA57A',
          //   'link-color': '#1DA57A',
          //   'border-radius-base': '2px',
          // },
          javascriptEnabled: true
        }
      }
    }
  },
  configureWebpack: {
    plugins: [new AntDesignThemePlugin(options)]
  },
  //服务
  devServer: {
    // host: '0.0.0.0',
    //端口号
    // port: 9000,
    //启动打开浏览器
    // open: true,
    //跨域代理
    // proxy: {
    //   '/api': {
    //     target: 'http://192.168.30.71:8088',
    // ws: true,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': '/'
    //     }
    //   }
    // }
  }
};

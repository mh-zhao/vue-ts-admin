/*
 * @Author: mhzhao
 * @Date: 2020-06-03 10:57:02
 * @LastEditTime: 2020-06-04 15:33:20
 */

import { RouteConfig } from "vue-router";
import Layout from "../views/layout/index.vue";
const routes: Array<RouteConfig> = [
  {
    path: "/login",
    name: "login",
    meta: {
      title: "登录"
    },
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login/index.vue")
  },
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "home",
        meta: {
          title: "首页"
        },
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/home/index.vue")
      }
    ]
  }
];

export default routes;

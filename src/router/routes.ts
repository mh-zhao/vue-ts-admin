/*
 * @Author: mhzhao
 * @Date: 2020-06-03 10:57:02
 * @LastEditTime: 2020-06-09 10:26:43
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
      },
      {
        path: "/test",
        name: "test",
        meta: {
          title: "测试"
        },
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/test/index.vue")
      },
      {
        path: "/table",
        name: "table",
        meta: {
          title: "表格"
        },
        component: () =>
          import(/* webpackChunkName: "table" */ "../views/table/index.vue")
      }
    ]
  },
  {
    path: "/dataV",
    name: "dataV",
    meta: {
      title: "数据可视化"
    },
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/dataV/index.vue")
  },
  //人事管理
  {
    path: "/personnelManagement",
    component: Layout,
    name: "personnelManagement",
    meta: {
      title: "人事管理"
    },
    children: [
      {
        path: "/organizational",
        name: "organizational",
        meta: {
          title: "组织管理",
          parentMenuName: "personnelManagement"
        },
        component: () =>
          import(
            /* webpackChunkName: "organizational" */ "../views/personnelManagement/organizational/index.vue"
          )
      },
      {
        path: "/entry",
        name: "entry",
        meta: {
          title: "入职管理",
          parentMenuName: "personnelManagement"
        },
        component: () =>
          import(
            /* webpackChunkName: "entry" */ "../views/personnelManagement/entry/index.vue"
          )
      },
      {
        path: "/staff",
        name: "staff",
        meta: {
          title: "员工管理",
          parentMenuName: "personnelManagement"
        },
        component: () =>
          import(
            /* webpackChunkName: "staff" */ "../views/personnelManagement/staff/index.vue"
          )
      }
    ]
  }
];

export default routes;

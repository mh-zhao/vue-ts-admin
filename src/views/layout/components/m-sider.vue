<!--
 * @Author: mhzhao
 * @Date: 2020-06-03 16:38:51
 * @LastEditTime: 2020-06-11 14:16:45
-->
<template>
  <div :class="collapsed ? 'm-sider m-sider-collapsed' : 'm-sider'"
  >
    <div class="m-logo">
      <a href="/">mhzhao</a>
    </div>

    <div class="m-menu">
      <a-menu
        :default-selected-keys="['/home']"
        mode="inline"
        theme="dark"
        :inline-collapsed="collapsed"
        @click="handleMenuItem"
      >
        <template v-for="item in menuList">
          <a-menu-item v-if="!item.menu" :key="item.path">
            <a-icon type="pie-chart" />
            <span>{{ item.permName }}</span>
          </a-menu-item>
          <sub-menu v-else :key="item.path" :menuInfo="item"></sub-menu>
        </template>
      </a-menu>
    </div>

    <div class="m-footer">
      Copyright © 2020 mhzhao
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import SubMenu from "./sub-menu.vue";
@Component({
  components: {
    SubMenu
  }
})
export default class Msider extends Vue {
  @Prop({ default: false }) readonly collapsed!: boolean;
  // initial data
  private menuList = [
    {
      id: "1",
      permName: "首頁",
      icon: null,
      path: "/home",
      menu: null
    },
    {
      id: "2",
      icon: null,
      path: "/test",
      permName: "test",
      menu: [
        {
          id: "11",
          icon: null,
          path: "/test",
          permName: "测试",
          menu: null
        }
      ]
    },
    {
      id: "3",
      icon: null,
      path: "/test4",
      permName: "form",
      menu: [
        {
          id: "22",
          icon: null,
          path: "/test5",
          permName: "基础表单",
          menu: [
            {
              id: "33",
              icon: null,
              path: "/test2",
              permName: "form",
              menu: null
            }
          ]
        }
      ]
    },
    {
      id: "4",
      icon: null,
      path: "/dataV",
      permName: "数据可视化",
      menu: null
    },
  ];
  // lifecycle hook
  private created(): void {}
  private mounted(): void {}
  private destroyed(): void {}
  // methods
  handleMenuItem(item: any) {
    console.log("菜单：", item);
    this.$router.push({ path: item.key });
  }
}
</script>

<style scoped lang="less">
.m-sider {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
  width: 220px;
  height: 100%;
  background: #20222a;
  transition: width 0.2s;
  .m-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    a {
      color: #fff;
    }
  }
  .m-menu {
    width: 100%;
    height: calc(100% - 100px);
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .m-footer {
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: inherit;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 14px;
  }
}
.m-sider-collapsed {
  width: 80px !important;
}
</style>

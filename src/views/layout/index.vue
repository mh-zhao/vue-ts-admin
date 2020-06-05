<!--
 * @Author: mhzhao
 * @Date: 2020-06-04 14:43:08
 * @LastEditTime: 2020-06-05 17:05:26
-->
<template>
  <div class="m-wrap">
    <!-- 顶部导航 -->
    <m-header @on-menu-switch="onMenuSwitch"></m-header>
    <!-- 侧边菜单 -->
    <m-sider :collapsed="collapsed"></m-sider>
    <!-- 主体内容 -->
    <m-main :collapsed="collapsed">
      <router-view></router-view>
    </m-main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import mHeader from "./components/m-header.vue";
import mSider from "./components/m-sider.vue";
import mMain from "./components/m-main.vue";
@Component({
  components: {
    mHeader,
    mSider,
    mMain
  }
})
export default class HelloWorld extends Vue {
  // initial data
  private collapsed = false;
  // lifecycle hook
  private created(): void {}
  private mounted(): void {}
  private destroyed(): void {}
  // methods
  onMenuSwitch() {
    this.collapsed = !this.collapsed;
  }
}
</script>

<style scoped lang="less"></style>

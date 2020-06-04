<!--
 * @Author: mhzhao
 * @Date: 2020-06-03 16:34:29
 * @LastEditTime: 2020-06-04 16:53:37
--> 
<template>
  <header :class="isCollapsed ? 'm-header m-header-collapsed' : 'm-header'">
    <!-- <span class="m-menu-switch" @click="onMenuSwitch">
      <a-icon v-if="isCollapsed" type="menu-fold" />
      <a-icon v-else type="menu-unfold" />
    </span> -->

    <ul class="m-right-nav fl">
      <li @click="onMenuSwitch">
        <a-icon class="top-icon" v-if="isCollapsed" type="menu-fold" />
        <a-icon class="top-icon" v-else type="menu-unfold" />
      </li>
      <li>home/test</li>
    </ul>

    <ul class="m-right-nav fr">
      <li>
        <a-dropdown>
          <a class="ant-dropdown-link" @click="e => e.preventDefault()"><a-icon class="top-icon" type="bg-colors" /></a>
          <a-menu slot="overlay" @click="onDropdownBtn">
            <a-menu-item>
              <a href="javascript:;">蓝色</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">红色</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </li>
      <li>
        <a-icon class="top-icon" type="global" />
      </li>
      <li @click="handleFullScreen">
        <a-icon v-if="!isFullscreen" class="top-icon" type="fullscreen" />
        <a-icon v-else class="top-icon" type="fullscreen-exit" />
      </li>
      <li>
        <a-dropdown>
          <a class="ant-dropdown-link" @click="e => e.preventDefault()">Admin<a-icon type="down" /></a>
          <a-menu slot="overlay" @click="onDropdownBtn">
            <a-menu-item>
              <a href="javascript:;">个人中心</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">退出登录</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </li>
    </ul>


  </header>
</template>

<script lang='ts'>
import { Component, Vue, Emit } from 'vue-property-decorator';
import { setFullScreen } from '../../../utils/utils'
@Component
export default class Mheader extends Vue {
  // initial data
  private isCollapsed = false;
  private isFullscreen = false;
  // lifecycle hook
  private created():void {}
  private mounted():void {}
  private destroyed():void {}

  @Emit() onMenuSwitch() {
    this.isCollapsed = !this.isCollapsed;
  }
  // methods
  onDropdownBtn(key:any) {
    console.log('下拉菜单：',key)
  }
  handleFullScreen() {
    this.isFullscreen = setFullScreen(this.isFullscreen);
  }
  
}
</script>

<style scoped lang='less'>
.m-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
  width: calc(100% - 220px);
  height: 50px;
  background: #fff;
  color: #333;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
  transition: width .2s;
  .m-right-nav {
    display: flex;
    align-items: center;
    .top-icon {
      font-size: 20px;
    }
    li {
      display: flex;
      align-items: center;
      height: 50px;
      line-height: 50px;
      padding: 0 20px;
      cursor: pointer;
    }
  }
}
.m-header-collapsed {
  width: calc(100% - 80px) !important;
}
</style>
<!--
 * @Author: mhzhao
 * @Date: 2020-06-03 16:18:43
 * @LastEditTime: 2020-06-08 11:42:28
-->
<template>
  <div :class="collapsed ? 'm-body m-body-collapsed' : 'm-body'"
  :style="{position: this.$store.state.common.reportFormFullscreen ? 'static' : 'relative'}">
    <div class="m-main">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class Mbody extends Vue {
  // initial data
  @Prop({ default: false }) readonly collapsed!: boolean;
  // lifecycle hook
  private created(): void {}
  private mounted(): void {}
  private destroyed(): void {}
  // methods
}
</script>

<style scoped lang="less">
.m-body {
  position: relative;
  top: 50px;
  right: 0;
  z-index: 999;
  width: 100%;
  height: auto;
  padding: 15px 15px 15px 235px;
  overflow-x: hidden;
  background: #f5f5f5;
  transition: padding 0.2s;
  .m-main {
    width: 100%;
    min-width: 1024px;
    height: auto;
    // padding: 15px;
    background: #ffffff;
    border-radius: 2px;
    box-shadow: 0 2.5px 10px 0 rgba(19, 20, 21, 0.06);
  }
}
.m-body-collapsed {
  padding-left: 95px !important;
}
</style>

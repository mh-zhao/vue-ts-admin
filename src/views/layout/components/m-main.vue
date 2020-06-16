<!--
 * @Author: mhzhao
 * @Date: 2020-06-03 16:18:43
 * @LastEditTime: 2020-06-11 15:00:27
-->
<template>
  <div :class="collapsed ? 'm-body m-body-collapsed' : 'm-body'"
  :style="{position: this.$store.state.common.reportFormFullscreen ? 'static' : 'absolute'}">
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
  position: absolute;
  top: 50px;
  left: 220px;
  right: 0;
  bottom: 0;
  z-index: 999;
  overflow: auto;
  padding: 15px;
  background: #f5f5f5;
  transition: left 0.2s;
  .m-main {
    width: 100%;
    min-width: 960px;
    min-height: 100%;
    // padding: 15px;
    background: #ffffff;
    border-radius: 2px;
    box-shadow: 0 2.5px 10px 0 rgba(19, 20, 21, 0.06);
  }
}
.m-body-collapsed {
  left: 80px !important;
}
</style>

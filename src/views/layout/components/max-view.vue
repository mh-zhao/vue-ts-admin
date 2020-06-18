<!--
 * @Author: mhzhao
 * @Date: 2020-06-05 14:07:19
 * @LastEditTime: 2020-06-09 11:31:29
-->
<template>
  <div
    class="max-view"
    :style="{
      transform: `scale(${scale}) translate(-50%, -50%)`,
      width: `${width}px`,
      height: `${height}px`
    }"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { debounce } from "../../../utils/utils";
@Component
export default class HelloWorld extends Vue {
  @Prop({ default: 1920 }) readonly width!: number;
  @Prop({ default: 1080 }) readonly height!: number;
  // initial data
  private scale = 0;
  // lifecycle hook
  private created(): void {}
  private mounted(): void {
    this.getScale();
    window.addEventListener("resize", this.setScale);
  }
  private destroyed(): void {}
  // methods
  getScale() {
    // 设计稿基数
    const ww = window.innerWidth / this.width;
    const wh = window.innerHeight / this.height;
    const scale = ww < wh ? ww : wh;
    this.scale = scale;
  }
  setScale() {
    debounce(this.getScale);
  }
}
</script>

<style scoped lang="less">
.max-view {
  transform-origin: 0 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transition: 0.3s;
  background: gray;
}
</style>

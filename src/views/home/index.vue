<!--
 * @Author: mhzhao
 * @Date: 2020-06-03 10:56:24
 * @LastEditTime: 2020-06-05 16:40:04
-->
<template>
  <div class="home">
    <div class="top">
      <h1>业务报表{{this.$store.state.common.reportFormFullscreen}}</h1>
      <a-button @click="onReportFormFullscreen" type="primary" size="small" :icon="this.$store.state.common.reportFormFullscreen ? 'fullscreen-exit' : 'fullscreen'">
        全屏
      </a-button>
    </div>
    <div 
    :class="this.$store.state.common.reportFormFullscreen ? 'report-form-wrap fullscreen' : 'report-form-wrap'"
    :style="{transform: 
    this.$store.state.common.reportFormFullscreen ? 
    `scale(${scale}) translate(-50%, -50%)` : ''}"
    >
      <!-- <img src="../../assets/images/form.png" alt=""> -->
      <Chart></Chart>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MaxView from '../layout/components/max-view.vue'
import Chart from '../../components/charts/index.vue'
import { setFullScreen, debounce } from '../../utils/utils'
@Component({
  components: {
    MaxView,
    Chart
  }
})
export default class HelloWorld extends Vue {
  // initial data
  scale:number = 0;
  // lifecycle hook
  private created(): void {}
  private mounted(): void {
    window.addEventListener('resize',this.checkFull)
  }
  private destroyed(): void {
    window.removeEventListener('resize',this.checkFull)
  }
  // methods
  onReportFormFullscreen() {
    let reportFormFullscreen = setFullScreen(this.$store.state.common.reportFormFullscreen);
    this.$store.commit('SET_STATE',{reportFormFullscreen})
    this.getScale();
  }
  checkFull() {
    const {reportFormFullscreen} = this.$store.state.common;
    if (!reportFormFullscreen) return;
    this.setScale();
    let isFull=!!(document.webkitIsFullScreen || document.mozFullScreen || 
        document.msFullscreenElement || document.fullscreenElement
    );
    if (!isFull) {
      this.$store.commit('SET_STATE',{reportFormFullscreen: false})
    }
  }
  getScale() {
    // 设计稿基数
    let ww = window.innerWidth / 1920;
    let wh = window.innerHeight / 1080;
    let scale = ww < wh ? ww : wh;
    this.scale = scale;
  }
  setScale() {
    debounce(this.getScale)
  }
}
</script>

<style scoped lang="less">
.home {
  width: 100%;
  // height: 500px;
  // background: green;
  .top {
    height: 40px;
    line-height: 40px;
    padding: 0 15px;
    border-bottom: 1px solid #e8e8e8;
    text-align: right;
    h1 {
      float: left;
      font-size: 15px;
    }
  }
  .report-form-wrap {
    padding: 15px;
    background: #ffffff;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .fullscreen {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 2000;
    width: 1920px;
    height: 1080px;
    transform: translate(-50%,-50%);
    transition: .2s;
  }
}
</style>

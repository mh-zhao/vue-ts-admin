<!--
 * @Author: mhzhao
 * @Date: 2020-06-09 10:24:44
 * @LastEditTime: 2020-06-09 11:18:10
--> 
<template>
  <div class='demo'>
    <div class="content"
     :style="{transform:  `scale(${scale}) translate(-50%, -50%)`}">
      <div class="wrap">
        1231123
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import { setFullScreen, debounce } from '../../utils/utils'
@Component
export default class demo extends Vue {
  // initial data
  scale:number = 0;
  width:number = 0;
  height:number = 0;
  // lifecycle hook
  private created():void {}
  private mounted():void {
    this.setScale();
    window.addEventListener('resize',this.setScale)
  }
  private destroyed():void {
    window.removeEventListener('resize',this.setScale)
  }
  // methods
  getScale() {
    // 设计稿基数
    // let ww = window.innerWidth / 1920;
    // let wh = window.innerHeight / 1080;
    // let scale = ww < wh ? ww : wh;
    let wh = window.innerHeight - 104;
    let scale = wh / 1080;
    let ww = scale * 1920;
    this.scale = scale;
    this.width = Math.round(ww);
    this.height = Math.round(wh);
  }
  setScale() {
    debounce(this.getScale)
  }
}
</script>

<style scoped lang='less'>
.demo {
  position: relative;
  width: 100%;
  height: 100%;
}
.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 1920px;
  height: 1080px;
  background: gray;
}
.wrap {
  
}

</style>
<!--
 * @Author: mhzhao
 * @Date: 2020-06-09 10:24:44
 * @LastEditTime: 2020-06-11 16:15:53
--> 
<template>
  <div class=''>
    <button class="head" @click="numFun(0,5000)">点击金额变动</button>
   <div>{{amount}}</div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import func from '../../../vue-temp/vue-editor-bridge';
@Component
export default class HelloWorld extends Vue {
  // initial data
  amount:any = 0
  // lifecycle hook
  private created():void {}
  private mounted():void {}
  private destroyed():void {}
  // methods
  //金额变动动画
  numFun(startNum:number,maxNum:number) {
    var that = this
    let numText = startNum;
    let golb:any; // 为了清除requestAnimationFrame
    function numSlideFun(){ // 数字动画
        numText+=2; // 速度的计算可以为小数 。数字越大，滚动越快
        if(numText >= maxNum){
            numText = maxNum;
            cancelAnimationFrame(golb);
        }else {
            golb = requestAnimationFrame(numSlideFun);
        }
      that.amount=numText
      // console.log(numText)
    }
      numSlideFun(); // 调用数字动画
  }
  numFuns(startNum:number,maxNum:number) {
    let numText = startNum;
    let timer:any;
    const setNum = () => {
      if (numText === maxNum) {
        clearTimeout(timer)
        return;
      }
      this.amount += numText + 5;
      timer = setTimeout(()=>{
        setNum()
      },10)
    }
    setNum();
  }
}
</script>

<style scoped lang='less'>

</style>
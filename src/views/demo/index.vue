<!--
 * @Author: mhzhao
 * @Date: 2020-06-09 10:24:44
 * @LastEditTime: 2020-06-11 10:21:57
--> 
<template>
  <div class='test'>
    <div class="box">
      <chart chartType='radar' :data="barData" />
    </div>
    <div class="box">
      <chart chartType='calendar' />
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import Chart from '../../components/charts/index.vue'
@Component({
  components: {
    Chart
  }
})
export default class HelloWorld extends Vue {
  // initial data
  barData:any[] = []
  // lifecycle hook
  private created():void {}
  private mounted():void {}
  private destroyed():void {}
  // methods
  
}
</script>

<style scoped lang='less'>
.box {
  width: 430px;
  height: 250px;
}
</style>
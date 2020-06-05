<!--
 * @Author: mhzhao
 * @Date: 2020-06-05 16:33:00
 * @LastEditTime: 2020-06-05 17:05:04
--> 
<template>
  <div id='myChart'></div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
// 引入 ECharts 主模块
const echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');

@Component
export default class HelloWorld extends Vue {
  // initial data
  
  // lifecycle hook
  private created():void {}
  private mounted():void {
    this.initChart();
  }
  private destroyed():void {}
  // methods
  initChart() {
    this.$nextTick(() => {
      const myChart = echarts.init(document.getElementById('myChart'));
      // 绘制图表
      myChart.setOption({
          title: {
              text: 'ECharts 入门示例'
          },
          tooltip: {},
          xAxis: {
              data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {},
          series: [{
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
          }]
      });
    })
    
  }
}
</script>

<style scoped lang='less'>
#myChart {
  width: 500px;
  height: 500px;
}
</style>
<!--
 * @Author: mhzhao
 * @Date: 2020-06-05 16:33:00
 * @LastEditTime: 2020-06-09 16:43:31
--> 
<template>
  <div class="myChart"></div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';
import { debounce } from '../../utils/utils'
import defaultOption from './default-option'
import {merge} from 'lodash'
// 引入 ECharts 主模块
const echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/bar');
require('echarts/lib/chart/line')
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');




@Component
export default class Chart extends Vue {
  @Prop() readonly chartType!: string
  @Prop({default:()=>{}}) readonly options?: object
  @Prop({default:()=>[]}) readonly data!: any[]
  // initial data
  myChart:any;
  // lifecycle hook
  private created():void {}
  private mounted():void {
    this.initChart();
    window.addEventListener('resize',this.resizeChart)
  }
  private destroyed():void {
    window.removeEventListener('resize',this.resizeChart)
  }
  // methods
  initChart() {
    this.$nextTick(() => {
      //this.$el 当前vue示例根DOM元素
      this.myChart = echarts.init(this.$el);
      // merge() 该方法类似_.assign 详情见lodash.js
      let option = merge(defaultOption[this.chartType],{
        ...this.options,
        series: [{
          data: this.data
        }],
      })
      // 绘制图表
      this.myChart.setOption(option);
    })
    
  }
  resizeChart() {
    debounce(()=>{this.myChart.resize()})
  }
}
</script>

<style scoped lang='less'>
.myChart {
  width: 100%;
  height: 100%;
}
</style>
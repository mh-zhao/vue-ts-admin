/*
 * @Author: mhzhao
 * @Date: 2020-06-09 15:38:58
 * @LastEditTime: 2020-06-09 16:38:27
 */
const echarts = require('echarts/lib/echarts');
let axisLabel = {
  fontSize: 14,
  color: '#fff'
}
const option = {
  bar: {
    tooltip: {},
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      axisLabel
    },
    yAxis: {
      axisLabel
    },
    series: [{
      name: '销量',
      type: 'bar',
      data: []
    }],
  },
  line: {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985',
        },
      },
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      axisLabel,
      data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    },
    yAxis: {
      type: 'value',
      axisLabel
    },
    series: [{
      name: '新建数',
      type: 'line',
      top: 'center',
      left: 'center',
      smooth: true, // 是否平滑曲线显示
      showAllSymbol: true,
      symbol: 'circle',
      symbolSize: 6,
      lineStyle: {
        normal: {
          color: '#4AADEB', // 线条颜色
        },
      },
      label: {
        show: false,
        position: 'top',
        textStyle: {
          color: '#fff',
        },
      },
      itemStyle: {
        color: '#4AADEB',
        borderColor: '#fff',
        borderWidth: 3,
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#4AADEB',
          },
          {
            offset: 1,
            color: '#3fbbff0d',
          },
          ], false),
        },
      },
      data: []
    }],
  }
}

export default option;